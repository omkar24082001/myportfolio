import React from "react";

const Project = () => {
  return (
    <div>
    <div className="container-fluid contenedor text-center h-full py-20 mt-[-60px]">
      <h1 className="text-center text-yellow-600 text-2xl ">PROJECTS</h1>
      <br />
      <div className="container text-center flex flex-wrap justify-between items-start gap-4">
        {/* Common size for all project divs */}
        {/* Project 1 */}
        <a href="https://omkar24082001.github.io/citiuscloud-services/" target="blank" className="no-underline">
          <div className="container_foto relative bg-[rgba(57,62,93,0.7)] p-0 overflow-hidden w-[250px] h-[250px] m-1 transform transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="ver_mas absolute bg-[#FEB66C] w-full h-[70px] bottom-0 z-10 opacity-0 transform translate-y-[70px] transition-all duration-200 ease-in-out">
              <span className="lnr lnr-eye text-white text-[40px] mx-auto relative top-[13px]"></span>
            </div>
            <article className="text-left p-4 absolute bottom-0 z-20 transition-all duration-500 ease-in-out">
              <h2 className="text-white font-bold text-[20px] border-b border-white">Citiuscloud Services web clone</h2>
              <h4 className="font-light text-white text-[14px]">Empowering businesses with cutting-edge cloud solutions..</h4>
            </article>
            <img
              src="https://img.freepik.com/premium-photo/business-professional-interacts-with-futuristic-cloud-computing-interface-conceptual-tech-imagery-with-modern-sleek-style-suitable-digital-technology-themes-ai_372197-27208.jpg"
              alt="Citiuscloud Services"
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </a>
  
        {/* Project 2 */}
        <a href="https://omkar24082001.github.io/Amazon.com-clone/" target="blank" className="no-underline">
          <div className="container_foto relative bg-[rgba(57,62,93,0.7)] p-0 overflow-hidden w-[250px] h-[250px] m-1 transform transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="ver_mas absolute bg-[#FEB66C] w-full h-[70px] bottom-0 z-10 opacity-0 transform translate-y-[70px] transition-all duration-200 ease-in-out">
              <span className="lnr lnr-eye text-white text-[40px] mx-auto relative top-[13px]"></span>
            </div>
            <article className="text-left p-4 absolute bottom-0 z-20 transition-all duration-500 ease-in-out">
              <h2 className="text-white font-bold text-[20px] border-b border-white">Amazon-clone</h2>
              <h4 className="font-light text-white text-[14px]">A powerful e-commerce experience, reimagined.</h4>
            </article>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.w0ZHuLsu6GKXk0i3Te011gHaE7&pid=Api&P=0&h=180"
              alt="Amazon Clone"
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </a>
  
        {/* Project 3 */}
        <a href="https://omkar24082001.github.io/signature_app/" target="blank" className="no-underline">
          <div className="container_foto relative bg-[rgba(57,62,93,0.7)] p-0 overflow-hidden w-[250px] h-[250px] m-1 transform transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="ver_mas absolute bg-[#FEB66C] w-full h-[70px] bottom-0 z-10 opacity-0 transform translate-y-[70px] transition-all duration-200 ease-in-out">
              <span className="lnr lnr-eye text-white text-[40px] mx-auto relative top-[13px]"></span>
            </div>
            <article className="text-left p-4 absolute bottom-0 z-20 transition-all duration-500 ease-in-out">
              <h2 className="text-white font-bold text-[20px] border-b border-white">Digital Signature App</h2>
              <h4 className="font-light text-white text-[14px]">Sign documents digitally, effortlessly</h4>
            </article>
            <img
              src="https://www.convergine.com/wp-content/uploads/2019/12/digital_signature1.jpg"
              alt="Digital Signature App"
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </a>
  
        {/* Project 4 */}
        <a href="https://omkar24082001.github.io/blog-page-bootstrap/" target="blank" className="no-underline">
          <div className="container_foto relative bg-[rgba(57,62,93,0.7)] p-0 overflow-hidden w-[250px] h-[250px] m-1 transform transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="ver_mas absolute bg-[#FEB66C] w-full h-[70px] bottom-0 z-10 opacity-0 transform translate-y-[70px] transition-all duration-200 ease-in-out">
              <span className="lnr lnr-eye text-white text-[40px] mx-auto relative top-[13px]"></span>
            </div>
            <article className="text-left p-4 absolute bottom-0 z-20 transition-all duration-500 ease-in-out">
              <h2 className="text-white font-bold text-[20px] border-b border-white">Apple Blog Page</h2>
              <h4 className="font-light text-white text-[14px]">A sleek, modern blog page designed with a focus on the tech industry</h4>
            </article>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.Sv0-d9NOSVQfmj83Jl0CKgHaE9&pid=Api&P=0&h=180"
              alt="Apple Blog Page"
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
  
  

  );
};

export default Project;
