import React from "react";
import trn1 from "./trainer1.jpg";
import trn2 from "./trainer2.jpg";
import trn3 from "./trainer3.jpg";
import trn4 from "./trainer4.jpg";
import trn5 from "./trainer5.jpg";

import Navbar from './Navbar'; // Assuming Navbar component is already defined

const CoachCard = ({ sport, name, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 text-center max-w-sm">
      {/* Card header with sport */}
      <div className="bg-green-100 text-green-600 font-semibold text-lg p-2 rounded-md mb-4">
        {sport}
      </div>

      {/* Coach image */}
      <img
        src={image} // Use the image prop here
        alt={name} // Alt text should be the coach's name
        className="w-full h-64 object-cover rounded-lg mb-4" // Set the image styles
      />

      {/* Coach name */}
      <h3 className="text-xl font-bold mb-2">{name}</h3>

      {/* Coach description */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const GymAcademy = () => {
  const coaches = [
    {
      sport: "Head Coach",
      name: "John Morgan",
      description:
        "Experienced in leading training sessions and developing athletes' skills.",
      image: trn1, // Use the imported image for John Morgan
    },
    {
      sport: "Trainee",
      name: "Ellie Anderson",
      description:
        "A dedicated trainee focused on improving fitness and technique.",
      image: trn2, // Use the imported image for Ellie Anderson
    },
    {
      sport: "Trainee",
      name: "Nia Adebayo",
      description:
        "Energetic trainee with a passion for basketball and teamwork.",
      image: trn3, // Use the imported image for Nia Adebayo
    },
    {
      sport: "Trainee",
      name: "Mia Williams",
      description:
        "Talented trainee specializing in badminton techniques and skills.",
      image: trn4, // Use the imported image for Mia Williams
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Section background with a different color */}
      <section className="mt-12 bg-gray-200 py-10 ml-10 mr-10">
        <h2 className="text-4xl font-bold text-center mb-10">Our Trainees</h2>
        <div className="grid ml-10 mr-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <CoachCard
              key={index}
              sport={coach.sport}
              name={coach.name}
              description={coach.description}
              image={coach.image} // Pass the image prop
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600">
        <p>© 2024 Ace Gym Academy. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default GymAcademy;
