
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactData {
  address: string;
  phone: {
    main: string;
    admissions: string;
  };
  email: {
    info: string;
    admissions: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  mapEmbedUrl: string;
}

interface ContactSectionProps {
  data: ContactData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
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
                  <p className="text-muted-foreground">{data.address}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 flex items-start space-x-4">
                <Phone className="text-school-primary" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">Main Office: {data.phone.main}</p>
                  <p className="text-muted-foreground">Admissions: {data.phone.admissions}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 flex items-start space-x-4">
                <Mail className="text-school-primary" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">{data.email.info}</p>
                  <p className="text-muted-foreground">{data.email.admissions}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 flex items-start space-x-4">
                <Clock className="text-school-primary" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                  <p className="text-muted-foreground">{data.hours.weekdays}</p>
                  <p className="text-muted-foreground">{data.hours.saturday}</p>
                  <p className="text-muted-foreground">{data.hours.sunday}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe 
                src={data.mapEmbedUrl} 
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
