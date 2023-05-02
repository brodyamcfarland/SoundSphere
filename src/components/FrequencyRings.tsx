import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BufferAttribute, BufferGeometry, Mesh, TorusGeometry } from "three";

interface RingProps {
     frequencyData: Float32Array | null;
     isPlaying: boolean;
}

const FrequencyRings = ({ frequencyData, isPlaying }: RingProps) => {
     const ringRefs = useRef<Array<any>>([]);

     useFrame(() => {
          if (frequencyData && isPlaying) {
               for (let i = 0; i < ringRefs.current.length; i++) {
                    const ringFrequency = frequencyData[10 + i] || 10;
                    const ringRef = ringRefs.current[i];
                    ringRef.geometry.dispose();
                    ringRef.geometry = new TorusGeometry(
                         10 - ringFrequency - i * 10,
                         1,
                         10
                    );
               }
          }
     });

     return (
          <>
               {Array.from({ length: 6 }).map((_, i) => (
                    <mesh
                         key={i}
                         position={[0, 34 + i * 5, 0]}
                         rotation={[Math.PI / 2, 0, 0]}
                         ref={(ref) => (ringRefs.current[i] = ref)}
                    >
                         <torusGeometry args={[65 - i * 5, 1, 10]} />
                         <meshPhongMaterial
                              color={`#${i + 3}${i + 3}${i + 3}`}
                         />
                    </mesh>
               ))}
          </>
     );
};

export default FrequencyRings;
