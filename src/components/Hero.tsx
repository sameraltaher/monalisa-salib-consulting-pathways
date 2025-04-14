
import { Button } from '@/components/ui/button';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Additional pattern elements specific to hero */}
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px]">
          <img 
            src="/lovable-uploads/17975ecc-5052-4e25-8433-0c4c4fd02dc2.png" 
            alt="" 
            className="w-full h-full object-contain opacity-30"
          />
        </div>
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px]">
          <img 
            src="/lovable-uploads/f91bb89a-4272-4b7e-8d0c-c2af91cc5aab.png" 
            alt="" 
            className="w-full h-full object-contain opacity-30"
          />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="border-l-4 border-teal-500 pl-6 mb-6">
              <h2 className="font-medium text-slate-600 text-xl mb-0">Strategic Thought Partner & Make It Happen Maestro</h2>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Monalisa <span className="text-teal-500">Salib</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl">
              With over 20 years of international development experience, 
              I help organizations navigate complex challenges and achieve meaningful results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-md"
              >
                Work With Me
                <ArrowDownCircle className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-slate-700 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Services
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-teal-500 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-slate-700 rounded-lg -z-10"></div>
              
              {/* Profile image placeholder with business card styling */}
              <div className="bg-white shadow-lg rounded-lg p-8 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-full bg-woven-pattern opacity-5 z-0"></div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-slate-800 rounded-br-[100px] -ml-10 -mt-10 opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-seafoam rounded-tl-[100px] -mr-10 -mb-10 opacity-10"></div>
                
                <div className="h-[400px] rounded-lg flex flex-col items-center justify-center text-center relative z-10">
                  <div className="w-32 h-32 rounded-full bg-seafoam-light mb-6 flex items-center justify-center">
                    <span className="text-teal-700 text-4xl font-serif font-bold">MS</span>
                  </div>
                  <p className="text-slate-600 mb-3 font-medium text-lg">Monalisa Salib</p>
                  <p className="text-slate-500 mb-4 text-sm tracking-wider">CONSULTANT</p>
                  
                  <div className="w-40 h-1 bg-teal-500 mb-4"></div>
                  
                  <div className="text-slate-600 text-sm space-y-2">
                    <p>Program and team leadership</p>
                    <p>Strategy and program design</p>
                    <p>Monitoring, evaluation, and learning</p>
                    <p>Organization development</p>
                    <p>Facilitation & training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Circular decorative element similar to business card */}
      <div className="absolute -left-32 top-1/3 w-64 h-64 border-2 border-seafoam rounded-full opacity-10"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 border-2 border-slate-700 rounded-full opacity-10"></div>
    </section>
  );
};

export default Hero;
