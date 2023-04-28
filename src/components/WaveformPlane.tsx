import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

interface WafeformProps {
     frequencyData: Float32Array | null;
}

const WaveformPlane = ({ frequencyData }: WafeformProps) => {
     const planeRef = useRef<any>();
     const points = useMemo(() => {
          const NUM_POINTS = 256;
          const vertices = new Float32Array(NUM_POINTS * 3);
          for (let i = 0; i < NUM_POINTS; i++) {
               const x = (i / (NUM_POINTS - 1)) * 2 - 1;
               const y = 0;
               const z = 0;
               vertices[i * 3 + 0] = x;
               vertices[i * 3 + 1] = y;
               vertices[i * 3 + 2] = z;
          }
          return vertices;
     }, []);

     useFrame(() => {
          if (frequencyData && planeRef.current) {
               const waveformScale = 20;
               const waveformHeight = frequencyData.length;
               for (let i = 0; i < points.length / 3; i++) {
                    const start = Math.floor(
                         (i / (points.length / 3 - 1)) * waveformHeight
                    );
                    const end = Math.floor(
                         ((i + 1) / (points.length / 3 - 1)) * waveformHeight
                    );
                    const dataArray = Array.from(
                         frequencyData.slice(start, end)
                    );
                    const max = Math.max(...dataArray);
                    const scale = (max / 255) * waveformScale;
                    const x = points[i * 3 + 0];
                    const y =
                         (dataArray[Math.floor(dataArray.length / 2)] / 255) *
                         waveformScale;
                    const z = (i / (points.length / 3 - 1)) * 2 - 1;
                    points[i * 3 + 1] = y;
                    points[i * 3 + 2] = z;
                    if (i < points.length / 6) {
                         // Flip the first half of the plane horizontally
                         points[i * 3 + 0] = -x;
                    }
               }
               // Set the updated points array as the position attribute of the bufferGeometry
               planeRef.current.geometry.attributes.position.array = points;
               planeRef.current.geometry.attributes.position.needsUpdate = true;
          }
     });

     return (
          <mesh
               ref={planeRef}
               position={[0, -100, -100]}
               rotation={[Math.PI, 0, 0]}
          >
               <planeGeometry args={[500, 500, 255]} />
               <meshBasicMaterial color={"red"} />
               <points>
                    <bufferGeometry attach="geometry">
                         <bufferAttribute
                              count={points.length / 3}
                              array={points}
                              itemSize={3}
                         />
                    </bufferGeometry>
                    <pointsMaterial color={"blue"} size={0.02} />
               </points>
          </mesh>
     );
};

export default WaveformPlane;
