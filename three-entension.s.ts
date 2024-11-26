// three-extensions.d.ts
declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { Loader } from 'three';
    import { Group } from 'three';
  
    export class GLTFLoader extends Loader {
      load(
        url: string,
        onLoad: (gltf: { scene: Group }) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  }
  
  declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher, MOUSE, Vector3 } from 'three';
  
    export class OrbitControls extends EventDispatcher {
      constructor(object: Camera, domElement?: HTMLElement);
  
      // Event handling
      enabled: boolean;
      target: Vector3;
  
      // Controls settings
      enableDamping: boolean;
      dampingFactor: number;
      screenSpacePanning: boolean;
      maxPolarAngle: number;
  
      update(): void;
      dispose(): void;
      saveState(): void;
      reset(): void;
      getPolarAngle(): number;
      getAzimuthalAngle(): number;
      dispose(): void;
    }
  }
  