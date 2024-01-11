import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Edtree from './components/edtree/Edtree';

import Topbar from './components/topbar/Topbar';
import { Analytics } from '@vercel/analytics/react';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Edtree />
      <Experience />

      
      <Contact />
      <Footer />
      <Analytics/>
    </>
  )
}

export default App
