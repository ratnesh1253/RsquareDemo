import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./../../assets/RSquareLogo.png";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about-us/" },
    { name: "PRODUCTS", href: "/products/" },
    { name: "SERVICES", href: "/services/" },
    { name: "CAREER", href: "/career/" },
    { name: "CONTACT US", href: "/contact-us/" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Main navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and company name section */}
          <a href="/">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={Logo} alt="Company Logo" className="h-17 w-17" />
              </div>
              <div className="ml-4 my-4 flex flex-col">
                <div id="logo-name" className="text-2xl text-black-800">
                  RSquareSoft Technologies
                </div>
                <div className="text-xs text-gray-600 ">
                  Delivering Best-In-Class Technology
                </div>
              </div>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black-600 hover:text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black-700 hover:text-blue-900 hover:bg-blue-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black-600 hover:text-blue-900 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
