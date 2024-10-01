// import React from "react";
// import trn1 from "./trainer1.jpg";
// import trn2 from "./trainer2.jpg";
// import trn3 from "./trainer3.jpg";
// import trn4 from "./trainer4.jpg";

// import Navbar from './Navbar';

// const CoachCard = ({ sport, name, description, image }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center transition-transform transform hover:scale-105">
//       <div className="bg-green-100 text-green-600 font-semibold text-lg p-2 rounded-md mb-4">
//         {sport}
//       </div>
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-50 object-cover rounded-lg mb-4"
//       />
//       <h3 className="text-xl font-bold mb-2">{name}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// const Page4 = () => {
//   const coaches = [
//     {
//       sport: "Head Coach",
//       name: "John Morgan",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis, optio aut omnis corrupti voluptatum eos at hic, assumenda temporibus dignissimos! Neque, est et. Magnam voluptatum modi mollitia. Facere, aspernatur.",
//       image: trn1,
//     },
//     {
//       sport: "Trainee",
//       name: "Ellie Anderson",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis, optio aut omnis corrupti voluptatum eos at hic, assumenda temporibus dignissimos! Neque, est et. Magnam voluptatum modi mollitia. Facere, aspernatur.",
//       image: trn2,
//     },
//     {
//       sport: "Trainee",
//       name: "Nia Adebayo",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis, optio aut omnis corrupti voluptatum eos at hic, assumenda temporibus dignissimos! Neque, est et. Magnam voluptatum modi mollitia. Facere, aspernatur.",
//       image: trn3,
//     },
//     {
//       sport: "Trainee",
//       name: "Mia Williams",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis, optio aut omnis corrupti voluptatum eos at hic, assumenda temporibus dignissimos! Neque, est et. Magnam voluptatum modi mollitia. Facere, aspernatur.",
//       image: trn4,
//     },
//   ];

//   return (
//     <main>
//       <Navbar />
//       <section className="mt-12 bg-gray-200 py-10 px-5">
//         <h2 className="text-4xl font-bold text-center mb-10">Our Coaches</h2>
//         <div className="grid grid-cols-4 h-[900px] text-3xl gap-8">
//           {coaches.map((coach, index) => (
//             <CoachCard
//               key={index}
//               sport={coach.sport}
//               name={coach.name}
//               description={coach.description}
//               image={coach.image}
//             />
//           ))}
//         </div>
//       </section>

//       <footer className="mt-12 text-center text-gray-600">
//         <p>© 2024 Ace Gym Academy. All Rights Reserved.</p>
//       </footer>
//     </main>
//   );
// };

// export default Page4;
import React from "react";
import trn1 from "./trainer1.jpg";
import trn2 from "./trainer2.jpg";
import trn3 from "./trainer3.jpg";
import trn4 from "./trainer4.jpg";

import Navbar from './Navbar';

const CoachCard = ({ sport, name, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center transition-transform transform hover:scale-105">
      <div className="bg-green-100 text-green-600 font-semibold text-lg p-2 rounded-md mb-4">
        {sport}
      </div>
      <img
        src={image}
        alt={name}
        className="w-full h-40 md:h-50 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm md:text-base">
        {description.length > 150 ? description.substring(0, 150) + "..." : description}
      </p>
    </div>
  );
};

const Page4 = () => {
  const coaches = [
    {
      sport: "Head Coach",
      name: "John Morgan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis, optio aut omnis corrupti voluptatum eos at hic, assumenda temporibus dignissimos! Neque, est et. Magnam voluptatum modi mollitia. Facere, aspernatur.",
      image: trn1,
    },
    {
      sport: "Trainee",
      name: "Ellie Anderson",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis, optio aut omnis corrupti voluptatum eos at hic, assumenda temporibus dignissimos! Neque, est et. Magnam voluptatum modi mollitia. Facere, aspernatur.",
      image: trn2,
    },
    {
      sport: "Trainee",
      name: "Nia Adebayo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis, optio aut omnis corrupti voluptatum eos at hic, assumenda temporibus dignissimos! Neque, est et. Magnam voluptatum modi mollitia. Facere, aspernatur.",
      image: trn3,
    },
    {
      sport: "Trainee",
      name: "Mia Williams",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis, optio aut omnis corrupti voluptatum eos at hic, assumenda temporibus dignissimos! Neque, est et. Magnam voluptatum modi mollitia. Facere, aspernatur.",
      image: trn4,
    },
  ];

  return (
    <main>
      <Navbar />
      <section className="mt-12 bg-gray-200 py-10 px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Our Coaches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <CoachCard
              key={index}
              sport={coach.sport}
              name={coach.name}
              description={coach.description}
              image={coach.image}
            />
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-gray-600">
        <p>© 2024 Ace Gym Academy. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default Page4;
