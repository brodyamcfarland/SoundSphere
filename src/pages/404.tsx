import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { GiStoneSphere } from "react-icons/gi";

const Custom404 = () => {
     const router = useRouter();

     useEffect(() => {
          router.push("/");
     }, [router]);

     return (
          <div className="flex flex-col h-screen w-full items-center justify-center">
               <div className="bg-white/5 h-80 w-80 rounded-full border-2 flex flex-col items-center justify-center gap-2">
                    <GiStoneSphere size={27} />
                    <span className="text-xl">404 ERROR</span>
                    <span className="text-md text-gray-500">
                         Page Route does not exist.
                    </span>
                    <span className="text-lg font-bold animate-pulse text-orange-700">
                         Redirecting to Home...
                    </span>
               </div>
          </div>
     );
};

export default Custom404;
