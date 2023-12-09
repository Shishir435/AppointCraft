import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import { ReactNode } from "react";


const Layout:React.FC<{
    children: ReactNode
}> = ({children}) => {
  return <div className="max-w-7xl mx-auto">
  <Navbar/>
  <Toaster/>
  <main>
  {children}
  </main>
  </div>;
};

export default Layout;
