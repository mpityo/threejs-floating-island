import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { BufferAttribute, Color } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function FloatingIsland() {
  // download the blender scene
  const gltf = useLoader(
    GLTFLoader,
    (process.env.PUBLIC_URL + "/models/floating_island.glb")
  );

  useEffect(() => {
    if (!gltf) return;

    let mesh = gltf.scene.children[0];

    // create new uvs for the mesh for the next step
    let uvs = mesh.geometry.attributes.uv.array;
    mesh.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));

    // reapply the same material to give it the right 'look'
    mesh.material.lightMap = mesh.material.map;
    mesh.material.lightMapIntensity = 400;
    mesh.material.color = new Color(0.04, 0.06, 0.1);
  }, [gltf]);

  return (
    // inject an already existing threejs object inside react-three-fiber scene graph
    <primitive object={gltf.scene} />
  );
}
