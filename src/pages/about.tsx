import Layout from "@/components/Layout";
import Link from "next/link";
import {
     AiFillGithub,
     AiFillLinkedin,
     AiFillTwitterCircle,
} from "react-icons/ai";

const about = () => {
     return (
          <Layout>
               <div className="max-w-md border flex flex-col items-center justify-center mx-auto mt-10 rounded-md">
                    <h1 className="py-1 font-bold tracking-widest bg-white/10 w-full text-center border-b">
                         About SoundSphere
                    </h1>
                    <p className="flex items-center justify-center text-sm px-2 py-4 text-gray-300 text-center">
                         SoundSphere is an 3-D Audio Visualizer application,
                         where you can upload an MP3 or WAV file to play music
                         and watch the 3-D environment change to the music
                         frequencies.
                    </p>
                    <h1 className="font-bold tracking-widest bg-white/10 w-full text-center border-y">
                         Tech Stack
                    </h1>
                    <div className="flex flex-col text-sm px-2 py-4 text-gray-300">
                         <div className="flex gap-2">
                              <span className="text-white font-bold underline">
                                   Framework:
                              </span>
                              <span>NextJS</span>
                         </div>
                         <div className="flex gap-2">
                              <span className="text-white font-bold underline">
                                   Language:
                              </span>
                              <span>Typescript</span>
                         </div>
                         <div className="flex gap-2">
                              <span className="text-white font-bold underline">
                                   Styling:
                              </span>
                              <span>Tailwind CSS</span>
                         </div>
                         <div className="flex gap-2">
                              <span className="text-white font-bold underline">
                                   3-D Library:
                              </span>
                              <span>React-Three-Fiber/DREI</span>
                         </div>
                         <div className="flex gap-2">
                              <span className="text-white font-bold underline">
                                   Music Player:
                              </span>
                              <span>Howler JS</span>
                         </div>
                         <div className="flex gap-2">
                              <span className="text-white font-bold underline">
                                   Music Analyzer:
                              </span>
                              <span>Web Audio API</span>
                         </div>
                         <div className="flex gap-2">
                              <span className="text-white font-bold underline">
                                   Icons:
                              </span>
                              <span>React Icons</span>
                         </div>
                    </div>
                    <h1 className="font-bold tracking-widest bg-white/10 w-full text-center border-y">
                         Developer
                    </h1>
                    <div className="flex flex-col text-sm px-2 py-4 text-gray-300">
                         <div className="flex gap-2">
                              <span className="text-white font-bold underline">
                                   Developer:
                              </span>
                              <span>Brody McFarland</span>
                         </div>
                         <div className="flex gap-2">
                              <span className="text-white font-bold underline">
                                   Dev Contact:
                              </span>
                              <span>brodyamcfarland@gmail.com</span>
                         </div>
                         <nav>
                              <ul className="flex scale-75 md:scale-100 space-x-2 md:space-x-4 text-white/80 items-center justify-center pt-4">
                                   <li>
                                        <Link href="https://github.com/brodyamcfarland">
                                             <AiFillGithub
                                                  size={30}
                                                  className="hover:scale-75 duration-500"
                                                  title="Github"
                                             />
                                        </Link>
                                   </li>
                                   <li>
                                        <Link href="https://twitter.com/off2eth">
                                             <AiFillTwitterCircle
                                                  size={30}
                                                  className="hover:scale-75 duration-500"
                                                  title="Twitter"
                                             />
                                        </Link>
                                   </li>
                                   <li>
                                        <Link href="https://www.linkedin.com/in/brody-mcfarland-93a91b106/">
                                             <AiFillLinkedin
                                                  size={30}
                                                  className="hover:scale-75 duration-500"
                                                  title="LinkedIn"
                                             />
                                        </Link>
                                   </li>
                              </ul>
                         </nav>
                         <Link
                              href={"/"}
                              className="flex items-center justify-center text-orange-700 border border-gray-700 rounded-md p-[3px] hover:bg-white/10 duration-300 text-xs mt-6"
                         >
                              Back to Home
                         </Link>
                    </div>
               </div>
          </Layout>
     );
};

export default about;
