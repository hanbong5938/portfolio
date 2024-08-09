declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.glb' {
  import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
  import { ObjectMap } from '@react-three/fiber';
  const content: (GLTF & ObjectMap) | (GLTF & ObjectMap)[];
  export default content;
}
