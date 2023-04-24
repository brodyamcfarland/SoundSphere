import Head from "next/head";
import Header from "./Header";
interface LayoutProps {
     children: React.ReactNode;
     title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
     return (
          <>
               <Head>
                    <title>{title}</title>
                    <meta
                         name="SoundSphere"
                         content="3-D Audio Visualization"
                    />
               </Head>
               <div className="h-screen w-full flex flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
               </div>
          </>
     );
};

export default Layout;
