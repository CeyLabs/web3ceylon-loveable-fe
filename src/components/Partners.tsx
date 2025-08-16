
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface PartnersProps {
  className?: string;
}

const Partners: React.FC<PartnersProps> = ({ className }) => {
  const partners = [
    {
      name: "Bybit",
      type: "Headline Partner",
      description: "Leading global cryptocurrency exchange",
      logo: "🟡"
    },
    {
      name: "Ceylon Cash",
      type: "Organizing Partner",
      description: "Sri Lanka's premier Web3 payment platform",
      logo: "💳"
    },
    {
      name: "University of Colombo",
      type: "Academic Partner",
      description: "Premier academic institution for blockchain research",
      logo: "🎓"
    },
    {
      name: "Trace Network",
      type: "Technology Partner",
      description: "Blockchain infrastructure and development",
      logo: "🔗"
    },
    {
      name: "Tech Startups Lanka",
      type: "Community Partner",
      description: "Sri Lanka's largest startup community",
      logo: "🚀"
    },
    {
      name: "Digital Artists Collective",
      type: "Creative Partner",
      description: "Supporting Sri Lankan digital creators",
      logo: "🎨"
    }
  ];

  return (
    <section id="partners" className={cn('py-20 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Powered by Collaboration</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-center text-muted-foreground mb-8">
              Web3Ceylon is made possible through partnerships with leading organizations, educational institutions, and community groups across Sri Lanka.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {partners.map((partner, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="text-xl font-serif font-medium mb-2">{partner.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{partner.type}</p>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={400}>
          <div className="text-center">
            <a 
              href="mailto:partnerships@web3ceylon.com" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Become a Partner
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Partners;
