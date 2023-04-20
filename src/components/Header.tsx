import Link from "next/link";
import {
     AiFillGithub,
     AiFillTwitterCircle,
     AiFillLinkedin,
     AiFillInfoCircle,
} from "react-icons/ai";
import { GiStoneSphere } from "react-icons/gi";

const Header = () => {
     return (
          <header className="px-2 md:px-0 bg-gradient-to-b from-white/20 to-transparent py-4">
               <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center justify-center gap-2">
                         <GiStoneSphere size={27} />
                         <h1 className="font-semibold tracking-[5px] uppercase text-md select-none">
                              SoundSphere
                         </h1>
                    </div>
                    <nav>
                         <ul className="flex scale-75 md:scale-100 space-x-2 md:space-x-4 text-white/80">
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
                              <li>
                                   <Link href="/about">
                                        <AiFillInfoCircle
                                             size={30}
                                             className="hover:scale-75 duration-500"
                                             title="About"
                                        />
                                   </Link>
                              </li>
                         </ul>
                    </nav>
               </div>
          </header>
     );
};

export default Header;
