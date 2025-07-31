import React from 'react';
import { Rocket, Settings, TrendingDown } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: TrendingDown,
      title: "Accelerated Transformation",
      description: "Among global executives, 63% say RPA is a major component in digital transformation.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Greater Resilience",
      description: "RPA robots can quickly scale up to meet workload peaks and respond to large demand spikes.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingDown,
      title: "Major Cost Savings",
      description: "RPA improves business KPIs quickly and significantly across industries and around the world.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Improved Efficiency",
      description: "One RPA robot can perform as many tasks as 2-5 full-time employees can achieve manually.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-blue-200/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-purple-200/20 rounded-full animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
            <Rocket className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Why Choose RPA</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Why choose Robotics Process Automation<br />
            for your business from Aivafusion?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With Our RPA Services, You Can Adapt To The Changing Digital World
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`${feature.bgColor} border-2 border-gray-200 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-2 group relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Content Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Business Today</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              RPA is a solution for automating repetitive, tedious, or labor-intensive processes that are typically performed by expert employees. RPA is assisting a number of businesses in their digital transformation efforts. Many businesses have benefited from Aivafusion's assistance in implementing RPA by offering the necessary agility in their business process transformations.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              By embracing RPA, businesses may not only execute the same tasks faster and more accurately, but they can also see an exponential boost in productivity and a reduction in operational costs.
            </p>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Start Your RPA Journey →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;