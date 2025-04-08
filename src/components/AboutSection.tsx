
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="bg-school-light">
      <div className="section-container">
        <h2 className="section-title">About Our School</h2>
        <p className="section-subtitle">
          Excellence School has been a pillar of educational excellence since 1985, providing quality education and shaping future leaders.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg">
              Excellence School is committed to providing a nurturing and stimulating environment where students can develop academically, socially, and personally. Our holistic approach to education ensures that students not only excel in academics but also develop essential life skills.
            </p>
            <p className="text-lg">
              With state-of-the-art facilities, dedicated teachers, and a curriculum that balances traditional learning with modern pedagogical practices, we prepare our students to become responsible global citizens ready to face the challenges of tomorrow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-school-primary mb-2">35+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-school-primary mb-2">50+</div>
                <p className="text-muted-foreground">Expert Educators</p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-school-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Happy Students</p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-school-primary mb-2">95%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
