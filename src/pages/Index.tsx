
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background pattern overlay similar to business card */}
      <div className="absolute inset-0 pattern-bg"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
