// import Navbar from './Navbar';
// import Testimonials2 from './Testimonials2';
// function Page2() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <main className='text-slate-500 text-2xl text-center p-5'>
//         Elevate your Game 
//       </main>
//       <section className='font-suse text-9xl text-center font-bold pt-3'>
//         Comprehensive Tennis Training For EveryOne        
//       </section>
      
//       <Testimonials2/>
//     </div>
//   );
// }

// export default Page2;
import Navbar from './Navbar';
import Testimonials2 from './Testimonials2';

function Page2() {
  return (
    <div className="App">
      {/* Make the Navbar sticky/fixed to the top */}
      <Navbar className="sticky top-0 left-0 w-full z-50" />

      {/* Main content with padding to account for the fixed navbar */}
      <main className="text-slate-500 text-xl sm:text-2xl md:text-3xl text-center p-5 pt-24">
        Elevate your Game
      </main>

      {/* Heading section */}
      <section className="font-suse text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-bold pt-3">
        Comprehensive Tennis Training For Everyone
        <h2 className="text-4xl font-bold pt-4 text-center mb-10">What Our Clients Say</h2>
      </section>

      {/* Scrollable Testimonials Section */}
      <div className="mt-8 h-50 overflow-y-auto px-4">
        <Testimonials2 />
      </div>
    </div>
  );
}

export default Page2;
