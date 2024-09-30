import React from 'react';
import TestimonialCard2 from './TestimonalCard2';
import trainer3 from './trainer3.jpg';
import trainer4 from './trainer4.jpg';
import trainer5 from './trainer5.jpg';
import trainer1 from './trainer1.jpg'

// Map for trainer images
const imageMap = {
  trainer1: trainer1,
  trainer3: trainer3,
  trainer4: trainer4,
  trainer5: trainer5,
};

const testimonials = [
    {
        age: '5-12 Years',
        tag: 'For kids',
        title: 'Junior Programs',
        description: 'For kids aged 5-12. Focus on fundamentals and fun.',
        img: 'trainer1',
      },
      {
        age: '13-18 Years',
        tag: 'For teens',
        title: 'Youth Programs',
        description: 'For teens aged 13-18. Advanced techniques and competitive play.',
        img: 'trainer3',
      },
      {
        age: '18-45 Years',
        tag: 'All levels',
        title: 'Adult Programs',
        description: 'For players of all levels. From beginner to advanced.',
        img: 'trainer4',
      },
      {
        age: '14-45 Years',
        tag: 'Private lessons',
        title: 'Private Lessons',
        description: 'Coaching tailored to your needs.',
        img: 'trainer5',
      },
];

function Testimonials2() {
  return (
    <div className=" mx-auto py-12 px-[300px]">
      <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="grid grid-cols-4 h-[700px] w-[2500px] gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard2 key={index} 
          testimonial={testimonial}  // Passing the individual testimonial object
          image={imageMap[testimonial.img]} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials2;