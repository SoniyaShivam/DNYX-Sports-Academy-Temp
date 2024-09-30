import Navbar from './Navbar';
import Testimonials2 from './Testimonials2';
function Page2() {
  return (
    <div className="App">
      <Navbar/>
      <main className='text-slate-500 text-2xl text-center p-5'>
        Elevate your Game 
      </main>
      <section className='font-suse text-9xl text-center font-bold pt-3'>
        Comprehensive Tennis Training For EveryOne        
      </section>
      
      <Testimonials2/>
    </div>
  );
}

export default Page2;
