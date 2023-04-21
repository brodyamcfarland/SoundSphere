import AudioPlayer from "@/components/AudioPlayer";
import FileInput from "@/components/FileInput";
import Layout from "@/components/Layout";
import { Howl } from "howler";
import { useRef, useState } from "react";

const Home = () => {
     const [file, setFile] = useState<File | null>(null);
     const [volume, setVolume] = useState(0.5);
     const soundRef = useRef<Howl>();

     return (
          <Layout title="SoundSphere | 3-D Audio Visualizer">
               {file ? (
                    <AudioPlayer
                         file={file}
                         volume={volume}
                         setVolume={setVolume}
                    />
               ) : (
                    <FileInput setFile={setFile} />
               )}
          </Layout>
     );
};

export default Home;
