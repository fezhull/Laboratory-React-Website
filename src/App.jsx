import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-primary overflow-hidden'>
      <Navbar />
      <Hero id="home" />
      <About id="about" />
      <Services id="services" />
      <Testimonial id="testimonial" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
