import React from "react";

const Body = () => {
  return (
    <div className="lg:flex">
      <div className="flex items-start justify-center lg:flex-1 lg:order-2 lg:justify-end lg:overflow-hidden">
        <img
          src="./assets/Hero-Model.png"
          alt="hero"
          className="absolute h-68 md:h-75 lg:h-[400px] top-[140px]"
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
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter e-mail address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Body;
