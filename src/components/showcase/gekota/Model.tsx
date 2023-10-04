import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import * as THREE from "three";

const Model: React.FC = () => {
  const glb = useGLTF("/glb/gekota.glb");

  useEffect(() => {
    if (glb) {
      //re-size
      glb.scene.scale.set(2.5, 2.5, 2.5);
      glb.scene.position.set(0, -1, 0);
      //glb.scene.rotation.set(0, Math.PI, 0);
      glb.scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity = 10;
        }
      });
    }
  }, [glb]);

  return (
    <group>
      <primitive object={glb.scene} />
    </group>
  );
};
export default Model;
