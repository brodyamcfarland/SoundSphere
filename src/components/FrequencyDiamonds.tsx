const FrequencyDiamonds = () => {
     return (
          <>
               <mesh position={[0, 4, -40]} rotation={[Math.PI / 2, 0, 0]}>
                    {/* Adding a 2nd Arg to the geometry will shift it into a sphere */}
                    <octahedronGeometry args={[3]} />
                    <meshPhongMaterial color={"#444444"} />
               </mesh>
               <mesh position={[0, 4, 40]} rotation={[Math.PI / 2, 0, 0]}>
                    <octahedronGeometry args={[3]} />
                    <meshPhongMaterial color={"#444444"} />
               </mesh>
               <mesh position={[40, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <octahedronGeometry args={[3]} />
                    <meshPhongMaterial color={"#444444"} />
               </mesh>
               <mesh position={[-40, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <octahedronGeometry args={[3]} />
                    <meshPhongMaterial color={"#444444"} />
               </mesh>
          </>
     );
};

export default FrequencyDiamonds;
