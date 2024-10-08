import React from "react";
import Socialmedia from "./Socialmedia";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6  md:justify-between bg-gray-800 text-white py-6 ">
      
        <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center">
          <Socialmedia />
          
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h1 className="text-lg text-yellow-600">Address :</h1>
            <p >
              Room no-7/49 Spring mil compound, <br /> G. D. Ambekar Naigaon, <br /> Dadar-East 400014
            </p>
           
          </div>
          <div className="text-center md:text-left text-lg">
            <h1 className="text-yellow-600">Contact:</h1>
            <p> 8080756377 / 8275794264</p>
            <p className="text-yellow-600">© 2024 OMKAR RAWOOL, Inc. All rights reserved.</p>
          </div>
        </div>
     
    </div>
  );
};

export default Footer;
