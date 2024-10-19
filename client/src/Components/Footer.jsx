import React from "react";
import Socialmedia from "./Socialmedia";

const Footer = () => {
  return (
    <div id="contact" className="flex flex-col gap-6 bg-gray-800 text-white py-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      {/* Social Media Component */}
      <div className="flex flex-col items-center justify-center gap-2 mb-4 md:mb-0">
        <p className="text-yellow-600 text-3xl font-bold">Portfolio</p>
        <br />
        <Socialmedia />
      </div>
  
      {/* Contact Information */}
      <div className="text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-lg text-yellow-600">Address:</h1>
        <p>
          Room no-7/49 Spring mil compound, <br />
          G. D. Ambekar Naigaon, <br />
          Dadar-East 400014
        </p>
      </div>
  
      {/* Contact Details */}
      <div className="text-center md:text-left text-lg mt-4 md:mt-0">
        <h1 className="text-yellow-600">Contact:</h1>
        <p>8080756377 / 8275794264</p>
        <p className="text-yellow-600 mt-2">© 2024 OMKAR RAWOOL, Inc. All rights reserved.</p>
      </div>
    </div>
  </div>
  

  );
};

export default Footer;
