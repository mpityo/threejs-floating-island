import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { DoubleSide, Color } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Grass() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/grass.glb"
  );

  useEffect(() => {
    if (!gltf) return;

    const mesh = gltf.scene.children[0];
    const childMaterial = mesh.material;

    childMaterial.alphaToCoverage = true;
    childMaterial.transparent = true;
    childMaterial.map = childMaterial.emissiveMap;
    childMaterial.emissive = new Color(0.5, 0.5, 0.5);
    childMaterial.side = DoubleSide;
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}
