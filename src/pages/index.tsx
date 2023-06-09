import AudioPlayer from "@/components/AudioPlayer";
import FileInput from "@/components/FileInput";
import Layout from "@/components/Layout";
import VisualizerBackground from "@/components/VisualizerBackground";

import { useState } from "react";

const Home = () => {
     const [file, setFile] = useState<File | null>(null);
     const [volume, setVolume] = useState(0.39);
     const [isPlaying, setIsPlaying] = useState<boolean>(false);
     const [frequencyData, setFrequencyData] = useState<Float32Array | null>(
          null
     );

     return (
          <Layout title="SoundSphere | 3-D Audio Visualizer">
               <VisualizerBackground
                    frequencyData={frequencyData}
                    volume={volume}
                    isPlaying={isPlaying}
               />
               {file ? (
                    <AudioPlayer
                         file={file}
                         volume={volume}
                         setVolume={setVolume}
                         setFile={setFile}
                         setFrequencyData={setFrequencyData}
                         setIsPlaying={setIsPlaying}
                         isPlaying={isPlaying}
                    />
               ) : (
                    <FileInput setFile={setFile} />
               )}
          </Layout>
     );
};

export default Home;
