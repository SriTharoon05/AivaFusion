import React from 'react';
import { Headphones, Database, Users, FileText } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Database,
      title: "Manufacturing",
      description: "Ready BOM/BOQ, Procurement and Inventory Control, ERP Automation, Administration & Reporting, Connected CRMs, Distribution, Sales, Invoicing, PODs, Quality Measures, Quality Control.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Insurance",
      description: "Administering Policies, Underwriting and Claims Processing, Customer Onboarding and Sales, Regulatory compliance and automated documentation.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Banking",
      description: "Accounts Creation, Customer Onboarding, KYC & AML, Account Closures, Better Customer Services, automated transaction processing.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Headphones,
      title: "Healthcare",
      description: "Schedule Doctor's Appointments, Patient Processing, Insurance Claims Processing, Quality Measures, automated patient data management.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Retail",
      description: "Customer Support, Workflow Management, Marketing and Consumer Behaviour Analysis, Demand and Supply Planning, Logistics and Supply Chain Management.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: FileText,
      title: "IT Functions",
      description: "Server & App monitoring, Routine maintenance & monitoring, Email processing & distribution batch processing, Security, backup restoration.",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 mb-8 shadow-lg">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">RPA for Industries</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            RPA Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our RPA solutions are transforming industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div 
                key={index}
                className={`${useCase.bgColor} border-2 border-gray-200 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1 group relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${useCase.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors hover:scale-105 transform duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Benefits Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Benefits Of Using RPA</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Robotic Process Automation Advantages that transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Full-Time Equivalent (FTE) at</div>
              <div className="text-2xl font-bold text-blue-600">30% of the cost</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-green-600 mb-2">29%</div>
              <div className="text-lg font-semibold text-gray-900">Increase in Right-First-Time tasks</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-900">Accuracy & Cross-platform integration</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Ensure 100% Accuracy - Reduce Human Error and misses",
              "Reuse existing IT systems - refresh legacy infrastructure", 
              "Cross-platform integration - 100% Agnostic",
              "Customer Experience - 50% Improvement",
              "Improved Internal Processes - Defining clear/advanced governance",
              "Ensure Business Continuity - Processes in events of disasters",
              "Harness Artificial Intelligence - 70% within 4 weeks",
              "Accelerate Digital Transformation - Catalyze ongoing efforts",
              "Scalability - Enlarge your team virtually"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;