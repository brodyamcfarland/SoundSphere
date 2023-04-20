const Footer = () => {
     const year = new Date().getFullYear();

     return (
          <footer className="bg-gradient-to-t from-white/20 to-transparent py-2">
               <div className="container mx-auto pt-3">
                    <p className="text-center text-[11px] text-black font-bold">
                         © {year} SoundSphere. All Rights Reserved.
                    </p>
               </div>
          </footer>
     );
};

export default Footer;
