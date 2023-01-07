import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { DoubleSide } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Portal() {
  // actual mesh
  const model = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/portal.glb"
  );
  // effect of the portal
  const mask = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/portal_mask.glb"
  );

  useEffect(() => {
    if (!model) return;

    // for blender - get the first (and only) mesh that was created
    let mesh = model.scene.children[0];
    // controls how strong the background lighting effect is on the material
    mesh.material.envMapIntensity = 3.5;

    let maskMesh = mask.scene.children[0];
    // by default the back side of a triangle is NOT visible
    // using DoubleSide makes it visible from both sides
    maskMesh.material.side = DoubleSide;
  }, [model, mask]);

  return (
    <>
      <primitive object={model.scene} />
      <primitive object={mask.scene} />
    </>
  );
}
