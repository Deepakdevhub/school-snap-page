
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface AboutSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string[];
    stats: {
      value: string;
      label: string;
    }[];
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section id="about" className="bg-school-light">
      <div className="section-container">
        <h2 className="section-title">{data.title}</h2>
        <p className="section-subtitle">
          {data.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {data.description.map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {data.stats.map((stat, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-school-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
