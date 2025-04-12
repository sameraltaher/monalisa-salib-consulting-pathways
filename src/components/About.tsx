
import { Award, Users, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="heading-lg mb-4">About Monalisa</h2>
          <div className="w-20 h-1 bg-accent1-DEFAULT mx-auto mb-6"></div>
          <p className="paragraph max-w-3xl mx-auto">
            Transitioning from a distinguished career in international aid to strategic consulting, 
            bringing a wealth of experience in leadership, organizational development, and systems thinking.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Bio and Values */}
          <div className="space-y-6 animate-fade-up">
            <h3 className="heading-md mb-4">My Journey</h3>
            <p className="paragraph mb-4">
              With over 18 years of experience in international aid leadership roles, 
              I've developed expertise in navigating complex organizational challenges, 
              fostering inclusive leadership, and driving sustainable change.
            </p>
            <p className="paragraph mb-4">
              My work has taken me across multiple continents, collaborating with diverse 
              teams and stakeholders to implement transformative initiatives. This global 
              perspective informs my consulting approach, allowing me to bring fresh insights 
              and innovative solutions to my clients.
            </p>
            <p className="paragraph">
              I'm passionate about helping organizations create meaningful impact while 
              developing resilient, inclusive, and adaptive leadership practices.
            </p>

            {/* Core Values */}
            <div className="mt-8">
              <h3 className="heading-sm mb-4">Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-consulting-50 p-4 rounded-lg">
                  <p className="font-medium text-consulting-700">Integrity</p>
                </div>
                <div className="bg-consulting-50 p-4 rounded-lg">
                  <p className="font-medium text-consulting-700">Empathy</p>
                </div>
                <div className="bg-consulting-50 p-4 rounded-lg">
                  <p className="font-medium text-consulting-700">Innovation</p>
                </div>
                <div className="bg-consulting-50 p-4 rounded-lg">
                  <p className="font-medium text-consulting-700">Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Expertise Highlights */}
          <div className="bg-consulting-50 p-8 rounded-lg shadow-sm animate-fade-in">
            <h3 className="heading-md mb-6 text-center">Areas of Expertise</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Award className="h-6 w-6 text-consulting-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-consulting-700 mb-1">Strategic Leadership Development</h4>
                  <p className="text-gray-600">Cultivating effective leadership capabilities and organizational culture</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Users className="h-6 w-6 text-consulting-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-consulting-700 mb-1">Organizational Transformation</h4>
                  <p className="text-gray-600">Guiding systemic change processes and adaptive strategy development</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Globe className="h-6 w-6 text-consulting-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-consulting-700 mb-1">International Program Management</h4>
                  <p className="text-gray-600">Designing and implementing cross-cultural initiatives with measurable impact</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Lightbulb className="h-6 w-6 text-consulting-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-consulting-700 mb-1">Innovation & Systems Thinking</h4>
                  <p className="text-gray-600">Applying creative approaches to address complex organizational challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
