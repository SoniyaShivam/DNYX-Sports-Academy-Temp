import React from "react";
import gym from "./BackGrnd.jpg";
import Navbar from './Navbar';

const Page3 = () => {
  return (
    <main className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${gym})` }}>
      {/* Add z-index to Navbar to ensure it stays on top */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Center the content */}
      <div className="relative flex flex-col justify-center items-center h-screen text-center text-white z-20">
        <h1 className="text-4xl font-bold">Your Gym Journey Awaits</h1>
        <p className="text-lg mt-4">Rise to the top with Ace Gym Academy</p>
        
        <div className="mt-6">
          <button className="bg-white text-black px-6 py-3 rounded-full mr-4 hover:bg-gray-200 transition ease-in-out">
            Get in Touch
          </button>
          <button className="bg-white bg-opacity-10 border border-white text-white px-6 py-3 rounded-full hover:bg-opacity-20 transition ease-in-out">
            Read More
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-gray-300 z-30">
        <p>© 2024 Ace Gym Academy. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default Page3;
