
import { Award, Users, Globe, Lightbulb, BookOpen, BarChart3 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements inspired by business card */}
      <div className="absolute -left-20 top-20 w-40 h-40 rounded-full border-2 border-seafoam opacity-10"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-slate-800 rounded-tl-[200px] opacity-5"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block border-b-2 border-teal-500 mb-4">
            <h2 className="heading-lg text-slate-800 mb-2">About Me</h2>
          </div>
          <p className="paragraph text-slate-600 max-w-3xl mx-auto">
          I am a mission-driven, international development leader with 20 years of experience across 17 countries. I have helped organizations, teams, communities, and individuals achieve their goals and thrive while doing so. 
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Bio and Values */}
          <div className="space-y-6 animate-fade-up">
            <div className="border-l-4 border-teal-500 pl-6 mb-6">
              <h3 className="heading-md text-slate-700">My Journey</h3>
            </div>
            <p className="paragraph text-slate-600 mb-4">
              With over 18 years of experience in international aid leadership roles, 
              I've developed expertise in navigating complex organizational challenges, 
              fostering inclusive leadership, and driving sustainable change.
            </p>
            <p className="paragraph text-slate-600 mb-4">
              My work has taken me across multiple continents, collaborating with diverse 
              teams and stakeholders to implement transformative initiatives. This global 
              perspective informs my consulting approach, allowing me to bring fresh insights 
              and innovative solutions to my clients.
            </p>
            <p className="paragraph text-slate-600">
              I'm passionate about helping organizations create meaningful impact while 
              developing resilient, inclusive, and adaptive leadership practices.
            </p>

            {/* Core Values */}
            <div className="mt-8">
              <h3 className="heading-sm text-slate-700 mb-4">Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-100 p-4 rounded-lg shadow-sm flex items-center space-x-3">
                  <div className="bg-seafoam-light p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-teal-700" />
                  </div>
                  <p className="font-medium text-slate-700">Integrity</p>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-lg shadow-sm flex items-center space-x-3">
                  <div className="bg-seafoam-light p-2 rounded-full">
                    <Users className="h-5 w-5 text-teal-700" />
                  </div>
                  <p className="font-medium text-slate-700">Empathy</p>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-lg shadow-sm flex items-center space-x-3">
                  <div className="bg-seafoam-light p-2 rounded-full">
                    <Lightbulb className="h-5 w-5 text-teal-700" />
                  </div>
                  <p className="font-medium text-slate-700">Innovation</p>
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-lg shadow-sm flex items-center space-x-3">
                  <div className="bg-seafoam-light p-2 rounded-full">
                    <Award className="h-5 w-5 text-teal-700" />
                  </div>
                  <p className="font-medium text-slate-700">Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Expertise Highlights */}
          <div className="bg-white border border-slate-100 p-8 rounded-lg shadow-md relative animate-fade-in">
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-seafoam opacity-10 rounded-br-[50px]"></div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-slate-800 opacity-5 rounded-tr-[50px]"></div>
            
            <div className="relative z-10">
              <div className="inline-block border-b-2 border-teal-500 mb-6">
                <h3 className="heading-md text-slate-700 mb-2">Areas of Expertise</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-800 p-3 rounded-md shadow-sm">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-700 mb-1">Program and team leadership</h4>
                    <p className="text-slate-600">Building high-performing teams and leading complex programs</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-800 p-3 rounded-md shadow-sm">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-700 mb-1">Strategy and program design</h4>
                    <p className="text-slate-600">Developing effective strategies and program frameworks</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-800 p-3 rounded-md shadow-sm">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-700 mb-1">Monitoring, evaluation, and learning</h4>
                    <p className="text-slate-600">Creating systems to measure impact and foster improvement</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-800 p-3 rounded-md shadow-sm">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-700 mb-1">Organization development</h4>
                    <p className="text-slate-600">Guiding systemic change and organizational transformation</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-800 p-3 rounded-md shadow-sm">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-700 mb-1">Facilitation & training</h4>
                    <p className="text-slate-600">Designing and leading workshops and training programs</p>
                  </div>
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
