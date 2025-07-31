import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-gray-300">2401 E Katella Ave, Suite 450</p>
                  <p className="text-gray-300">Anaheim, CA 92806</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-red-400" />
                <p className="text-gray-300">(714) 912-1600</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-red-400" />
                <p className="text-gray-300">info@aivafusion.com</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">Microsoft</p>
                  <p className="text-gray-600 text-xs">Solutions Partner</p>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                <p>Data & AI</p>
                <p>Digital & App Innovation</p>
                <p>Azure</p>
                <p>Infrastructure</p>
                <p>Azure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;