import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "./../../assets/RSquareLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 py-16 p-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Column */}
          <div>
            <div className="">
              <div className=" flex items-center  ">
                <img className="pl-0 mb-8" src={Logo} alt="logo" />
                <span id="logo-name" className="text-xl font-600 text-center">
                  RSquareSoft Technologies
                  <p
                    className="mb-8 text-xs"
                    style={{ fontFamily: "poppins, serif", fontWeight: "400" }}
                  >
                    Delivering Best-In-Class Technology
                  </p>
                </span>
              </div>
            </div>

            <div className="flex gap-4 ms-20 mb-6">
              <a
                href="#"
                className="text-gray-100 hover:text-blue-400 transition-colors"
              >
                <div className="w- 10 h-6">
                  <FacebookIcon />
                </div>
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-blue-400 transition-colors"
              >
                <div className="w- 10 h-6">
                  <TwitterIcon />
                </div>{" "}
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-blue-400 transition-colors"
              >
                <div className="w- 10 h-6">
                  <LinkedInIcon />
                </div>{" "}
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-blue-400 transition-colors"
              >
                <div className="w- 10 h-6">
                  <InstagramIcon />
                </div>{" "}
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="ml-32">
            <h5 className="text-xl font-bold mb-6 ">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us/"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/services/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/career/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact-us/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="ml-12">
            <h5 className="text-xl font-bold mb-6">Our Services</h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="text-xl font-bold mb-6">Contact Us</h5>
            <div className="space-y-3 mb-6">
              <p className="flex items-center w- 10 h-6 mr-3">
                <LocationOnIcon />
                Office #, 2nd Floor, The Woods Commercial, Wakad, Pune 411057
              </p>
              <p className="flex items-center w- 10 h-6 mr-3">
                <CallIcon /> (555) 123-4567
              </p>
              <p className="flex items-center w- 10 h-6 mr-3">
                <MailIcon />
                info@rsquaresoft.com
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="px-4 py-2 w-full bg-gray-800 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12">
          <hr className="border-gray-800 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              © {currentYear} RSquareSoft Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
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
