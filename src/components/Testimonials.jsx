import React from 'react';
import TestimonialCard from './TestimonialCard';
import trainer1 from './trainer1.jpg';
import trainer2 from './trainer2.jpg';

const imageMap = {
  trainer1: trainer1,
  trainer2: trainer2,
};


const testimonials = [
  {
    feedback: "My son's tennis skills improved by 80% in just six months at Ace Tennis Academy. The coaches are truly dedicated to every student's progress!",
    author: "Sarah J.",
    trainer: {
      name: "Michael T.",
      role: "Trainer",
      improvement: "80%",
      img: "trainer1",
    }
  },
  {
    feedback: "Ace Tennis Academy helped boost my daughter's confidence on the court. Her match win rate went up by 60% after just one season!",
    author: "Emily R.",
    trainer: {
      name: "David K.",
      role: "Trainer",
      improvement: "60%",
      img: "trainer2",
    }
  }
];

function Testimonials() {
  return (
    <div className="flex md:flex-col m-10 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} imageMap={imageMap}/>
      ))}
    </div>
  );
}

export default Testimonials;
