import React from 'react';
import { Zap, Clock, TrendingUp, Cpu } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200/30 rounded-full animate-bounce delay-3000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 font-medium">Expertise-Driven RPA</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
                Using Expertise-Driven<br />
                RPA to Accelerate<br />
                <span className="text-blue-800">Digital Transformation</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                RPA Solutions – Leverage RPA to get ahead with your competition. Position your workforce to ramp up their efficiency and productivity and simultaneously reduce delivery times. Aivafusion's RPA consultants work closely with your business teams to thoroughly analyze the processes needing automation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Schedule a RPA Appointment →
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center hover:scale-105 transform duration-300"
              >
                Learn More →
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group">
                  <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                    <Clock className="h-8 w-8 text-blue-600 group-hover:animate-spin transition-transform duration-1000" />
                  </div>
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-blue-600 rounded-full relative group-hover:border-blue-700 transition-colors duration-300 shadow-lg">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 origin-bottom rotate-45 group-hover:rotate-90 transition-transform duration-1000"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-5 bg-blue-400 origin-bottom rotate-90 group-hover:rotate-180 transition-transform duration-1000"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-blue-600 bg-white px-2 py-1 rounded-full shadow-md">
                      24/7
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Time Automation</h3>
                    <p className="text-sm text-gray-600">Continuous process execution without breaks</p>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 group">
                  <div className="bg-green-100 p-3 rounded-xl w-fit mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="relative">
                    <div className="flex space-x-2 items-end">
                      <div className="w-3 bg-gradient-to-t from-green-400 to-green-300 rounded-full h-8 group-hover:h-12 transition-all duration-700 shadow-lg"></div>
                      <div className="w-3 bg-gradient-to-t from-green-500 to-green-400 rounded-full h-12 group-hover:h-16 transition-all duration-700 delay-100 shadow-lg"></div>
                      <div className="w-3 bg-gradient-to-t from-green-600 to-green-500 rounded-full h-16 group-hover:h-20 transition-all duration-700 delay-200 shadow-lg"></div>
                      <div className="w-3 bg-gradient-to-t from-green-700 to-green-600 rounded-full h-10 group-hover:h-24 transition-all duration-700 delay-300 shadow-lg"></div>
                    </div>
                    <div className="absolute -top-6 right-0 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full shadow-md animate-bounce">
                      +300%
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Performance Growth</h3>
                    <p className="text-sm text-gray-600">Exponential productivity improvements</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 pt-8">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-2 group">
                  <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                    <Zap className="h-8 w-8 text-blue-600 group-hover:text-yellow-500 transition-colors duration-300" />
                  </div>
                  <div className="relative">
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <div className="w-16 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg relative overflow-hidden group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-500">
                        <div className="absolute inset-0 bg-white/30 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                      </div>
                      <div className="text-xs font-bold text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                        PROCESSING...
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Smart Processing</h3>
                    <p className="text-sm text-gray-600">Intelligent task automation</p>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-purple-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-2 group">
                  <div className="bg-purple-100 p-3 rounded-xl w-fit mb-4">
                    <Cpu className="h-8 w-8 text-purple-600 group-hover:animate-pulse transition-all duration-300" />
                  </div>
                  <div className="relative">
                    <div className="grid grid-cols-3 gap-1 w-16">
                      <div className="w-4 h-4 bg-purple-200 rounded-sm group-hover:bg-purple-400 transition-colors duration-300"></div>
                      <div className="w-4 h-4 bg-purple-300 rounded-sm group-hover:bg-purple-500 transition-colors duration-300 delay-75"></div>
                      <div className="w-4 h-4 bg-purple-400 rounded-sm group-hover:bg-purple-600 transition-colors duration-300 delay-150"></div>
                      <div className="w-4 h-4 bg-purple-300 rounded-sm group-hover:bg-purple-500 transition-colors duration-300 delay-225"></div>
                      <div className="w-4 h-4 bg-purple-500 rounded-sm group-hover:bg-purple-700 transition-colors duration-300 delay-300"></div>
                      <div className="w-4 h-4 bg-purple-400 rounded-sm group-hover:bg-purple-600 transition-colors duration-300 delay-375"></div>
                      <div className="w-4 h-4 bg-purple-200 rounded-sm group-hover:bg-purple-400 transition-colors duration-300 delay-450"></div>
                      <div className="w-4 h-4 bg-purple-300 rounded-sm group-hover:bg-purple-500 transition-colors duration-300 delay-525"></div>
                      <div className="w-4 h-4 bg-purple-400 rounded-sm group-hover:bg-purple-600 transition-colors duration-300 delay-600"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">AI Integration</h3>
                    <p className="text-sm text-gray-600">Machine learning powered automation</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute -bottom-8 left-1/4 w-4 h-4 bg-green-400/20 rounded-full animate-bounce delay-3000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;