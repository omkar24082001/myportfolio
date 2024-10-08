import React from 'react'

const Resume = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 p-6 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-yellow-600">My Resume</h1>
        
        {/* Embed PDF in an iframe, full view */}
        <div className="bg-gray-900 shadow-md rounded-lg w-full md:w-3/4 lg:w-1/2">
          <iframe
            src="public\assets\OMKAR_RAWOOL_MERN_DEV (4).pdf"
            title="Omkar Rawool Resume"
            className="w-full h-screen border rounded-md"
          ></iframe>
  
          <div className="mt-6 flex justify-center">
            <a
              href="public\assets\OMKAR_RAWOOL_MERN_DEV (4).pdf"
              download="public\assets\OMKAR_RAWOOL_MERN_DEV (4).pdf"
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
