import { Howl } from "howler";
import { useRef, useState, useEffect, SetStateAction, Dispatch } from "react";
import {
     FaPlay,
     FaPause,
     FaVolumeMute,
     FaVolumeUp,
     FaMusic,
} from "react-icons/fa";
import { BiHide } from "react-icons/bi";

interface FileProps {
     file: File | null;
     volume: number;
     setVolume: Dispatch<SetStateAction<number>>;
     setFile: Dispatch<SetStateAction<File | null>>;
}

const AudioPlayer = ({ file, volume, setVolume, setFile }: FileProps) => {
     // File is passed in, then a url needs to be assigned and added to the howl instance
     const [isPlaying, setIsPlaying] = useState<boolean>(false);
     const [seek, setSeek] = useState<number>(0);
     const [hide, setHide] = useState<boolean>(false);
     const soundRef = useRef<Howl>();
     const urlRef = useRef<string>();

     useEffect(() => {
          if (file) {
               urlRef.current = URL.createObjectURL(file);
               soundRef.current = new Howl({
                    src: [urlRef.current],
                    format: ["mp3", "wav"],
                    onend: () => setIsPlaying(false),
               });
          }
     }, [file]);

     const handlePlay = () => {
          if (file && soundRef.current) {
               soundRef.current.play();
               setIsPlaying(true);
               setInterval(() => {
                    setSeek(soundRef.current?.seek() || 0);
               }, 100);
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
          <>
               {!hide ? (
                    <div className="absolute z-10 backdrop-blur-lg bg-white/5 flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex max-w-sm h-80 w-80 rounded-full md:max-w-xl border-2 items-center justify-center">
                         <span className="text-xs tracking-widest text-emerald-600 font-bold">
                              SONG
                         </span>
                         <span className="font-bold text-sm">{file?.name}</span>
                         <div className="my-2 flex items-center">
                              <input
                                   type="range"
                                   name="progress"
                                   id="progress"
                                   min="0"
                                   max={soundRef.current?.duration() || 0}
                                   step="0.01"
                                   value={seek}
                                   onChange={(e) => {
                                        const value = parseFloat(
                                             e.target.value
                                        );
                                        setSeek(value);
                                        soundRef.current?.seek(value);
                                   }}
                                   className="w-full h-2 bg-white/50 rounded-lg appearance-none cursor-pointer dark:bg-blue-500/30 opacity-50 hover:opacity-100 duration-300 progress-bar"
                              />
                         </div>
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

                         <div className="mt-4 flex flex-col items-center">
                              <input
                                   type="range"
                                   name="volume"
                                   id="volume"
                                   min="0"
                                   max="1"
                                   step="0.01"
                                   value={volume}
                                   onChange={(e) => handleVolumeChange(e)}
                                   className="w-full h-2 bg-white/50 rounded-lg appearance-none cursor-pointer dark:bg-white/30 opacity-50 hover:opacity-100 duration-300 volume-bar"
                              />
                              <span className="text-gray-600 mt-1">
                                   {volume > 0 ? (
                                        <FaVolumeUp />
                                   ) : (
                                        <FaVolumeMute />
                                   )}
                              </span>
                         </div>
                         <div className="mt-8 flex flex-col items-center">
                              <button
                                   onClick={() => {
                                        setFile(null);
                                        handlePause();
                                   }}
                                   className="border-gray-700 rounded-md p-[3px] mt-1 border text-[10px] text-orange-700 uppercase hover:bg-white/10 duration-300"
                              >
                                   Change song
                              </button>
                              <button
                                   onClick={() => setHide(true)}
                                   title="Hide"
                                   className="absolute bottom-1 text-gray-600 hover:text-white duration-300"
                              >
                                   <BiHide size={22} />
                              </button>
                         </div>
                    </div>
               ) : (
                    <button
                         onClick={() => setHide(false)}
                         className="absolute opacity-20 hover:opacity-100 duration-300 backdrop-blur-lg bg-white/10 flex-col top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 p-2 rounded-full items-center justify-center text-gray-400 border-gray-400"
                    >
                         <FaMusic size={20} />
                    </button>
               )}
          </>
     );
};

export default AudioPlayer;
