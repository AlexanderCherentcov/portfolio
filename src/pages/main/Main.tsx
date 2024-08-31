import React from 'react';
import Header from '@/components/header/Header';
import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function Main() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
