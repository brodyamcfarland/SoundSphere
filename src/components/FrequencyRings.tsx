const FrequencyRings = () => {
     return (
          <>
               <mesh position={[0, 10, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[65, 1, 10]} />
                    <meshPhongMaterial color={"#333333"} />
               </mesh>
               <mesh position={[0, 15, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[60, 1, 10]} />
                    <meshPhongMaterial color={"#444444"} />
               </mesh>
               <mesh position={[0, 20, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[55, 1, 10]} />
                    <meshPhongMaterial color={"#555555"} />
               </mesh>
               <mesh position={[0, 25, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[50, 1, 10]} />
                    <meshPhongMaterial color={"#666666"} />
               </mesh>
               <mesh position={[0, 30, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[45, 1, 10]} />
                    <meshPhongMaterial color={"#777777"} />
               </mesh>
               <mesh position={[0, 35, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[40, 1, 10]} />
                    <meshPhongMaterial color={"#888888"} />
               </mesh>
               <mesh position={[0, 8, 0]}>
                    <sphereGeometry args={[3, 100, 10]} />
                    <meshPhongMaterial color={"red"} />
               </mesh>
          </>
     );
};

export default FrequencyRings;
