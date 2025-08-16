
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Cities from '@/components/Cities';
import Speakers from '@/components/Speakers';
import Partners from '@/components/Partners';
import Registration from '@/components/Community';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          // Cleanup
        });
      });
    };
  }, []);
  
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Intro />
      <Cities />
      <Speakers />
      <Partners />
      <About />
      <Registration />
      <Footer />
    </main>
  );
};

export default Index;
