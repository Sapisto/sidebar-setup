// Footer.tsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 p-4 bg-gray-600 text-white text-center text-sm mb-[20px] rounded-tl-lg rounded-tr-lg">
      <p className="mb-4">© 2024 Acube and Fam. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="/privacy-policy" className="hover:underline hover:text-blue-300 transition-colors duration-200">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="hover:underline hover:text-blue-300 transition-colors duration-200">
          Terms of Service
        </a>
        <a href="/contact" className="hover:underline hover:text-blue-300 transition-colors duration-200">
          Contact Us
        </a>
      </div>
      <div className="mt-4">
        <span className="text-xs text-gray-300">Follow us on:</span>
        <div className="flex justify-center space-x-4 mt-1">
          <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors duration-200" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors duration-200" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors duration-200" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
