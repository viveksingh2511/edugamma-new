import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Modal from './ui/model';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { label: 'Features', href: '#features' },
    { label: 'Modules', href: '#modules' },
    { label: 'How It Works', href: '#workflow' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Edugamma
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button onClick={() => setIsModalOpen(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                Request Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium px-4 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-4">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request a Free Demo"
      >
        <form className="space-y-4">

          {/* School Name */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              School Name
            </label>
            <input
              type="text"
              placeholder="Enter your school name"
              className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Contact Person */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Contact Person Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Mobile + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+1234567890"
                className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="email@school.com"
                className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* City + Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                City
              </label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Country
              </label>
              <input
                type="text"
                placeholder="Enter country"
                className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Students + Board */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Number of Students
              </label>
              <select className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none">
                <option>Select range</option>
                <option>1 – 500</option>
                <option>500 – 1000</option>
                <option>1000-2000</option>
                <option>2000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Board / Curriculum
              </label>
              <select className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none">
                <option>Select board</option>
                <option>CBSE</option>
                <option>ICSE</option>
                <option>IB</option>
                <option>State Board</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Message (Optional)
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your requirements..."
              className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition"
          >
            Submit Request
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Navbar;
