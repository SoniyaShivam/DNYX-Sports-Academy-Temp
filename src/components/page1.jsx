import React from 'react';
import Navbar from './Navbar';
import Testimonials from './Testimonials';


function Page1() {
    
  

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
        {/* <button 
          
          className='flex text-white justify-center h-[50px] w-[100px] items-center rounded-lg bg-blue-950'
        >
            
          <Link to='/page2'>Click</Link>
        </button> */}
      </center>
    </div>
  );
}

export default Page1;
