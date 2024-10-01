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
      {/* Make the Navbar fixed to the top */}
      <Navbar className="sticky top-0 left-0 w-full z-50" />

      <main className="text-slate-500 text-xl sm:text-2xl md:text-3xl text-center p-5 pt-24">
        {/* Add some top padding to account for the height of the fixed navbar */}
        Elevate your Game
      </main>

      <section className="font-suse text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-bold pt-3">
        Comprehensive Tennis Training For Everyone
      </section>
      <Testimonials2 />
    </div>
  );
}

export default Page2;
