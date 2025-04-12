
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-20 w-1/2 h-1/2 bg-consulting-50 rounded-l-full opacity-50" />
        <div className="absolute left-10 bottom-20 w-64 h-64 bg-accent1-light rounded-full opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-consulting-800 leading-tight mb-6">
              Leadership Expertise & <span className="text-accent2-DEFAULT">Strategic Consulting</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              With over 18 years of international aid leadership experience, 
              Monalisa Salib brings a unique perspective to help organizations 
              navigate complex challenges and achieve transformative results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-consulting-600 hover:bg-consulting-700 text-white px-8 py-6 text-lg"
              >
                Work With Me
              </Button>
              
              <Button 
                variant="outline" 
                className="border-consulting-500 text-consulting-600 hover:bg-consulting-50 px-8 py-6 text-lg"
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
              {/* Placeholder for profile image */}
              <div className="bg-gradient-to-r from-consulting-100 to-consulting-200 h-[500px] rounded-lg flex items-center justify-center">
                <div className="text-consulting-700 text-center p-6">
                  <p className="text-lg font-medium mb-2">Profile Photo</p>
                  <p className="text-sm">A professional headshot of Monalisa Salib would be displayed here</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-accent1-DEFAULT rounded-lg -z-10"></div>
              <div className="absolute -top-5 -right-5 w-24 h-24 border-2 border-consulting-400 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
