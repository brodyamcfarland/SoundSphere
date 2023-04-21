import { Howl } from "howler";
import { useRef, useState, useEffect, SetStateAction, Dispatch } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface FileProps {
     file: File | null;
     volume: number;
     setVolume: Dispatch<SetStateAction<number>>;
}

const AudioPlayer = ({ file, volume, setVolume }: FileProps) => {
     // File is passed in, then a url needs to be assigned and added to the howl instance
     const [isPlaying, setIsPlaying] = useState(false);
     const soundRef = useRef<Howl>();
     const urlRef = useRef<string>();

     useEffect(() => {
          if (file) {
               urlRef.current = URL.createObjectURL(file);
               soundRef.current = new Howl({
                    src: [urlRef.current],
                    format: "mp3",
                    volume: volume,
                    onend: () => setIsPlaying(false),
               });
          }
     }, [file]);

     const handlePlay = () => {
          if (file && soundRef.current) {
               urlRef.current = URL.createObjectURL(file);
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

     const handleVolumeChange = (
          event: React.ChangeEvent<HTMLInputElement>
     ) => {
          const value = parseFloat(event.target.value);
          setVolume(value);
          if (soundRef.current) {
               soundRef.current.volume(value);
          }
     };

     return (
          <div className="absolute flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex max-w-sm h-80 w-80 rounded-full md:max-w-xl border-2 items-center justify-center">
               <span className="text-xs tracking-widest text-emerald-600 font-bold">
                    SONG
               </span>
               <span className="font-bold text-sm">{file?.name}</span>
               <div className="my-4">
                    {!isPlaying ? (
                         <button
                              className=""
                              onClick={handlePlay}
                              disabled={isPlaying}
                         >
                              <FaPlay
                                   size={30}
                                   className="opacity-60 hover:opacity-100 hover:text-white hover:scale-105 duration-500"
                              />
                         </button>
                    ) : (
                         <button
                              className=""
                              onClick={handlePause}
                              disabled={!isPlaying}
                         >
                              <FaPause
                                   size={30}
                                   className="opacity-60 hover:opacity-100 hover:text-white hover:scale-105 duration-500"
                              />
                         </button>
                    )}
               </div>
               <div className="mt-4 flex items-center">
                    <input
                         type="range"
                         name="volume"
                         id="volume"
                         min="0"
                         max="1"
                         step="0.01"
                         value={volume}
                         onChange={(e) => handleVolumeChange(e)}
                         className="w-full h-2 bg-white/50 rounded-lg appearance-none cursor-pointer dark:bg-white/30 opacity-50 hover:opacity-100 duration-300"
                    />
               </div>
          </div>
     );
};

export default AudioPlayer;
