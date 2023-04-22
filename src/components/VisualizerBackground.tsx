import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

const VisualizerBackground = () => {
     const starsRef = useRef();

     return (
          <Canvas>
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
