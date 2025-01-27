import React from 'react';
import { useState } from 'react';
import { ChevronDown, CheckCircle, ArrowRight, Phone, Mail, Clock } from 'lucide-react';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const services = [
    {
      category: 'consulting',
      title: 'Product Development',
      description: 'AI, ML, and Data Anaytics are going to change the world dramatically. But speed is a key component of the new product development in these areas. The days of ideation and innovation taking place over a long period of time are gone. The process is now measured in weeks and months versus years.',
      features: ['Market Analysis', 'Growth Strategy', 'Risk Assessment'],
      icon: '📊'
    },
    {
      category: 'development',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your needs',
      features: ['Web Applications', 'Mobile Apps', 'Cloud Solutions'],
      icon: '💻'
    },
    {
      category: 'marketing',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing'],
      icon: '📱'
    },
    {
      category: 'design',
      title: 'UI/UX Design',
      description: 'Creating beautiful and functional user experiences',
      features: ['User Research', 'Wireframing', 'Prototyping'],
      icon: '🎨'
    }
  ];

  

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6  text-center">Our Services</h1>
          <p className="text-xl md:text-2xl   text-center">
          Explore a world of creative solutions and innovation tailored to your needs.
          </p>
        </div>
      </div>

      {/* Services Filter */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Services
          </button>
          {['consulting', 'development', 'marketing', 'design'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeTab === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 flex items-center text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      
      {/* FAQ Section */}
      

      {/* Contact Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ready to Get Started?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-3" />
              <div>
                <p className="font-semibold">Email Us</p>
                <p>contact@yourcompany.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-3" />
              <div>
                <p className="font-semibold">Business Hours</p>
                <p>Mon-Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;