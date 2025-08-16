
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface IntroProps {
  className?: string;
}

const Intro: React.FC<IntroProps> = ({ className }) => {
  return (
    <section id="intro" className={cn('py-20 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center">About Web3Ceylon</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-center text-gray-700">
              Web3Ceylon is a four-city educational and cultural tour across Sri Lanka. From Colombo's Web3 Dev Fest to Galle's creator showcase and Ella's community retreat, we're bringing developers, entrepreneurs, and visionaries together to shape the future of blockchain.
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🏙️</div>
                <h3 className="font-semibold mb-2">4 Cities</h3>
                <p className="text-sm text-muted-foreground">Colombo, Kandy, Galle, Ella</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-semibold mb-2">Community First</h3>
                <p className="text-sm text-muted-foreground">Developers, creators, entrepreneurs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2">Web3 Future</h3>
                <p className="text-sm text-muted-foreground">Blockchain innovation & education</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Intro;

