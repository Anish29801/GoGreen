import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold">GoGreen</h3>
            <p className="text-xs mt-1">
              Helping you fall in love with plants and create a greener world.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-lg hover:text-green-200 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-lg hover:text-green-200 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-lg hover:text-green-200 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-lg hover:text-green-200 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} GoGreen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
