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
  Settings,
  Shield,
  Users,
  TrendingUp,
  Code
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Power BI Solutions",
      description: "Transform your data into actionable insights with advanced analytics, interactive dashboards, and stunning visualizations.",
      features: [
        "Custom Dashboard Development",
        "Data Modeling & ETL",
        "Real-time Analytics",
        "Mobile BI Solutions",
        "Advanced DAX Calculations",
        "Report Automation"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Database,
      title: "Microsoft SQL & Fabric",
      description: "Robust database solutions and modern data platform architecture for enterprise-grade data management.",
      features: [
        "SQL Server Administration",
        "Database Design & Optimization",
        "Microsoft Fabric Implementation",
        "Data Warehouse Solutions",
        "Performance Tuning",
        "Backup & Recovery"
      ],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Bot,
      title: "Copilot Studio",
      description: "Build intelligent chatbots and virtual assistants to enhance customer experiences and automate support.",
      features: [
        "Custom Chatbot Development",
        "Natural Language Processing",
        "Multi-channel Integration",
        "AI-powered Conversations",
        "Knowledge Base Integration",
        "Analytics & Insights"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Zap,
      title: "Power Apps",
      description: "Create custom business applications that work seamlessly across devices and integrate with your existing systems.",
      features: [
        "Canvas App Development",
        "Model-driven Apps",
        "Mobile App Solutions",
        "SharePoint Integration",
        "Custom Connectors",
        "User Experience Design"
      ],
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Settings,
      title: "Power Automate",
      description: "Streamline business processes with intelligent workflow automation and robotic process automation (RPA).",
      features: [
        "Workflow Automation",
        "RPA Bot Development",
        "API Integrations",
        "Approval Processes",
        "Document Processing",
        "Scheduled Automations"
      ],
      gradient: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Leverage artificial intelligence and machine learning to drive innovation, efficiency, and competitive advantage.",
      features: [
        "Machine Learning Models",
        "Predictive Analytics",
        "Computer Vision",
        "Natural Language Processing",
        "AI Strategy Consulting",
        "Model Deployment & Monitoring"
      ],
      gradient: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web development solutions tailored to your business requirements with modern technologies.",
      features: [
        "React/Angular Development",
        "Node.js Backend",
        "Database Integration",
        "API Development",
        "Responsive Design",
        "Cloud Deployment"
      ],
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      icon: Shield,
      title: "Consulting & Support",
      description: "Strategic consulting and ongoing support to ensure your technology investments deliver maximum value.",
      features: [
        "Technology Strategy",
        "Architecture Design",
        "24/7 Support",
        "Training Programs",
        "Performance Optimization",
        "Security Assessment"
      ],
      gradient: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    }
  ];

  const industries = [
    {
      icon: TrendingUp,
      title: "Manufacturing",
      description: "Supply chain automation, inventory management, and production analytics."
    },
    {
      icon: Shield,
      title: "Healthcare",
      description: "Patient data management, appointment scheduling, and compliance reporting."
    },
    {
      icon: Users,
      title: "Financial Services",
      description: "Risk analytics, customer onboarding, and regulatory compliance."
    },
    {
      icon: Code,
      title: "Retail & E-commerce",
      description: "Customer analytics, inventory optimization, and sales automation."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive Microsoft Power Platform solutions, AI/ML development, and custom web applications 
            to transform your business operations and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className={`${service.bgColor} ${service.borderColor} border-2 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden`}
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
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact"
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across various industries, delivering tailored solutions for unique business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100"
                >
                  <div className="bg-blue-100 p-4 rounded-xl w-fit mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and requirements" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive solution strategy" },
              { step: "03", title: "Implementation", description: "Building and deploying your solution" },
              { step: "04", title: "Support", description: "Ongoing maintenance and optimization" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Let's discuss how our services can transform your business operations and drive growth.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;