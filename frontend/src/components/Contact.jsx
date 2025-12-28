import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { contactData } from '../mock';
import { toast } from '../hooks/use-toast';

const iconMap = {
  Phone: Phone,
  Mail: Mail,
  MessageCircle: MessageCircle
};

const Contact = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    mobile: '',
    email: '',
    city: '',
    country: '',
    studentRange: '',
    board: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Request Submitted!",
      description: "Thank you for your interest. Our team will contact you soon.",
    });
    // Reset form
    setFormData({
      schoolName: '',
      contactPerson: '',
      mobile: '',
      email: '',
      city: '',
      country: '',
      studentRange: '',
      board: '',
      message: ''
    });
  };

  return (
    <section id='contact' className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {contactData.title}
              </h2>
              <p className="text-xl text-gray-600">
                {contactData.subtitle}
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              {contactData.contactMethods.map((method, index) => {
                const Icon = iconMap[method.icon];
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                          <Icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">{method.label}</p>
                          <p className="text-lg font-semibold text-gray-900">{method.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3776165/pexels-photo-3776165.jpeg"
                alt="School building"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right side - Contact form */}
          <Card className="shadow-2xl border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Text inputs */}
                {contactData.formFields.map((field, index) => (
                  <div key={index}>
                    <Label htmlFor={field.name} className="text-gray-700 font-medium mb-2 block">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required={field.required}
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                ))}

                {/* Student Range Select */}
                <div>
                  <Label htmlFor="studentRange" className="text-gray-700 font-medium mb-2 block">
                    Number of Students <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange('studentRange', value)} required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactData.studentRanges.map((range, index) => (
                        <SelectItem key={index} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Board Select */}
                <div>
                  <Label htmlFor="board" className="text-gray-700 font-medium mb-2 block">
                    Board / Curriculum <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange('board', value)} required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select board" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactData.boards.map((board, index) => (
                        <SelectItem key={index} value={board}>{board}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message Textarea */}
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full resize-none transition-all duration-300 focus:ring-2 focus:ring-emerald-500"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
