import './App.css';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className='text-slate-500 text-2xl text-center p-5'>
        What Our Students Say
      </main>
      <section className='font-suse text-9xl text-center font-bold pt-3'>
        Hear From Our Thriving 
      </section>
      <section className='font-suse text-9xl text-center font-bold p-5'>
        Tennis Community
      </section>
      <Testimonials/>

    </div>
  );
}

export default App;
