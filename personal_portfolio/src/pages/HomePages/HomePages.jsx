import React from 'react'
import { Fragment } from 'react';
import Banner from '../../Components/Banner/Banner'
import Sidebar from '../../Components/Sidebar/Sidebar';
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

const HomePages = () => {
  return (
    <Fragment>
      <Sidebar/>
      <Banner/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default HomePages