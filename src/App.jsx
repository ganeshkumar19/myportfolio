import React from 'react'
import NavbarComponent from './components/navbar/NavbarComponent'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Works from './components/works/Works'
import ContactUs from './components/contactus/ContactUs'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <NavbarComponent/>
    <Hero/>
    <About/>
    <Services/>
    <Works/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App