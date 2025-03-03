import { Canvas } from "@react-three/fiber";

function Heatmap() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
      </mesh>
    </Canvas>
  );
}

export default Heatmap;
