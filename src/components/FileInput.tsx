import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { TbArrowBigDownLines } from "react-icons/tb";

interface StateProps {
     setFile: Dispatch<SetStateAction<File | null>>;
}

const FileInput = ({ setFile }: StateProps) => {
     const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
          event.preventDefault();
          event.dataTransfer.dropEffect = "copy";
     };

     const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
          event.preventDefault();
          const selectedFile = event.dataTransfer.files?.[0];
          if (
               selectedFile &&
               (selectedFile.type === "audio/mpeg" ||
                    selectedFile.type === "audio/wav")
          ) {
               setFile(selectedFile);
          }
     };

     return (
          <div className="absolute z-10 backdrop-blur-lg bg-white/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex max-w-sm h-80 w-80 rounded-full md:max-w-xl border-2 items-center justify-center">
               <div
                    className=" p-4 rounded-lg"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
               >
                    <input
                         type="file"
                         accept=".mp3,.wav"
                         className="absolute inset-0 w-full h-full opacity-0 z-10 rounded-full hover:cursor-pointer"
                         onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                   setFile(file);
                              }
                         }}
                    />

                    <div className="flex flex-col items-center justify-center">
                         <TbArrowBigDownLines
                              size={50}
                              className="animate-bounce text-emerald-600"
                         />
                         <span className="text-sm font-bold text-gray-400">
                              Drag & Drop
                         </span>
                         <span className="text-[10px] text-orange-600 font-bold">
                              OR
                         </span>
                         <span className="text-sm font-bold text-gray-400">
                              Click to Upload MP3 or WAV
                         </span>
                    </div>
               </div>
          </div>
     );
};

export default FileInput;
