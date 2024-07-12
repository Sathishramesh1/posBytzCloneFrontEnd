import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import DemoPage from './components/DemoPage';
import Integrations from './components/Integrations';
import CustomerTestimonials from './components/CustomerTestimonials';
import ErpAdversiting from './components/ErpAdversiting';
import FaqPage from './components/FaqPage';
import BusinessPage from './components/BusinessPage';
import Adversitement from './components/Adversitement';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
      
      <div className='page_layout'>
       <NavBar/>
       <HeroSection/>
       <Features/>
       <DemoPage/>
       <Integrations/>
       <BusinessPage/>
       <CustomerTestimonials/>
       <ErpAdversiting/>
       <FaqPage/>
       <Adversitement/>
       <Footer/>
        
      </div>
      </>
  )
}

export default App
