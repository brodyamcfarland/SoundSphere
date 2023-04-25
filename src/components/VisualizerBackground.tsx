import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import FloorPlane from "./FloorPlane";
import FrequencyBars from "./FrequencyBars";
interface VisualizerProps {
     frequencyData: Float32Array | null;
     volume: number;
     isPlaying: boolean;
}

const VisualizerBackground = ({
     frequencyData,
     volume,
     isPlaying,
}: VisualizerProps) => {
     const starsRef = useRef();

     return (
          <Canvas>
               <FloorPlane
                    volume={volume}
                    frequencyData={frequencyData}
                    isPlaying={isPlaying}
               />
               <FrequencyBars
                    frequencyData={frequencyData}
                    volume={volume}
                    isPlaying={isPlaying}
               />
               <pointLight position={[0, 1000, -2000]} />
               <pointLight position={[0, 1000, 2000]} />
               <pointLight
                    intensity={0.5}
                    position={[0, 300, -10]}
                    color={"red"}
               />
               <Stars
                    ref={starsRef}
                    depth={250}
                    saturation={1}
                    speed={1}
                    count={3000}
               />
               <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.2}
                    enableZoom={false}
               />
          </Canvas>
     );
};

export default VisualizerBackground;
