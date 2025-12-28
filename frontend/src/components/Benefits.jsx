import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Check, Building2, Briefcase, GraduationCap, Users } from 'lucide-react';
import { benefitsData } from '../mock';

const iconMap = {
  Building2: Building2,
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Users: Users
};

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id='benefits' className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {benefitsData.title}
          </h2>
          <p className="text-xl text-gray-600">
            {benefitsData.subtitle}
          </p>
        </div>

        {/* Stakeholders grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.stakeholders.map((stakeholder, index) => {
            const Icon = iconMap[stakeholder.icon];
            return (
              <Card 
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-none shadow-lg bg-white overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                      <Icon className="w-10 h-10 text-emerald-600" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {stakeholder.title}
                  </h3>

                  <ul className="space-y-3">
                    {stakeholder.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
