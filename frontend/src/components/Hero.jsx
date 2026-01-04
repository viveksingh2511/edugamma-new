import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Cloud, Shield, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { heroData } from '../mock';

const iconMap = {
  Cloud: Cloud,
  Shield: Shield,
  HeadphonesIcon: HeadphonesIcon
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {heroData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {heroData.subtitle}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {heroData.badges.map((badge, index) => {
                const Icon = iconMap[badge.icon];
                return (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm"
                  >
                    <Icon className="w-4 h-4 mr-2 text-emerald-600" />
                    {badge.label}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img 
                src={heroData.heroImage}
                alt="Modern school digital learning"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
            </div>
            {/* Floating card */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 animate-float">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Trusted by</p>
                  <p className="text-2xl font-bold text-gray-900">500+ Schools</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
