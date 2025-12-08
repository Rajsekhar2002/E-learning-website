import React from 'react'
import Header from './components/Header'    
import Hero from './components/Hero'
import Benefites from './components/Benefites'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import FaqSec from './components/FaqSec'
import Footer from './components/Footer'
const App = () => {
  return <>
  <Header/>
  <main>
    <Hero/>
    <Benefites />
    <Courses />
    <Testimonials />
    <FaqSec />
    <Footer />
  </main>
  </>
}

export default App