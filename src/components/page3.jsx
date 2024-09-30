import React, { useState } from "react";
import gym from "./BackGrnd.jpg";
import Navbar from './Navbar';

const Page3 = () => {
  const [showContact, setShowContact] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleContact = () => {
    setShowContact(prev => !prev);
    setShowMoreInfo(false);
  };

  const toggleMoreInfo = () => {
    setShowMoreInfo(prev => !prev);
    setShowContact(false);
  };

  return (
    <main className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${gym})` }}>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative flex flex-col justify-center items-center h-screen text-center text-white z-20">
        <h1 className="font-bold text-9xl">Your Gym Journey Awaits</h1>
        <p className="mt-4 text-5xl">Rise to the top with Ace Gym Academy</p>
        
        <div className="mt-28">
          <button 
            onClick={toggleContact}
            className="bg-white text-black px-6 py-3 rounded-full mr-4 text-3xl hover:bg-gray-200 transition ease-in-out"
          >
            Get in Touch
          </button>
          <button 
            onClick={toggleMoreInfo}
            className="bg-white bg-opacity-10 border border-white text-3xl text-white px-6 py-3 rounded-full hover:bg-opacity-20 transition ease-in-out"
          >
            Read More
          </button>
        </div>

        {/* Template for "Get in Touch" */}
        {showContact && (
          <div className="mt-10 bg-opacity-80 rounded-lg p-8 shadow-lg text-white py-10 px-5 z-20">
            <h2 className="text-4xl font-bold"></h2>
            <p className="mt-4 text-4xl">If you have any questions, feel free to reach out!</p>
            <p className="mt-4 text-4xl">Email: info@acegymacademy.com</p>
            <p className="mt-4 text-4xl">Phone: (123) 456-7890</p>
          </div>
        )}

        {/* Template for "Read More" */}
        {showMoreInfo && (
          <div className="mt-10  bg-opacity-80 rounded-lg p-8 shadow-lg text-white py-10 px-5 z-20">
            <h2 className="text-4xl font-bold"></h2>
            <p className="mt-4 text-4xl">At Ace Gym Academy, we help you achieve your fitness goals with expert coaching and personalized training plans.</p>
          </div>
        )}
      </div>

      <footer className="absolute bottom-4 left-0 right-0 text-center text-gray-300 z-30">
        <p>© 2024 Ace Gym Academy. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default Page3;
