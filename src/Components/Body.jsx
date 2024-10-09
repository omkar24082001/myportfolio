import React from "react";
import ContactForm from "./ContactFrom";

const Body = () => {
  return (
    <div className="lg:flex" id="home">
      <div className="flex items-start justify-center lg:flex-1 lg:order-2 lg:justify-end lg:overflow-hidden relative">
        <img
          src="https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728445448/Hero-Model_qnivci.png"
          alt="hero"
          className="w-full h-68 max-w-sm md:max-w-md  lg:max-w-lg  lg:object-contain object-cover md:h-50 lg:h-[400px]"
        />
      </div>

      <div className="space-y-0 ">
        <p className="text-yellow-600 text-3xl ">
          <b>Hello It's Me</b>
        </p>
        <h1 className="text-white text-6xl font-bold leading-tight font-playfair ">
          Omkar Rawool
        </h1>
        <p className="text-white text-3xl ">
          <b>
            And I'm a <b>Full Stack Developer</b>
          </b>
        </p>
        <br />
        <p className="font-lato text-white">
          "I am a passionate fresher full-stack developer dedicated to creating
          dynamic web applications. <br /> I merge creativity and technology to
          deliver functional, visually appealing solutions that <br /> reflect
          my commitment to innovation."
        </p>
        <br />

        <br />
        <ContactForm />
      </div>
    </div>
  );
};

export default Body;
