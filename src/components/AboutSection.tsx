import React from 'react';
import { Users, Award, Globe, Lightbulb, Target, Zap, Brain, Shield } from 'lucide-react';

const AboutSection = () => {
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
      description: "Leading automation innovation",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Globe,
      number: "Global",
      label: "Client Reach",
      description: "Global automation solutions",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Lightbulb,
      number: "20-30",
      label: "Processes Automated",
      description: "Streamlined operations delivered",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision & Excellence",
      description: "We deliver automation solutions with unmatched accuracy and attention to detail.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Pioneering cutting-edge RPA technologies that transform business landscapes.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Intelligent Solutions",
      description: "AI-powered automation that learns, adapts, and evolves with your business needs.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security ensuring your data and processes remain protected.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200/30 rounded-full animate-bounce delay-3000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">About Aivafusion</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
            Pioneering the Future<br />
            of Business Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Intelligent Automation (IA), Robotic Process Automation (RPA), and Software Development are among Aivafusion's specialties. Our goal is to create customised IT solutions to eliminate any downtimes, promote easy management process, and reduce the risk of interruptions. We have 2+ years of combined experience with dedicated teams for each technology. We have clients all over the world and have the ability to assist our clients globally.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

        {/* Mission Statement */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-blue-100 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We are expertise in all these fields: <strong>Copilot Studio, Power Apps, Power Automate, Fabric, Power BI, AI/ML, Full Stack Website Development</strong>. 
              Our dedicated teams work on each technology to provide the best solutions for your business needs. We have separate specialized teams for doing all those works ensuring quality and expertise in every project.
            </p>
          </div>
        </div>

        {/* Core Values */}
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
  );
};

export default AboutSection;