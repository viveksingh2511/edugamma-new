import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Edugamma</h3>
            <p className="text-sm">
              Comprehensive School ERP platform trusted by K-12 institutions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#modules" className="hover:text-emerald-400 transition-colors">Modules</a></li>
              <li><a href="#workflow" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="hover:text-emerald-400 transition-colors">Benefits</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Academic Management</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Administrative Operations</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Communication Tools</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Analytics & Reports</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91-7683006741</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>contact@edugamma.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Edugamma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
