import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('relative min-h-screen flex items-center overflow-hidden', className)}>
      <div className="absolute inset-0 -z-10">
        <img 
          src="/lovable-uploads/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png" 
          alt="Orangery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-tight mb-6">
              Web3Ceylon 2025
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-6 font-medium">
              Sri Lanka's Largest Web3 Developer & Community Tour
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-lg md:text-xl text-white/90 mb-4">
              Powered by Ceylon Cash × Bybit
            </p>
            <div className="mt-8">
              <a 
                href="#register" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                👉 Apply for Whitelist
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
