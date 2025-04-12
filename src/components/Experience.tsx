
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-accent1-DEFAULT mx-auto mb-6"></div>
          <p className="paragraph max-w-3xl mx-auto">
            Over 18 years of leadership experience across international development and organizational change management.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-consulting-200 transform md:translate-x-[-50%]"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {/* Item 1 */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between">
              <div className="flex flex-col md:w-[45%] md:text-right order-2 md:order-1 mt-8 md:mt-0 animate-fade-up">
                <span className="text-consulting-500 font-semibold">2020 - Present</span>
                <h3 className="text-xl font-semibold text-consulting-800 mt-1">Independent Consultant</h3>
                <p className="text-gray-600 mt-2">
                  Providing strategic consulting services to organizations navigating leadership transitions, 
                  organizational change, and program development challenges.
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside md:list-outside">
                  <li>Led strategic planning processes for multiple NGOs</li>
                  <li>Developed leadership programs for executive teams</li>
                  <li>Facilitated organizational transformation initiatives</li>
                </ul>
              </div>

              <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-consulting-600 text-white rounded-full flex items-center justify-center transform translate-x-[-50%] z-10 order-1 md:order-2">
                <Briefcase className="h-5 w-5" />
              </div>

              <div className="md:w-[45%] order-3 hidden md:block"></div>
            </div>

            {/* Item 2 */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between">
              <div className="md:w-[45%] order-1 hidden md:block"></div>

              <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-consulting-600 text-white rounded-full flex items-center justify-center transform translate-x-[-50%] z-10 order-2">
                <Briefcase className="h-5 w-5" />
              </div>

              <div className="flex flex-col md:w-[45%] order-3 mt-8 md:mt-0 animate-fade-up">
                <span className="text-consulting-500 font-semibold">2015 - 2020</span>
                <h3 className="text-xl font-semibold text-consulting-800 mt-1">Senior Leadership Role</h3>
                <p className="text-gray-600 mt-2">
                  Led international development programs across multiple regions, focusing on 
                  organizational effectiveness and leadership capacity building.
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                  <li>Managed complex multi-million dollar initiatives</li>
                  <li>Supervised diverse teams across cultural contexts</li>
                  <li>Developed innovative approaches to program implementation</li>
                </ul>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between">
              <div className="flex flex-col md:w-[45%] md:text-right order-2 md:order-1 mt-8 md:mt-0 animate-fade-up">
                <span className="text-consulting-500 font-semibold">2010 - 2015</span>
                <h3 className="text-xl font-semibold text-consulting-800 mt-1">Program Director</h3>
                <p className="text-gray-600 mt-2">
                  Directed strategic initiatives focused on organizational development and 
                  leadership capacity building in developing contexts.
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside md:list-outside">
                  <li>Developed program strategies and implementation frameworks</li>
                  <li>Built partnerships with government and nonprofit entities</li>
                  <li>Designed evaluation methodologies to measure impact</li>
                </ul>
              </div>

              <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-consulting-600 text-white rounded-full flex items-center justify-center transform translate-x-[-50%] z-10 order-1 md:order-2">
                <Briefcase className="h-5 w-5" />
              </div>

              <div className="md:w-[45%] order-3 hidden md:block"></div>
            </div>

            {/* Item 4 */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between">
              <div className="md:w-[45%] order-1 hidden md:block"></div>

              <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-consulting-600 text-white rounded-full flex items-center justify-center transform translate-x-[-50%] z-10 order-2">
                <Briefcase className="h-5 w-5" />
              </div>

              <div className="flex flex-col md:w-[45%] order-3 mt-8 md:mt-0 animate-fade-up">
                <span className="text-consulting-500 font-semibold">2005 - 2010</span>
                <h3 className="text-xl font-semibold text-consulting-800 mt-1">Project Manager</h3>
                <p className="text-gray-600 mt-2">
                  Led field-based international development projects, focusing on community engagement
                  and sustainable program implementation.
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                  <li>Coordinated cross-functional teams in challenging environments</li>
                  <li>Implemented monitoring and evaluation systems</li>
                  <li>Fostered stakeholder relationships across sectors</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between">
              <div className="flex flex-col md:w-[45%] md:text-right order-2 md:order-1 mt-8 md:mt-0 animate-fade-up">
                <span className="text-consulting-500 font-semibold">Education & Certifications</span>
                <h3 className="text-xl font-semibold text-consulting-800 mt-1">Academic Background</h3>
                <ul className="mt-2 space-y-3 text-gray-600">
                  <li className="md:text-right">
                    <div className="font-medium">Master's Degree in International Development</div>
                    <div className="text-sm">Prestigious University, Graduation Year</div>
                  </li>
                  <li className="md:text-right">
                    <div className="font-medium">Leadership Certification</div>
                    <div className="text-sm">Recognized Leadership Institute</div>
                  </li>
                  <li className="md:text-right">
                    <div className="font-medium">Change Management Professional</div>
                    <div className="text-sm">Change Management Association</div>
                  </li>
                </ul>
              </div>

              <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-accent2-DEFAULT text-white rounded-full flex items-center justify-center transform translate-x-[-50%] z-10 order-1 md:order-2">
                <GraduationCap className="h-5 w-5" />
              </div>

              <div className="md:w-[45%] order-3 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
