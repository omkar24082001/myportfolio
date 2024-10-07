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
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" alt="lg" />
          <p className="font-lato text-gray-400">
            No spam ,ever . Unsubscribe anytime
          </p>
        </div>
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

        <div>
  <section className="about-section relative py-32">
    <div className="container">
      <div className="flex flex-wrap">
        {/* Image Column first */}
        <div className="image-column w-full md:w-1/2 mb-12 relative">
          <div className="inner-column relative p-10">
            <div className="image relative">
            <img
  src="public/assets/my-pic-2.png"
  alt=""
  className="w-8/12 h-auto block"
/>
              <div className="overlay-box absolute left-10 bottom-12">
                <div className="year-box text-black text-2xl font-bold leading-snug pl-32">
                  <span className="number text-yellow-600 text-7xl font-bold leading-tight block">
                    5
                  </span>
                  Years <br /> Experience <br /> Working
                </div>
              </div>
            </div>
            {/* <div className="absolute right-0 top-0 left-10 bottom-24 border-2 border-yellow-600 z-0" /> */}
            <div className="image-pattern absolute left-0 bottom-0 w-72 h-72 bg-pattern-2 bg-no-repeat" />
          </div>
        </div>

        {/* Content Column second */}
        <div className="content-column w-full md:w-1/2 mb-10">
          <div className="inner-column relative pt-12 pr-24">
            <div className="sec-title mb-10">
              <div className="title text-yellow-600 text-lg font-bold mb-4">
                About Me
              </div>
              <h2 className="text-2xl text-white font-bold">
                Full Stack Developer.
              </h2>
            </div>
            <div className="text text-white text-base leading-8 mb-10">
            I am a dedicated full-stack developer with a strong foundation in both front-end and back-end technologies, including HTML, CSS (Tailwind, Bootstrap), JavaScript, React, Node.js, and Express. My experience spans web development and database management (MongoDB, SQL, MySQL), where I’ve worked on delivering user-centric, optimized solutions. Having interned as a Front-End Developer at Ierix Infotech and a PLC Programmer at Adisoft Pvt. Ltd, I am passionate about continuously expanding my skill set and staying updated with the latest trends to drive impactful projects.
            </div>
            <div className="email text-white font-bold mb-12">
              Request Quote:{" "}
              <span className="text-yellow-600">freequote@gmail.com</span>
            </div>
            {/* <a
              href="about.html"
              className="theme-btn btn-style-three relative inline-block text-black text-base font-bold py-3 px-10 bg-white border-2 border-yellow-600 transition-colors hover:bg-yellow-600 hover:text-white"
            >
              Read More
              <span className="absolute inset-0 -z-10 bg-pattern-1 bg-repeat transform translate-x-2 translate-y-2" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

      </div>
    </div>
  );
};

export default Body;
