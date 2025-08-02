import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Database, 
  Bot, 
  Brain, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Target
} from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Power BI",
      description: "Transform your data into actionable insights with advanced analytics and stunning visualizations.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Microsoft SQL & Fabric",
      description: "Robust database solutions and modern data platform architecture for enterprise needs.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Bot,
      title: "Copilot Studio",
      description: "Build intelligent chatbots and virtual assistants to enhance customer experiences.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Power Apps & Automate",
      description: "Create custom applications and automate workflows to streamline business processes.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Leverage artificial intelligence and machine learning to drive innovation and efficiency.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web development solutions tailored to your business requirements.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const stats = [
    { number: "10+", label: "Happy Clients", icon: Users },
    { number: "2+", label: "Years Experience", icon: Award },
    { number: "20-30", label: "Projects Completed", icon: Target },
    { number: "Global", label: "Client Reach", icon: Globe }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200/30 rounded-full animate-bounce delay-3000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-semibold">Microsoft Power Platform Experts</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
              Empowering Businesses with<br />
              <span className="text-blue-800">Microsoft Power Platform</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Comprehensive technology solutions including Power BI, SQL Server, Fabric, Copilot Studio, 
              Power Apps, Power Automate, AI/ML, and custom web development. Transform your business 
              with our expertise-driven approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl inline-flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center justify-center hover:scale-105 transform duration-300"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Microsoft Power Platform solutions and modern technology services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group border border-gray-100 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link 
                      to="/services"
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100"
                >
                  <div className="bg-blue-100 p-3 rounded-xl w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-semibold">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Aivafusion?
              </h2>
              <div className="space-y-6">
                {[
                  "Microsoft Certified Experts with 2+ years of experience",
                  "Comprehensive Power Platform solutions under one roof",
                  "Custom AI/ML and web development capabilities",
                  "Global client reach with 24/7 support",
                  "Free consultation and demo before billing",
                  "Proven track record with 10+ satisfied clients"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link 
                  to="/about"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">Power BI</h3>
                    <p className="text-sm text-gray-600">Advanced Analytics</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <Database className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">SQL & Fabric</h3>
                    <p className="text-sm text-gray-600">Data Solutions</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <Bot className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">Copilot Studio</h3>
                    <p className="text-sm text-gray-600">AI Assistants</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <Zap className="h-12 w-12 text-orange-600 mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">Power Platform</h3>
                    <p className="text-sm text-gray-600">Apps & Automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Get a free consultation and see how our Microsoft Power Platform expertise 
            can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Schedule Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;