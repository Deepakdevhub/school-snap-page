
import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import AboutSection from '@/components/AboutSection';
import FacultySection from '@/components/FacultySection';
import AlumniSection from '@/components/AlumniSection';
import AdmissionSection from '@/components/AdmissionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&h=500",
      alt: "Excellence School Campus"
    },
    {
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&h=500",
      alt: "Students in Classroom"
    },
    {
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&h=500",
      alt: "School Library"
    },
    {
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&h=500",
      alt: "Sports Facilities"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <section id="home">
          <Carousel images={carouselImages} interval={5000} />
        </section>
        
        <AboutSection />
        <FacultySection />
        <AlumniSection />
        <AdmissionSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
