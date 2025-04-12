
import { Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-consulting-800 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h3 className="font-serif text-2xl font-bold mb-4">Monalisa Salib</h3>
            <p className="text-consulting-100 mb-6 max-w-md">
              Bringing 18+ years of international leadership experience to help organizations 
              navigate complex challenges and achieve transformative results.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-consulting-700 hover:bg-consulting-600 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="bg-consulting-700 hover:bg-consulting-600 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@monalisasalib.com" 
                className="bg-consulting-700 hover:bg-consulting-600 p-2 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-consulting-200 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-consulting-200 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('experience');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-consulting-200 hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-consulting-200 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-consulting-200">Strategic Consulting</span>
              </li>
              <li>
                <span className="text-consulting-200">Change Management</span>
              </li>
              <li>
                <span className="text-consulting-200">Leadership Development</span>
              </li>
              <li>
                <span className="text-consulting-200">Innovation Facilitation</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-consulting-200">
                Email: contact@monalisasalib.com
              </li>
              <li className="text-consulting-200">
                Phone: (123) 456-7890
              </li>
              <li className="text-consulting-200">
                Location: Washington D.C. Metropolitan Area
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-consulting-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-consulting-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Monalisa Salib Consulting. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-consulting-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
