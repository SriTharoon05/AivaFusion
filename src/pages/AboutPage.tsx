import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Globe, 
  Lightbulb, 
  Target, 
  Zap, 
  Brain, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const AboutPage = () => {
  const achievements = [
    {
      icon: Users,
      number: "10+",
      label: "Happy Clients",
      description: "Businesses transformed globally",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Award,
      number: "2+",
      label: "Years Experience",
      description: "Leading technology innovation",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Globe,
      number: "Global",
      label: "Client Reach",
      description: "Worldwide technology solutions",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Lightbulb,
      number: "20-30",
      label: "Projects Delivered",
      description: "Successful implementations",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence & Innovation",
      description: "We deliver cutting-edge solutions with unmatched quality and attention to detail.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Technology Leadership",
      description: "Pioneering Microsoft Power Platform technologies that transform business landscapes.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Intelligent Solutions",
      description: "AI-powered applications that learn, adapt, and evolve with your business needs.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security ensuring your data and processes remain protected.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const expertise = [
    "Copilot Studio",
    "Power Apps",
    "Power Automate", 
    "Microsoft Fabric",
    "Power BI",
    "AI/ML Development",
    "Full Stack Web Development",
    "Microsoft SQL Server"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
            About Aivafusion
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of business technology with comprehensive Microsoft Power Platform solutions, 
            AI/ML development, and custom web applications.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Aivafusion, we specialize in <strong>Microsoft Power Platform solutions, AI/ML development, 
                and custom web applications</strong>. Our mission is to create tailored technology solutions 
                that eliminate downtimes, promote seamless management processes, and reduce operational risks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                With 2+ years of combined experience and dedicated teams for each technology, we serve clients 
                globally and have the expertise to assist businesses worldwide in their digital transformation journey.
              </p>
              <div className="space-y-4">
                {[
                  "Eliminate operational downtimes",
                  "Streamline management processes", 
                  "Reduce business interruption risks",
                  "Drive digital transformation"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <p className="text-sm text-gray-600">Client Satisfaction</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                    <p className="text-sm text-gray-600">Support Available</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">Global</div>
                    <p className="text-sm text-gray-600">Service Reach</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">Free</div>
                    <p className="text-sm text-gray-600">Initial Consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={index}
                  className={`${achievement.bgColor} ${achievement.borderColor} border-2 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className={`${achievement.bgColor} p-4 rounded-2xl w-fit mb-6 border ${achievement.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${achievement.color} group-hover:animate-pulse`} />
                    </div>
                    <div className={`text-4xl font-bold ${achievement.color} mb-2 group-hover:scale-125 transition-transform duration-300`}>
                      {achievement.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.label}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Expertise</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                We are experts in comprehensive Microsoft Power Platform solutions and modern technology stack. 
                Our dedicated teams work on each technology to provide the best solutions for your business needs, 
                ensuring quality and expertise in every project.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {expertise.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
                >
                  <div className="text-lg font-bold text-gray-900">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${value.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Let's discuss how our expertise can help transform your business with the right technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              View Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;