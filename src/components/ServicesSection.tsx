import React from 'react';
import { Bot, Database, Workflow, Brain, Shield, Zap, Settings, BarChart3 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "RPA Development & Implementation",
      description: "Custom bot development for automating repetitive tasks across various business processes.",
      features: ["Process Discovery", "Bot Design & Development", "Testing & Deployment", "24/7 Monitoring"],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Database,
      title: "Data Processing Automation",
      description: "Intelligent data extraction, validation, and migration solutions for seamless information flow.",
      features: ["Data Mining", "ETL Processes", "Data Validation", "Report Generation"],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Workflow,
      title: "Workflow Optimization",
      description: "Streamline complex business workflows with intelligent process automation and optimization.",
      features: ["Process Mapping", "Workflow Design", "Integration Setup", "Performance Monitoring"],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Advanced cognitive automation using machine learning and artificial intelligence technologies.",
      features: ["Document Processing", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security implementation ensuring regulatory compliance and data protection.",
      features: ["Security Audits", "Compliance Monitoring", "Access Control", "Risk Assessment"],
      gradient: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Comprehensive support services ensuring optimal performance and continuous improvement.",
      features: ["24/7 Support", "Performance Tuning", "Updates & Patches", "Training Programs"],
      gradient: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    }
  ];

  const projects = [
    {
      title: "Supply Chain Automation",
      client: "Manufacturing Company",
      description: "Because RPA is well-suited to scale with a big and frequently-changing logic system like a supply chain - both domestic and international.",
      impact: "200+ FTE Cost",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      title: "Insurance Claims Processing",
      client: "Insurance Provider",
      description: "Routing claims is a significant portion of the insurance workload. RPA systems can automate a lot of mundane tasks.",
      impact: "30% Cost Saving",
      icon: Database,
      color: "text-green-600"
    },
    {
      title: "Financial Institution Automation",
      client: "Banking Sector",
      description: "RPA bots is being used by all the large financial institution to replace over 200 human employees workload at a fraction of the cost.",
      impact: "70-80% Speed Increase",
      icon: Zap,
      color: "text-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
            <Settings className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Our Services</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
            Comprehensive RPA<br />
            Solutions & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From initial consultation to full-scale implementation, we provide end-to-end automation services 
            that transform your business operations and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`${service.bgColor} ${service.borderColor} border-2 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Projects */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 shadow-xl border border-blue-100">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Featured Success Stories</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world automation projects that delivered exceptional results for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`h-6 w-6 ${project.color}`} />
                    </div>
                    <div className={`text-2xl font-bold ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                      {project.impact}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{project.client}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;