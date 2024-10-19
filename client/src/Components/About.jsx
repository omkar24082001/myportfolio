import React from "react";

const About = () => {
  return (
  
  <div className="space-y-0">
    <div>
      <section className="about-section relative py-16 md:py-24 lg:py-32 mt-0 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap" id="about">
            {/* Image Column first */}
            <div className="image-column w-full md:w-1/2 mb-12 md:mb-0 relative">
              <div className="inner-column relative p-5 md:p-10">
                <div className="image relative">
                  <img
                    src="https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728445430/my-pic-2_bk7qsr.png"
                    alt=""
                    className="w-10/12 md:w-8/12 h-auto block mx-auto"
                  />
                  <div className="overlay-box absolute left-10 bottom-12">
                    {/* Overlay content can go here */}
                  </div>
                </div>
                <div className="image-pattern absolute left-0 bottom-0 w-36 md:w-72 h-36 md:h-72 bg-pattern-2 bg-no-repeat" />
              </div>
            </div>

            {/* Content Column second */}
            <div className="content-column w-full md:w-1/2 mb-10">
              <div className="inner-column relative pt-8 md:pt-12 lg:pt-16 pr-4 md:pr-12 lg:pr-24">
                <div className="sec-title mb-6 md:mb-10">
                  <div className="text-3xl md:text-4xl font-bold mb-4 text-yellow-600">
                    About Me
                  </div>
                  <br />
                  <h2 className="text-xl md:text-2xl text-white font-bold mt-[-10px] md:mt-[-20px] lg:mt-[-30px]">
                    Full Stack Developer.
                  </h2>
                </div>
                <div className="text text-white text-base leading-7 md:leading-8 mb-6 md:mb-10">
                  I am a dedicated full-stack developer with a strong foundation
                  in both front-end and back-end technologies, including HTML,
                  CSS (Tailwind, Bootstrap), JavaScript, React, Node.js, and
                  Express. My experience spans web development and database
                  management (MongoDB, SQL, MySQL), where I’ve worked on
                  delivering user-centric, optimized solutions. Having interned
                  as a Front-End Developer at Ierix Infotech and a PLC Programmer
                  at Adisoft Pvt. Ltd, I am passionate about continuously
                  expanding my skill set and staying updated with the latest
                  trends to drive impactful projects.
                </div>
                <div className="email text-white font-bold mb-6 md:mb-12">
                  Request Quote:{" "}
                  <span className="text-yellow-600">
                    rawoolomkkar861@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>


  );
};

export default About;
