import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 py-16 p-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Column */}
          <div>
          <span id="logo-name" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                RSquareSoft Technologies
              </span>
            <p className="mb-6">Delivering Best-In-Class Technology.</p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-gray-100 hover:text-blue-400 transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-100 hover:text-blue-400 transition-colors">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-100 hover:text-blue-400 transition-colors">
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-100 hover:text-blue-400 transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h5 className="text-xl font-bold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about-us/" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/products/" className="hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="career" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="contact-us" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="text-xl font-bold mb-6">Our Services</h5>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="text-xl font-bold mb-6">Contact Us</h5>
            <div className="space-y-3 mb-6">
              <p className="flex items-center">
                <LocationOnIcon className="w-5 h-5 mr-2" />
                Office #, 2nd Floor, The Woods Commercial, Wakad, Pune 411057
              </p>
              <p className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                (555) 123-4567
              </p>
              <p className="flex items-center">
                <EmailIcon className="w-5 h-5 mr-2" />
                info@rsquaresoft.com
              </p>
            </div>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12">
          <hr className="border-gray-800 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© {currentYear} RSquareSoft Technologies. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="/"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

