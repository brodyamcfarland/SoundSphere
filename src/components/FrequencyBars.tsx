import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const NUM_BARS = 20;
const CIRCLE_RADIUS = 80;
const ANGLE_INCREMENT = (Math.PI * 2) / NUM_BARS;

interface FrequencyProps {
     frequencyData: Float32Array | null;
     volume: number;
     isPlaying: boolean;
}

const FrequencyBars = ({
     frequencyData,
     volume,
     isPlaying,
}: FrequencyProps) => {
     const barsRef = useRef<THREE.Mesh[]>([]);

     useFrame(() => {
          if (frequencyData && barsRef.current) {
               let heightScale = isPlaying ? volume * 200 : 1; // Set the maximum height of the bars

               const barHeight = frequencyData.length / NUM_BARS;
               for (let i = 0; i < NUM_BARS; i++) {
                    const start = Math.floor(i * barHeight);
                    const end = Math.floor((i + 1) * barHeight);
                    const dataArray = Array.from(frequencyData).slice(
                         start,
                         end
                    );
                    const max = Math.max(...dataArray);
                    const scale = (max / 255) * volume * heightScale; // Adjust the scale based on the maximum frequency value and the volume
                    barsRef.current[i].position.setY(-scale / 2 - 10.5); // Set the y-position of the mesh's pivot point to half the scale, which corresponds to the bottom of the mesh
                    barsRef.current[i].scale.setY(scale); // Set the y-scale of the mesh to the required height
               }
          }
     });

     const bars = Array(NUM_BARS)
          .fill(null)
          .map((_, i) => {
               const angle = ANGLE_INCREMENT * i;
               const x = Math.cos(angle) * CIRCLE_RADIUS;
               const z = Math.sin(angle) * CIRCLE_RADIUS;
               // Random Colors for now
               const color = new THREE.Color(Math.random() * 0x111111);

               return (
                    <mesh
                         key={i}
                         position={[x, -10, z]}
                         rotation={[0, -angle, 0]}
                         ref={(ref) => (barsRef.current[i] = ref!)}
                    >
                         <boxGeometry args={[5, 1, 8]} />
                         <meshPhongMaterial color={color} />
                    </mesh>
               );
          });

     return <>{bars}</>;
};

export default FrequencyBars;
