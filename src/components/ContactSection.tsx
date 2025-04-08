
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-school-light">
      <div className="section-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          We're here to help! Reach out to us with any questions or concerns.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="animate-fade-in">
              <CardContent className="p-6 flex items-start space-x-4">
                <MapPin className="text-school-primary" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">123 Education Lane, Academic District,<br />Knowledge City, 56789</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 flex items-start space-x-4">
                <Phone className="text-school-primary" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">Main Office: (123) 456-7890</p>
                  <p className="text-muted-foreground">Admissions: (123) 456-7891</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 flex items-start space-x-4">
                <Mail className="text-school-primary" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@excellenceschool.edu</p>
                  <p className="text-muted-foreground">admissions@excellenceschool.edu</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 flex items-start space-x-4">
                <Clock className="text-school-primary" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 4:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 12:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253651862!2d144.95372915905873!3d-37.817327679751104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1635201076117!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen 
                loading="lazy" 
                title="School location map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
