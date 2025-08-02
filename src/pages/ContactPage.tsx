import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Calendar, 
  CheckCircle, 
  User, 
  Building,
  Clock,
  Award,
  Users,
  Target
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["2401 E Katella Ave, Suite 450", "Anaheim, CA 92806"],
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(714) 912-1600", "Mon-Fri 9AM-6PM PST"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@aivafusion.com", "support@aivafusion.com"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  const services = [
    "Power BI Solutions",
    "Microsoft SQL & Fabric",
    "Copilot Studio",
    "Power Apps Development",
    "Power Automate/RPA",
    "AI/ML Solutions",
    "Web Development",
    "Consulting & Support"
  ];

  const stats = [
    { icon: Clock, value: "24hrs", label: "Response Time" },
    { icon: Users, value: "10+", label: "Happy Clients" },
    { icon: Target, value: "20-30", label: "Projects Delivered" },
    { icon: Award, value: "2+", label: "Years Experience" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with Microsoft Power Platform solutions? Schedule a <strong>FREE consultation</strong> 
            and demo. We'll show you exactly how our expertise can streamline your operations and drive growth.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              
              {!isSubmitted ? (
                <>
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mr-4">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Schedule a FREE Consultation</h2>
                      <p className="text-gray-600">Free demo and consultation before any billing</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                          required
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                          required
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white appearance-none"
                        required
                      >
                        <option value="">Select Service Interest</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your project requirements..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Schedule FREE Consultation</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your FREE consultation request has been submitted successfully. Our team will contact you within 24 hours 
                    to schedule your personalized demo and consultation.
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                    <p className="text-sm text-gray-700">
                      <strong>What's Next?</strong> We'll analyze your requirements and prepare a customized demo 
                      showcasing how our Microsoft Power Platform solutions can transform your specific business processes. 
                      No billing until you're completely satisfied with our solution.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index}
                    className={`${info.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group border border-gray-100 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className={`${info.bgColor} p-4 rounded-2xl border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-8 w-8 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Quick Stats */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="bg-blue-100 p-3 rounded-xl w-fit mx-auto mb-3">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services and process
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What Microsoft Power Platform services do you offer?",
                answer: "We provide comprehensive Power Platform solutions including Power BI analytics, Power Apps development, Power Automate/RPA, Copilot Studio chatbots, Microsoft SQL Server, and Fabric implementations."
              },
              {
                question: "Do you really offer free consultations?",
                answer: "Yes! We provide a completely free initial consultation and demo. We'll analyze your requirements and show you exactly how our solutions can benefit your business before any billing begins."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and scope. Simple Power Apps or Power BI dashboards can be completed in 2-4 weeks, while comprehensive enterprise solutions may take 2-6 months. We'll provide a detailed timeline during your consultation."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Absolutely! We offer 24/7 support, maintenance, training, and continuous optimization to ensure your solutions deliver maximum value over time."
              },
              {
                question: "Can you integrate with our existing systems?",
                answer: "Yes, we specialize in seamless integrations with existing business systems, databases, and third-party applications to ensure your new solutions work harmoniously with your current infrastructure."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;