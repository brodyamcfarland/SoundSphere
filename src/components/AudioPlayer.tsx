import { Howl } from "howler";
import { useRef, useState, useEffect } from "react";

interface Props {
     file: File | null;
}

const AudioPlayer = ({ file }: Props) => {
     const [isPlaying, setIsPlaying] = useState(false);
     const soundRef = useRef<Howl>();
     const urlRef = useRef<string | undefined>();

     useEffect(() => {
          return () => {
               if (file && urlRef.current) {
                    URL.revokeObjectURL(urlRef.current);
               }
          };
     }, [file]);

     const handlePlay = () => {
          if (file) {
               urlRef.current = URL.createObjectURL(file);
               soundRef.current = new Howl({ src: [urlRef.current] });
               soundRef.current.play();
               setIsPlaying(true);
          }
     };

     const handlePause = () => {
          if (soundRef.current) {
               soundRef.current.pause();
               setIsPlaying(false);
          }
     };

     return (
          <div className="flex flex-col items-center justify-center pt-2">
               <span className="text-xs tracking-widest text-emerald-600 font-bold">
                    FILE SELECTED
               </span>
               <span className="font-bold text-sm">{file?.name}</span>
               <div className="mt-4">
                    <button
                         className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full mr-4"
                         onClick={handlePlay}
                         disabled={isPlaying}
                    >
                         Play
                    </button>
                    <button
                         className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
                         onClick={handlePause}
                         disabled={!isPlaying}
                    >
                         Pause
                    </button>
               </div>
          </div>
     );
};

export default AudioPlayer;
