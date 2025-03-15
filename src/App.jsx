import React, { useState } from 'react'
import Navbar from './Ui/Navbar'
import MobileMenu from './Ui/MobileMenu';
import LoadingScreen from './Ui/LoadingScreen';
import Home from './Sections/Home';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';

function App() {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={()=>setIsLoading(true)}/>}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App