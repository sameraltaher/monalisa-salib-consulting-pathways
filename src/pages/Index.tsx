
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background pattern elements - moved to top level for consistent application */}
      <div className="fixed inset-0 z-0 opacity-10">
        {/* Woven pattern background - full page */}
        <div className="absolute inset-0 bg-woven-pattern"></div>
        
        {/* Slate blue circle - top right */}
        <div className="absolute -top-64 -right-64 w-[600px] h-[600px]">
          <img 
            src="/lovable-uploads/17975ecc-5052-4e25-8433-0c4c4fd02dc2.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Teal circle - bottom left */}
        <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] transform rotate-180">
          <img 
            src="/lovable-uploads/f91bb89a-4272-4b7e-8d0c-c2af91cc5aab.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* About Me Section - Added woven pattern background */}
        <section 
          id="about" 
          className="py-16 bg-white bg-opacity-90 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-woven-pattern opacity-5 z-0"></div>
          <div className="container-custom relative z-10">
            <h2 className="heading-lg text-center mb-12 font-serif">About Me</h2>
            <About />
          </div>
        </section>
        
        <Separator className="h-px bg-slate-200 w-full my-4" />
        
        {/* Services Section - Added woven pattern background */}
        <section 
          id="services" 
          className="py-16 bg-slate-50 bg-opacity-90 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-woven-pattern opacity-5 z-0"></div>
          <div className="container-custom relative z-10">
            <h2 className="heading-lg text-center mb-12 font-serif">Services</h2>
            <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
              Specialized consulting solutions tailored for organizations seeking to navigate 
              complex challenges and achieve sustainable growth.
            </p>
            <Services />
          </div>
        </section>
        
        <Separator className="h-px bg-slate-200 w-full my-4" />
        
        {/* Products Created Section - Added woven pattern background */}
        <section 
          id="experience" 
          className="py-16 bg-white bg-opacity-90 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-woven-pattern opacity-5 z-0"></div>
          <div className="container-custom relative z-10">
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
