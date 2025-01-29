import React from 'react';
import { motion } from 'framer-motion';
//import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
//import { Search, MapPin, Briefcase, Clock, ChevronDown, ChevronRight } from 'lucide-react';

const CareersPage = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* CTA Section */}
      <section className="py-5 bg-gradient-to-r from-orange-300 to-indigo-700 text-white  rounded-lg shadow-lg p-6">
        <div className="container mx-auto px-4 text-center ">

          <h1 className="text-5xl font-bold mb-6 text-white">Career</h1>
          <p className=" mb-8  mx-auto">
          Joining RSquareSoft Technologies means embarking on a career journey infused with innovation, growth, and meaningful impact. As a pioneering force in Cloud Computing, Machine Learning, Data Anlytics, and Artificial Intelligence, we understand that our team is the cornerstone of our success. At RSquareSoft, we don’t just offer jobs; we provide opportunities for individuals to contribute to groundbreaking projects, shape cutting-edge technologies, and be part of a collaborative and forward-thinking community. We believe in fostering an environment where talents are not just recognized but are continually nurtured, where creativity is not only encouraged but is a driving force behind every solution we develop. Your career at RSquareSoft is not just a job; it’s a pathway to professional fulfillment, personal growth, and the chance to be a part of shaping the future of technology.
          </p>
        </div>
      </section>
      

      

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why RSquareSoft Technologies ?</h2>
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                title: 'Innovation Culture',
                description: ' Join a team that thrives on innovation. At RSquareSoft, we encourage fresh ideas, creative thinking, and continuous learning. Our collaborative culture ensures that every team member has the opportunity to contribute to cutting-edge projects and make a real impact.',
                icon: '💡'
              },
              {
                title: 'Cutting-Edge Technologies',
                description: 'Be part of a company that stays ahead of the curve. We work with the latest technologies in Cloud Computing, Data Anlaytics, Machine Learning, and Artificial Intelligence, providing our team members with the opportunity to work on exciting and challenging projects that push the boundaries of what’s possible.',
                icon: '🤖'
              },
              {
                title: 'Learning and Development',
                description: 'We invest in our people. RSquareSoft is committed to the professional growth of our team members. Whether through training programs, certifications, or attending industry conferences, we support your journey to becoming a subject matter expert in your field.',
                icon: '🎓'
              },
              {
                title: 'Global Collaborations',
                description: 'Join a diverse and dynamic team that collaborates on a global scale. Our projects span across industries and geographies, providing you with the chance to work with clients and colleagues from around the world.',
                icon: '🌍'
              },
              {
                title: 'Work-Life Balance',
                description: 'We understand the importance of a healthy work-life balance. RSquareSoft promotes flexibility, ensuring that our team members can achieve their professional goals while maintaining a fulfilling personal life.',
                icon: '⚖️'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-indigo-700 text-white py-24 border-2 border-orange-500 rounded-lg shadow-lg p-6 ">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-orange-500">Join Our Team</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join us and be part of the future of technology!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href='/' className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                View Open Positions
              </a>
              <a href='/' className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Learn About Culture
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;