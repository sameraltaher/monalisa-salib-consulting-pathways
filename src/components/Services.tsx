
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, TrendingUp, Users, Lightbulb } from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-consulting-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Consulting Services</h2>
          <div className="w-20 h-1 bg-accent1-DEFAULT mx-auto mb-6"></div>
          <p className="paragraph max-w-3xl mx-auto">
            Specialized consulting solutions designed to help organizations navigate complex challenges,
            develop effective leadership, and implement sustainable strategies for growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* Service 1 */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-consulting-100 p-2 rounded-lg">
                  <Briefcase className="h-6 w-6 text-consulting-600" />
                </div>
                <CardTitle className="text-xl text-consulting-700">Strategic Consulting</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Comprehensive strategy development and implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Organizational assessment and strategic planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Mission alignment and value proposition development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Program development and impact measurement</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 2 */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-consulting-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-consulting-600" />
                </div>
                <CardTitle className="text-xl text-consulting-700">Change Management</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Guiding organizations through complex transformations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Change readiness assessment and planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Stakeholder engagement and communication strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Implementation support and adoption measurement</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 3 */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-consulting-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-consulting-600" />
                </div>
                <CardTitle className="text-xl text-consulting-700">Leadership Development</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Building adaptive leadership capabilities at all levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Executive coaching and leadership team development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Inclusive leadership practices and diversity strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Succession planning and talent development programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 4 */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-consulting-100 p-2 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-consulting-600" />
                </div>
                <CardTitle className="text-xl text-consulting-700">Innovation Facilitation</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Sparking creative approaches to organizational challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Design thinking workshops and innovation sprints</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Systems thinking approaches to complex problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-consulting-500 rounded-full mt-2"></div>
                  </div>
                  <span className="text-gray-700">Adaptive strategy development in uncertain environments</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            className="bg-consulting-600 hover:bg-consulting-700 text-white px-8 py-6 text-lg group"
          >
            <span>Discuss Your Needs</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
