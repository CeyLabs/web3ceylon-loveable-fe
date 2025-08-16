import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface FoundersInSearchProps {
  className?: string;
}

const FoundersInSearch: React.FC<FoundersInSearchProps> = ({ className }) => {
  const founderTypes = [
    {
      title: "Illegible Founders",
      description: "Those who reject easy categorization, whether due to unconventional backgrounds, markets, or business models. We specialize in funding what others overlook."
    },
    {
      title: "First-Time Founders with Significant Non-Tech Experience",
      description: "Corporate leaders, operators, and business owners making the leap into startups, bringing unique domain expertise and execution ability."
    },
    {
      title: "Academic Innovators & Researchers",
      description: "Scientists and academics with deep technical knowledge and IP-driven innovations seeking to commercialize their research through entrepreneurship."
    },
    {
      title: "Gender-Diverse Teams",
      description: "Backing women leaders and mixed-gender founding teams who bring fresh perspectives and collaborative approaches to building transformative companies."
    }
  ];

  return (
    <section id="founders" className={cn('py-20 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Founders we back</h2>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {founderTypes.map((type, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="border-0 shadow-sm h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-3 font-serif">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersInSearch;
