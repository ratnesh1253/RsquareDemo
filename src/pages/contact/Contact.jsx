import React, { useState } from "react";
import { Calendar, Phone } from "lucide-react";
import bg from "../../assets/contactbg.png";
import Map from "./Map";

export default function Contact() {
  const [isScheduleHovered, setIsScheduleHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="relative min-h-[400px] w-full flex items-center justify-center">
        {/* Background Image */}
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 w-full h-130 object-cover"
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40 " /> */}

        <div>
          <h1 className="relative text-center font-bold text-7xl text-orange-400 mt-30">
            Get In Touch
          </h1>
          <p className="relative text-white max-w-150 text-center">
            <span className="relative text-orange-400">RSquareSoft</span> is
            committed to providing solutions that meet your needs. Reach out to
            us today!
          </p>
          {/* Content Container */}
          <div className="relative flex flex-col sm:flex-row gap-6 items-center justify-center p-8 rounded-xl backdrop-blur-md bg-white/10 shadow-2xl transition-all duration-300 mt-30 mb-10">
            {/* Schedule Button */}
            <button
              onMouseEnter={() => setIsScheduleHovered(true)}
              onMouseLeave={() => setIsScheduleHovered(false)}
              className={`group relative overflow-hidden px-8 py-4 bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 active:scale-95 flex items-center gap-3 ${
                isScheduleHovered ? "shadow-lg" : "shadow-md"
              }`}
            >
              <Calendar
                className={`transition-all duration-300 ${
                  isScheduleHovered ? "rotate-12 scale-110" : ""
                }`}
                size={24}
              />
              <span className="font-semibold">Schedule Appointment</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            {/* Contact Button */}
            <button
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
              className={`group relative overflow-hidden px-8 py-4 bg-emerald-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-emerald-700 active:scale-95 flex items-center gap-3 ${
                isContactHovered ? "shadow-lg" : "shadow-md"
              }`}
              onClick={() => setShowForm(true)}
            >
              <Phone
                className={`transition-all duration-300 ${
                  isContactHovered ? "rotate-12 scale-110" : ""
                }`}
                size={24}
              />
              <span className="font-semibold">Contact Us</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>
        {/* Popup Form */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-100 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-4xl mr-5"
              >
                &times;
              </button>

              <h2 className="text-xl text-center font-bold mb-4">
                Business Inquiry
              </h2>

              <form>
                <label className="block mb-2">
                  First Name
                  <input
                    type="text"
                    className="border p-2 rounded w-full"
                    placeholder="John"
                  />
                </label>
                <label className="block mb-2">
                  Last Name
                  <input
                    type="text"
                    className="border p-2 rounded w-full"
                    placeholder="Doe"
                  />
                </label>

                <label className="block mb-2">
                  Email
                  <input
                    type="email"
                    className="border p-2 rounded w-full"
                    placeholder="example@mail.com"
                  />
                </label>

                <label className="block mb-2">
                  Phone Number
                  <input
                    type="tel"
                    className="border p-2 rounded w-full"
                    placeholder="Enter your phone number"
                  />
                </label>

                <label className="block mb-2">
                  Message
                  <textarea
                    className="border p-2 rounded w-full"
                    placeholder="Enter your message"
                    rows="4"
                  ></textarea>
                </label>

                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md w-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Map />
    </div>
  );
}
