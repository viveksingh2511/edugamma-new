import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Modal from './ui/model';

const CTA = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join hundreds of schools worldwide that trust Edugamma for their management needs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group px-8 py-6 text-lg font-semibold"
                onClick={() => setIsModalOpen(true)}
              >
                Request Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
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

export default CTA;
