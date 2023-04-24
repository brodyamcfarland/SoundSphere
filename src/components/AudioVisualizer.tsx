import { MeshReflectorMaterial } from "@react-three/drei";

const AudioVisualizer = () => {
     return (
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -40, 0]}>
               <planeGeometry args={[1000, 1000]} />
               <MeshReflectorMaterial
                    color={"#333333"}
                    mixStrength={1} // Strength of the reflections
                    mixContrast={1} // Contrast of the reflections
                    resolution={250} // Off-buffer resolution, lower=faster, higher=better quality, slower
                    mirror={0.8} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                    depthScale={1000} // Scale the depth factor (0 = no depth, default = 0)
                    minDepthThreshold={0.1} // Lower edge for the depthTexture interpolation (default = 0)
                    maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
               />
          </mesh>
     );
};

export default AudioVisualizer;
