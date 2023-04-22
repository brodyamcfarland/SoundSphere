import AudioPlayer from "@/components/AudioPlayer";
import FileInput from "@/components/FileInput";
import Layout from "@/components/Layout";
import VisualizerBackground from "@/components/VisualizerBackground";

import { useState } from "react";

const Home = () => {
     const [file, setFile] = useState<File | null>(null);
     const [volume, setVolume] = useState(0.5);

     return (
          <Layout title="SoundSphere | 3-D Audio Visualizer">
               <VisualizerBackground />
               {file ? (
                    <AudioPlayer
                         file={file}
                         volume={volume}
                         setVolume={setVolume}
                         setFile={setFile}
                    />
               ) : (
                    <FileInput setFile={setFile} />
               )}
          </Layout>
     );
};

export default Home;
