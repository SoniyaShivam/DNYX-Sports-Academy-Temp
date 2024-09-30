import React from "react";
import gym from "./BackGrnd.jpg"
import Navbar from './Navbar';

const GymAcademy = () => {
  return (
    <main>    <Navbar/>
      <div className="max-w-5xl mx-auto p-4">
        <section className="relative bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="relative">
            <img
              src={gym}
              alt="Gym"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute top-10 left-10 text-white">
              <h1 className="text-4xl font-bold">Your Gym Journey Awaits</h1>
              <p className="text-lg mt-4">Rise to the top with Ace Gym Academy</p>
              <div className="mt-6">
                <button className="bg-white text-black px-6 py-3 rounded-full mr-4">
                  Get in Touch
                </button>
                <button className="bg-white bg-opacity-10 border border-white text-white px-6 py-3 rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="absolute top-20 right-10 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Mondays</h3>
              <p className="text-gray-600">Beginners</p>
              <p className="text-gray-600">
                <span className="font-bold">12:00 AM</span> - <span className="font-bold">2:00 AM</span>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Thursdays</h3>
              <p className="text-gray-600">Advanced</p>
              <p className="text-gray-600">
                <span className="font-bold">1:00 AM</span> - <span className="font-bold">3:00 AM</span>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600">
          <p>© 2024 Ace Gym Academy. All Rights Reserved.</p>
        </footer>
      </div></main>
  );
};

export default GymAcademy;
