import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-white py-10 md:py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="">
              <div className=" font-bold text-white text-4xl mb-6">
                Serenity*
              </div>
            </a>
            <p className="text-gray-400 mb-6">
              Discover exceptional properties where modern design meets natural
              beauty. Our curated homes offer the perfect balance of luxury and
              harmony.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <i className="ri-instagram-line text-white"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <i className="ri-twitter-x-line text-white"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <i className="ri-pinterest-line text-white"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="https://readdy.ai/home/fd8f0908-759a-4c2f-934f-dddf60d1ea5a/a6726fdd-74f5-4d16-bacd-6f35af4bc2fb"
                  data-readdy="true"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">
                  123 Serenity Drive, Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line text-gray-400 mr-3"></i>
                <span className="text-gray-400">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line text-gray-400 mr-3"></i>
                <span className="text-gray-400">info@serenity.com</span>
              </li>
              <li className="flex items-center">
                <i className="ri-time-line text-gray-400 mr-3"></i>
                <span className="text-gray-400">
                  Mon-Fri: 9AM-6PM, Sat: 10AM-4PM
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new properties and exclusive
              offers.
            </p>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full rounded-l-lg bg-gray-800 border-none text-white !rounded-l-button focus:ring-0 text-sm"
              />
              <button className="bg-primary text-white px-4 rounded-r-lg py-2 !rounded-r-button whitespace-nowrap hover:bg-gray-700 transition text-sm">
                Subscribe
              </button>
            </form>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex space-x-2">
                <i className="ri-visa-fill text-gray-400 text-xl"></i>
                <i className="ri-mastercard-fill text-gray-400 text-xl"></i>
                <i className="ri-paypal-fill text-gray-400 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            © 2025 Serenity Luxury Homes. All rights reserved.
          </p>
          <div className="flex space-x-6 pt-6 md:pt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-400 transition"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-400 transition"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
