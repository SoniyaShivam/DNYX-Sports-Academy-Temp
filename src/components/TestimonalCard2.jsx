import React from 'react';

function TestimonialCard2({ testimonial, image }) {
  const imageUrl = image;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
      <div className="h-50 bg-cover bg-center  relative" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* Age tag */}
        <div className=" bg-opacity-75 p-2 bg-white text-sm font-semibold absolute top-4 left-4 rounded">
          {testimonial.age}
        </div>
        {/* Tag label */}
        <div className=" bg-opacity-75 p-2 bg-white text-sm font-semibold absolute top-4 right-4 rounded">
          {testimonial.tag}
        </div>
      </div>

      <div className="p-6">
        {/* Testimonial title */}
        <h2 className="text-5xl font-bold mb-2">{testimonial.title}</h2>
        {/* Testimonial description */}
        <p className="text-gray-700 text-3xl mb-4">{testimonial.description}</p>
        {/* Read More button */}
        
        <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800">
          Read More
        </button>
      </div>
    </div>
  );
}

export default TestimonialCard2;
