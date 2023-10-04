import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const PI = Math.PI;
const max = Math.PI * 2;
const phiLength = max / 10;
const thetaStart = max / 6;
const thetaLength = max / 6;
const rotateFactor = (PI * 2) / 5;

const Background: React.FC = () => {
  const inner = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const middle = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const outer = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  useFrame((_, delta) => {
    if (inner.current && middle.current && outer.current) {
      inner.current.rotation.x += delta;
      middle.current.rotation.y += delta;
      outer.current.rotation.z += delta;
    }
  });
  return (
    <group>
      <group ref={inner}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <mesh key={i} rotation={[0, rotateFactor * i, 0]}>
              <sphereGeometry
                args={[3, 32, 16, 0, phiLength, thetaStart, thetaLength]}
              />
              <meshStandardMaterial side={THREE.DoubleSide} />
            </mesh>
          ))}
      </group>
      <group ref={middle}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <mesh key={i} rotation={[0, rotateFactor * i, 0]}>
              <sphereGeometry
                args={[6, 32, 16, 0, phiLength, thetaStart, thetaLength]}
              />
              <meshStandardMaterial side={THREE.DoubleSide} />
            </mesh>
          ))}
      </group>
      <group ref={outer}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <mesh key={i} rotation={[0, rotateFactor * i, 0]}>
              <sphereGeometry
                args={[9, 32, 16, 0, phiLength, thetaStart, thetaLength]}
              />
              <meshStandardMaterial side={THREE.DoubleSide} />
            </mesh>
          ))}
      </group>
    </group>
  );
};
export default Background;
