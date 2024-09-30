import React from 'react';

function TestimonialCard2({ testimonial, image }) {
    
  const imageUrl = image;
  return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="h-50 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="bg-white bg-opacity-75 p-2 text-sm font-semibold absolute top-4 left-4 rounded">
              {testimonial.age}
            </div>
            <div className="bg-white bg-opacity-75 p-2 text-sm font-semibold absolute top-4 right-4 rounded">
              {testimonial.tag}
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{testimonial.title}</h2>
            <p className="text-gray-700 mb-4">{testimonial.description}</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
              Read More
            </button>
          </div>
        </div>
      );
}

export default TestimonialCard2;
