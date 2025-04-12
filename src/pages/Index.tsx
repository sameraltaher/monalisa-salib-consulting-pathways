
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-bg opacity-5"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* About Me Section - Minimalist Approach */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12 font-serif">About Me</h2>
            <About />
          </div>
        </section>
        
        <Separator className="h-px bg-slate-200 w-full my-4" />
        
        {/* Services Section - For Potential Clients */}
        <section className="py-16 bg-slate-50">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12 font-serif">Services</h2>
            <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
              Specialized consulting solutions tailored for organizations seeking to navigate 
              complex challenges and achieve sustainable growth.
            </p>
            <Services />
          </div>
        </section>
        
        <Separator className="h-px bg-slate-200 w-full my-4" />
        
        {/* Products Created Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12 font-serif">Products Created</h2>
            <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
              A showcase of frameworks, tools, and methodologies I've developed to help 
              organizations transform their approach to leadership and strategy.
            </p>
            <Experience />
          </div>
        </section>
        
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
