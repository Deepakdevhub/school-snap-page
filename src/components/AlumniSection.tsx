
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const alumni = [
  {
    id: 1,
    name: "Alex Rodriguez",
    graduation: "Class of 2010",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
    achievement: "CEO of TechVision Inc.",
    testimonial: "My years at Excellence School formed the foundation of my success. The values of perseverance and innovation that I learned here have guided me throughout my career."
  },
  {
    id: 2,
    name: "Priya Sharma",
    graduation: "Class of 2012",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300",
    achievement: "Award-winning Medical Researcher",
    testimonial: "The rigorous academic environment and supportive teachers at Excellence School inspired my passion for medical research and gave me the confidence to pursue my dreams."
  },
  {
    id: 3,
    name: "James Wilson",
    graduation: "Class of 2015",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
    achievement: "Olympic Gold Medalist",
    testimonial: "The physical education program and the discipline instilled in me at Excellence School played a crucial role in my athletic career. I'll always be grateful for the coaches who believed in me."
  }
];

const AlumniSection = () => {
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
