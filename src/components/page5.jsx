import React from "react";
import contact_back from "./contact_bg.jpg"; // Ensure the correct path to the image
import Navbar from "./Navbar";

const Page5 = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${contact_back})`,
      }}
    >
      <div className="relative z-10">
        <Navbar />
      </div>
      {/* Dark overlay to enhance readability of text */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-white p-8 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Us Left Section */}
          <div className="space-y-20">
            <h2 className="text-6xl font-bold">Contact Us</h2> {/* Increased font size */}
            <p className="text-3xl"> {/* Increased paragraph text size */}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-2xl"> {/* Increased text size */}
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <button className="mt-4 bg-transparent border border-white py-3 px-8 text-2xl text-white font-semibold hover:bg-white hover:text-black transition">
              LEARN MORE
            </button>
            <p className="text-md mt-2">Images from Freepik</p>
          </div>

          {/* Contact Form Right Section */}
          <div className="h-full w-full  rounded-md bg-clip-padding bg-opacity-30 border border-gray-100 p-12 shadow-lg text-gray-900 space-y-8"> {/* Increased padding */}
            <div className="flex space-x-6">
              <div className="w-1/2">
                <label className="block text-white mb-2 text-2xl ">Email</label> {/* Increased label text size */}
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-xl" 
                />
              </div>
              <div className="w-1/2">
                <label className="block text-white mb-2 text-2xl ">Name</label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-xl"
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2 text-2xl ">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-xl"
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-2xl ">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-xl"
                rows="6"
              ></textarea> {/* Increased textarea height */}
            </div>

            <button className="w-full bg-black text-white py-4 rounded-lg text-2xl hover:bg-gray-800 transition">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
