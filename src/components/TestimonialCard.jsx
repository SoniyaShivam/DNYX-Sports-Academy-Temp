import React from 'react';

function TestimonialCard({ testimonial, imageMap }) {
  const { feedback, author, trainer } = testimonial;
  const imageUrl = imageMap[trainer.img];

  return (
    <div className="flex justify-center items-center">
    <div className="bg-gray-800 h-full w-[2500px] text-white rounded-3xl shadow-lg flex flex-row items-center ">
      
      {/* Feedback and author section */}
      <div className="flex-1 h-full space-y-52 border-gray-500 p-4">
        <p className="text-gray-300 text-4xl mb-4">{feedback}</p>
        <p className="font-semibold text-4xl text-gray-200">- {author}</p>
      </div>
      
      {/* Trainer details section */}
      <div className="flex-1 text-center h-full space-y-52 border-gray-500 p-15 ">
        <p className="font-semibold text-gray-100 text-2xl">{trainer.name}</p>
        <p className="text-sm text-xl text-gray-400">{trainer.role}</p>
        <p className="text-3xl font-bold text-green-400 mt-2">{trainer.improvement} Improvement</p>
      </div>
      
      {/* Trainer image section */}
      <div className="flex-1">
        <img 
          src={imageUrl} 
          alt={trainer.name} 
          className="w-full h-full object-cover rounded-3xl border-gray-500"
        />
      </div>
    </div>
    </div>
  );
}

export default TestimonialCard;
