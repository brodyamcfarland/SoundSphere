import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface FloorProps {
     volume: number;
     frequencyData: Float32Array | null;
     isPlaying: boolean;
}

const FloorPlane = ({ volume, frequencyData, isPlaying }: FloorProps) => {
     const floorRef = useRef<any>();

     useFrame(({ clock }) => {
          if (floorRef.current && frequencyData && isPlaying) {
               // Change the material color based on the volume if music is on
               floorRef.current.material.color.setRGB(
                    volume / 5,
                    0,
                    frequencyData[13] / 500
               );
          }
     });

     return (
          <mesh
               ref={floorRef}
               rotation={[-Math.PI / 2, 0, 0]}
               position={[0, -10.5, 0]}
          >
               <planeGeometry args={[1000, 1000]} />
               <meshStandardMaterial color={"#000000"} />
          </mesh>
     );
};

export default FloorPlane;
