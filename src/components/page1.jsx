import React from 'react';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import { useNavigate } from 'react-router-dom';

function Page1() {
    const navigate = useNavigate(); // Using useNavigate from React Router

    const navigateToPage2 = () => {
      navigate('/page2'); // Navigate to Page 2 using React Router
    };
  

  return (
    <div className="App">
      <Navbar />
      <main className='text-slate-500 text-2xl text-center p-5'>
        What Our Students Say
      </main>
      <section className='font-suse text-9xl text-center font-bold pt-3'>
        Hear From Our Thriving 
      </section>
      <section className='font-suse text-9xl text-center font-bold p-5'>
        Tennis Community
      </section>
      <Testimonials />
      <center className='pb-5'>
        <button 
          onClick={navigateToPage2} 
          className='flex text-white justify-center h-[50px] w-[100px] items-center rounded-lg bg-blue-950'
        >
          Click
        </button>
      </center>
    </div>
  );
}

export default Page1;
