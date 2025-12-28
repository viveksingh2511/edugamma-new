import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  UserPlus, BookOpen, FileText, PenTool, Calendar, GraduationCap,
  CheckCircle, CreditCard, Users, BadgeCheck, UserCheck, Bus,
  Smartphone, Bell, TrendingUp
} from 'lucide-react';
import { modulesData } from '../mock';

const iconMap = {
  UserPlus, BookOpen, FileText, PenTool, Calendar, GraduationCap,
  CheckCircle, CreditCard, Users, BadgeCheck, UserCheck, Bus,
  Smartphone, Bell, TrendingUp
};

const Modules = () => {
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
    <section id='modules' ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {modulesData.title}
          </h2>
          <p className="text-xl text-gray-600">
            {modulesData.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto bg-white shadow-lg rounded-xl p-2">
            {modulesData.categories.map((category, index) => (
              <TabsTrigger 
                key={index}
                value={index.toString()}
                className="py-4 px-6 text-base font-semibold data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg transition-all duration-300"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {modulesData.categories.map((category, categoryIndex) => (
            <TabsContent key={categoryIndex} value={categoryIndex.toString()} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.modules.map((module, moduleIndex) => {
                  const Icon = iconMap[module.icon];
                  return (
                    <Card 
                      key={moduleIndex}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-md bg-white"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                              {module.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {module.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Modules;
