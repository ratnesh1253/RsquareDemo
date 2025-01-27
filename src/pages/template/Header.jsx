import React, { useState } from "react";
import Logo from "./../../assets/RSquareLogo.png";
import { Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="text-black m-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={Logo} alt="logo" />
            <div>
              <span id="logo-name" className="text-xl font-bold">
                RSquareSoft Technologies
              </span>
              <p>Delivering Best-In-Class Technology</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://rsquaresoft.com/" className="hover:text-blue-400">
              Home
            </a>

            <a href="/about-us/" className="hover:text-blue-400">
              About Us
            </a>

            <a href="/products/" className="hover:text-blue-400">
              Products
            </a>

            <a href="/services/" className="hover:text-blue-400">
              Services
            </a>

            <a href="/career/" className="hover:text-blue-400">
              Career
            </a>

            <a id="/contact-us/" href="#" className="hover:text-blue-400">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-800"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="https://rsquaresoft.com/"
                className="block px-3 py-2 rounded-md hover:bg-slate-800"
              >
                Home
              </a>
              <a
                href="/about/"
                className="block px-3 py-2 rounded-md hover:bg-slate-800"
              >
                About
              </a>
              <a
                href="/products/"
                className="block px-3 py-2 rounded-md hover:bg-slate-800"
              >
                Products
              </a>
              <a
                href="/services/"
                className="block px-3 py-2 rounded-md hover:bg-slate-800"
              >
                Services
              </a>
              <a
                href="/career/"
                className="block px-3 py-2 rounded-md hover:bg-slate-800"
              >
                Career
              </a>
              <a
                href="/contact-us/"
                className="block px-3 py-2 rounded-md hover:bg-slate-800"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
