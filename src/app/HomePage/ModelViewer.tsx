'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import ServicesCarousel from './ServiceSlider';

const ModelViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const markerRef = useRef<THREE.Mesh | null>(null);
  const hoverMeshRef = useRef<THREE.Mesh | null>(null);
  const rippleRef = useRef<THREE.Mesh | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  
  // State for hover and marker position
  const [isHovering, setIsHovering] = useState(false);
  const [markerScreenPosition, setMarkerScreenPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Early return if window is undefined or mount ref is null
    if (typeof window === 'undefined' || !mountRef.current) return () => {};

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const currentMount = mountRef.current;
    const camera = new THREE.PerspectiveCamera(
      70,
      currentMount.clientWidth / currentMount.clientHeight,
      0.9,
      1000
    );
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.03);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.1);
    directionalLight.position.set(-22, 44, -8);
    scene.add(directionalLight);

    // Adjust camera position to look at the globe and slightly downward
    camera.position.set(0, 1, 2);

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Disable zoom
    (controls as any).enableZoom = false;

    const loader = new GLTFLoader();
    loader.load(
      '/earth.glb', // Earth model path
      (gltf) => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        // Adjust model position to bring India into view
        model.rotation.y = Math.PI; // Rotate the model to show India
        model.position.set(0, 0, 0); // Center the model

        scene.add(model);
        modelRef.current = model;

        // Create marker with ripple effect
        const createMarkerWithRipple = () => {
          // Marker
          const markerGeometry = new THREE.SphereGeometry(0.05, 32, 32);
          const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x00D6FF });
          const marker = new THREE.Mesh(markerGeometry, markerMaterial);

          // Ripple
          const rippleGeometry = new THREE.SphereGeometry(0.05, 32, 32);
          const rippleMaterial = new THREE.ShaderMaterial({
            uniforms: {
              time: { value: 0 },
              color: { value: new THREE.Color(0x00D6FF) },
              opacity: { value: 0.5 }
            },
            vertexShader: `
              uniform float time;
              varying vec3 vPosition;
              void main() {
                vPosition = position;
                vec3 newPosition = position * (1.0 + sin(time * 3.0) * 0.5);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
              }
            `,
            fragmentShader: `
              uniform float time;
              uniform vec3 color;
              uniform float opacity;
              varying vec3 vPosition;
              void main() {
                float pulse = sin(time * 3.0) * 0.5 + 0.5;
                float alpha = opacity * (1.0 - length(vPosition)) * pulse;
                gl_FragColor = vec4(color, alpha);
              }
            `,
            transparent: true,
            depthWrite: false
          });
          const ripple = new THREE.Mesh(rippleGeometry, rippleMaterial);

          // Set marker and ripple position
          const radius = 1.12;
          const latitude = 28.6139; // New Delhi latitude
          const longitude = 165.2090; // Corrected longitude for New Delhi

          // Convert latitude/longitude to radians
          const latRad = THREE.MathUtils.degToRad(latitude);
          const lonRad = THREE.MathUtils.degToRad(longitude);

          // Spherical to Cartesian conversion
          const x = radius * Math.cos(latRad) * Math.sin(lonRad);
          const y = radius * Math.sin(latRad);
          const z = radius * Math.cos(latRad) * Math.cos(lonRad);

          // Position marker and ripple
          marker.position.set(x, y, z);
          ripple.position.set(x, y, z);

          // Create larger invisible hover area
          const hoverGeometry = new THREE.SphereGeometry(0.2, 32, 32); // Increased hover area
          const hoverMaterial = new THREE.MeshBasicMaterial({ 
            transparent: true, 
            opacity: 0 
          });
          const hoverMesh = new THREE.Mesh(hoverGeometry, hoverMaterial);
          hoverMesh.position.set(x, y, z);

          // Scale adjustments
          marker.scale.set(0.3, 0.3, 0.3);
          ripple.scale.set(1, 1, 1);
          hoverMesh.scale.set(1, 1, 1);

          // Add to scene
          model.add(marker);
          model.add(ripple);
          model.add(hoverMesh);

          markerRef.current = marker;
          rippleRef.current = ripple;
          hoverMeshRef.current = hoverMesh;

          // Add event listeners for hover
          const raycaster = new THREE.Raycaster();
          const mouse = new THREE.Vector2();

          const onMouseMove = (event: MouseEvent) => {
            if (!currentMount || !camera || !scene || !hoverMesh) return;

            // Calculate mouse position in normalized device coordinates
            const rect = currentMount.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            // Update the picking ray with the camera and mouse position
            raycaster.setFromCamera(mouse, camera);

            // Use the hover mesh for intersection
            const intersects = raycaster.intersectObject(hoverMesh, true);

            if (intersects.length > 0) {
              setIsHovering(true);
              
              // Convert marker's world position to screen coordinates
              const markerWorldPosition = new THREE.Vector3();
              marker.getWorldPosition(markerWorldPosition);

              // Project the world position to screen coordinates
              const screenPosition = markerWorldPosition.clone();
              screenPosition.project(camera);

              // Convert to screen space
              const halfWidth = rect.width / 2;
              const halfHeight = rect.height / 2;
              
              const screenX = (screenPosition.x * halfWidth) + halfWidth + rect.left;
              const screenY = -(screenPosition.y * halfHeight) + halfHeight + rect.top;

              setMarkerScreenPosition({ x: screenX, y: screenY });
            } else {
              setIsHovering(false);
            }
          };

          currentMount.addEventListener('mousemove', onMouseMove);

          // Cleanup function
          return () => {
            currentMount.removeEventListener('mousemove', onMouseMove);
          };
        };

        // Create marker and ripple after the globe is loaded
        const cleanup = createMarkerWithRipple();

        // Return cleanup function
        return cleanup;
      },
      (event: ProgressEvent) => {
        console.log(`Loading progress: ${(event.loaded / event.total) * 100}%`);
      },
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.001;
      }

      // Update ripple shader time uniform
      if (rippleRef.current) {
        const rippleMaterial = rippleRef.current.material as THREE.ShaderMaterial;
        rippleMaterial.uniforms.time.value = clock.getElapsedTime();
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (currentMount) {
        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };
    window.addEventListener('resize', handleResize);

    // Comprehensive cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Dispose of Three.js resources
      renderer.dispose();
      controls.dispose();
      
      // Remove renderer from DOM
      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []); // Empty dependency array ensures this runs only once



  return (
    
    <section id="what-we-do"  className="bg-black text-white py-[72px] sm:py-8 ">
      <div className="w-full bg-black/90 py-10 sm:py-4 px-4">
        <div className="container">
          {/* Section Heading */}
          <h2 className="text-center font-bold text-4xl sm:text-6xl tracking-tighter">
            Everything we do
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center mt-5 text-xl text-white/70">
              We are passionate about delivering excellence in everything we do, creating an impact on our customers and the world.
            </p>
          </div>
          
          {/* Main Content Container */}
          <div className=" flex flex-col sm:mt-8 mt-4 lg:flex-row gap-4 sm:gap-4">
            {/* Slider/Content Container - Left on large screens, top on small screens */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              {/* Left: Slider Section */}
              <div className="w-[380px] lg:w-[850px] sm:w-[750px] h-[550px]  rounded-lg text-white flex flex-col">
                <ServicesCarousel />
              </div>
            </div>
            
            {/* Globe Container - Right on large screens, bottom on small screens */}
            <div className="w-full lg:w-1/2  lg:px-16 lg:pr-6
              flex justify-center items-center"
            >
              <div className="w-full relative
                h-[380px]  
                md:h-[500px]  
                lg:h-[550px]
                "
              >
                <div
                  ref={mountRef}
                  className="absolute inset-0 bg-black lg:px-8"
                />
                {isHovering && (
                  <div 
                    className="fixed bg-white/80 text-black p-3 rounded-lg shadow-lg text-sm"
                    style={{
                      top: `${markerScreenPosition.y}px`, 
                      left: `${markerScreenPosition.x}px`,
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: 'none',
                      zIndex: 10
                    }}
                  >
                    <p className=" text-black">New Delhi, India</p>
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelViewer;

  
  