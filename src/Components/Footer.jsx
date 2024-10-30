import React from 'react';
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-300 border-t-[1px] border-black py-10 mt-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6">
          <h2 className="text-xl font-bold mb-2">AuraNest</h2>
          <p>Your trusted source for quality products.</p>
          <p>&copy; 2024 Company Name. All Rights Reserved.</p>
        </div>

        <div className="w-full md:w-1/4 mb-6">
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div className="w-full md:w-1/4 mb-6">
          <h2 className="text-xl font-bold mb-2">Customer Service</h2>
          <p>Shipping Information</p>
          <p>Returns & Exchanges</p>
          <p>Order Tracking</p>
          <p>Contact Support</p>
          <p>Leave Feedback</p>
        </div>

        <div className="w-full md:w-1/4 mb-6">
          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <SiFacebook className="text-2xl cursor-pointer hover:text-gray-600" />
            <SiInstagram className="text-2xl cursor-pointer hover:text-gray-600" />
            <SiX className="text-2xl cursor-pointer hover:text-gray-600" />
            <SiLinkedin className="text-2xl cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
