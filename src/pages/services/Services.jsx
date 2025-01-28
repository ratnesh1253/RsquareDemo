import React from 'react';
import { useState } from 'react';
import Hero from './Hero';
import ServicesFilter from './ServicesFilter';
import ContactSection from './ContactSection';
import logo1 from "../../assets/DevelopingBextInClassFinanceProducts.jpeg"
import logo2 from "../../assets/Staff-Augmentation.jpeg"
import logo3 from "../../assets/ImplementationPartner.jpeg"

//import { useNavigate } from 'react-router-dom';




const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  //const [activeAccordion, setActiveAccordion] = useState(null);

  
  const services = [
    {
      category: 'development',
      title: 'Product Development',
      description: 'AI, ML, and Data Anaytics are going to change the world dramatically. But speed is a key component of the new product development in these areas. The days of ideation and innovation taking place over a long period of time are gone. The process is now measured in weeks and months versus years.',
      features: ['Market Analysis', 'Growth Strategy', 'Risk Assessment'],
      icon: logo1,
    },
    {
      category: 'development',
      title: 'Pod Model (Fixed Price)',
      description: 'With our Fixed Price Model, we guarantee a seamless and predictable journey for your AI, ML, and Data Anlaytics project. No more budgetary surprises or unforeseen expenses – our commitment is to deliver excellence within the agreed-upon budget. Trust RSquareSoft to turn your vision into reality with precision, reliability, and unmatched value.',
      features: ['Web Applications', 'Mobile Apps', 'Cloud Solutions'],
      icon:logo2
    },
    {
      category: 'consulting',
      title: 'Time and Material Model',
      description: 'RsquareSoft Technologies stands as your foremost expert in the technology space. We bring unmatched proficiency in AI, ML, and Data Anlaytics. You have the freedom to scale resources up or down based on evolving needs, ensuring you pay for exactly what you get.',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing'],
      icon: logo3
    },
   
  ];

  

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Hero Section */}
      <Hero></Hero>
      {/* Services Filter */}
      <ServicesFilter activeTab={activeTab} setActiveTab={setActiveTab} filteredServices={filteredServices}></ServicesFilter>


      {/* Contact Section */}
      <ContactSection></ContactSection>
    </div>
  );
};

export default ServicesPage;