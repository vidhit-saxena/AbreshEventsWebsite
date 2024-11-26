// three-types.d.ts
import * as THREE from 'three';

declare module 'three' {
  export interface GLTF {
    scene: THREE.Group;
    scenes: THREE.Group[];
    cameras: THREE.Camera[];
    animations: THREE.AnimationClip[];
    asset: {
      version: string;
      generator: string;
    };
  }
}