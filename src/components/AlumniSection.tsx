
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface AlumniMember {
  id: number;
  name: string;
  graduation: string;
  image: string;
  achievement: string;
  testimonial: string;
}

interface AlumniSectionProps {
  alumni: AlumniMember[];
}

const AlumniSection: React.FC<AlumniSectionProps> = ({ alumni }) => {
  return (
    <section id="alumni" className="bg-school-accent">
      <div className="section-container">
        <h2 className="section-title">Our Alumni</h2>
        <p className="section-subtitle">
          Our graduates have gone on to achieve remarkable success in various fields, carrying forward the values and knowledge gained at Excellence School.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumni.map((alum, index) => (
            <Card key={alum.id} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={alum.image} 
                  alt={alum.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-school-primary">{alum.name}</h3>
                <p className="text-school-secondary font-medium mb-2">{alum.graduation}</p>
                <p className="font-bold mb-3">{alum.achievement}</p>
                <p className="text-muted-foreground italic">{alum.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
