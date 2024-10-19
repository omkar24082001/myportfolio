import React from "react";

const Skill = () => {
  return (
    <div id="skills">
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="title text-yellow-600 text-4xl font-bold mb-4">
        My Skills Sets
      </div>
    </div>
  
    {/* Responsive layout using flexbox */}
    <div className="z-0 w-full flex justify-around flex-wrap gap-6 mt-[-50px]">
      {[
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448385/logo-2582748_1280_xfyiwk.webp",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448382/logo-2582747_1280_kaicm9.webp",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448381/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y_ht1gkf.png",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448381/115166732_blzo7h.jpg",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448381/bootstrap-logo_oohdr8.png",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448381/th_c21djj.jpg",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448381/react.js-img_dqrcv3.png",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448382/image00_a3ckau.png",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448380/express-js_i8tinm.png",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448386/Mongodb-PNG-Picture_akbkvx.png",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448381/com037-scaled_y0viwh.jpg",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448381/mysql-logo-transparent-11660514439mzkqg8ixwn_vwlefx.png",
        "https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728448380/github-circle_1_omqfam.svg",
      ].map((imgSrc, index) => (
        <div
          key={index}
          className="m-4 mx-auto w-[140px] h-[140px] rounded-[50%] shadow-[5px_5px_30px_7px_rgba(0,0,0,0.25),_-5px_-5px_30px_7px_rgba(0,0,0,0.22)] cursor-pointer transition-transform duration-400 hover:scale-90 hover:shadow-[5px_5px_30px_15px_rgba(0,0,0,0.25),_-5px_-5px_30px_15px_rgba(0,0,0,0.22)]">
          <div className="w-full h-full rounded-[50%] overflow-hidden">
            <img
              src={imgSrc}
              alt={`Card ${index + 1}`}
              className="w-full h-full object-cover rounded-[40px]"
            />
          </div>
          <div className="text-center rounded-b-[40px] font-sans font-bold text-[30px] mt-[-80px] h-[40px]"></div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Skill;
