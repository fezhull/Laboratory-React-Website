
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
 import Services from './components/Services'
import Testimonial from './components/Testimonial'
// import Pricing from './components/Pricing'
import WorkingStep from './components/WorkingStep'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className='font-primary overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/> 
      <Services/>
      <WorkingStep/>
      {/* <Pricing/> */}
      <Testimonial/>
      <Contact/>
      <Footer/>
  


    </div>
  )
}

export default App
