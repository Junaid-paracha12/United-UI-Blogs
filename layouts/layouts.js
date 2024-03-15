import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layouts({ children }) {
  return (
    <>
    
      <Navbar />
      {children}
      <Footer />
      
    </>
  );
}
