import React, { useMemo } from "react";
import * as THREE from "three";

const Stars: React.FC = () => {
  const points = useMemo(() => {
    const count = 5000;
    const distance = 50;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * (Math.random() * distance);
    }

    return new THREE.BufferAttribute(arr, 3);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} {...points} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color={0xff00ff}
        //transparent={true}
        //blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
export default Stars;
