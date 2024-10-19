import React from 'react'

const Resume = () => {
    return (
      <div id="resume" className="flex flex-col items-center justify-center bg-gray-900 p-6 min-h-screen">
  <h1 className="text-4xl font-bold mb-6 text-yellow-600">My Resume</h1>

  {/* Display image, scaled to fit the container */}
  <div className="bg-gray-900 shadow-md rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
    <img
      src="https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728490040/OMKAR_RAWOOL_MERN_DEV_4_vxlvqi.png"
      alt="Omkar Rawool Resume"
      className="w-full h-auto object-contain rounded-md"
    />

    <div className="mt-6 flex justify-center">
      <a
        href="https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728490040/OMKAR_RAWOOL_MERN_DEV_4_vxlvqi.png"
        download="https://res.cloudinary.com/dpz5uzy8e/image/upload/v1728490040/OMKAR_RAWOOL_MERN_DEV_4_vxlvqi.png"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Download Resume
      </a>
    </div>
  </div>
</div>

    

    
    
      );
}

export default Resume
