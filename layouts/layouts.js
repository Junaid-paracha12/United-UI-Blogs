import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layouts({ children }) {
  return (
    <>
    <div className="app-container my-2">
      <Navbar />
      {children}
      <Footer />
      </div>
    </>
  );
}
