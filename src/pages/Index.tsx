
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
  // School data - easily update all content from here
  const schoolData = {
    // Carousel images - replace with your own image URLs
    carouselImages: [
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
    ],
    
    // About section data
    about: {
      title: "About Our School",
      subtitle: "Excellence School has been a pillar of educational excellence since 1985, providing quality education and shaping future leaders.",
      description: [
        "Excellence School is committed to providing a nurturing and stimulating environment where students can develop academically, socially, and personally. Our holistic approach to education ensures that students not only excel in academics but also develop essential life skills.",
        "With state-of-the-art facilities, dedicated teachers, and a curriculum that balances traditional learning with modern pedagogical practices, we prepare our students to become responsible global citizens ready to face the challenges of tomorrow."
      ],
      stats: [
        { value: "35+", label: "Years of Excellence" },
        { value: "50+", label: "Expert Educators" },
        { value: "1000+", label: "Happy Students" },
        { value: "95%", label: "Success Rate" }
      ]
    },
    
    // Faculty section data
    faculty: [
      {
        id: 1,
        name: "Dr. Jennifer Wilson",
        position: "Principal",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300",
        description: "Ph.D. in Education with over 20 years of experience in academic leadership."
      },
      {
        id: 2,
        name: "Prof. Michael Chen",
        position: "Vice Principal",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300",
        description: "Specialist in curriculum development and student engagement strategies."
      },
      {
        id: 3,
        name: "Ms. Sarah Johnson",
        position: "Science Department Head",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&h=300",
        description: "Award-winning educator with expertise in innovative STEM teaching methods."
      },
      {
        id: 4,
        name: "Mr. David Thompson",
        position: "Mathematics Teacher",
        image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=300&h=300",
        description: "Passionate mathematician with a talent for making complex concepts accessible."
      }
    ],
    
    // Alumni section data
    alumni: [
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
    ],
    
    // Contact information
    contact: {
      address: "123 Education Lane, Academic District, Knowledge City, 56789",
      phone: {
        main: "(123) 456-7890",
        admissions: "(123) 456-7891"
      },
      email: {
        info: "info@excellenceschool.edu",
        admissions: "admissions@excellenceschool.edu"
      },
      hours: {
        weekdays: "Monday - Friday: 8:00 AM - 4:00 PM",
        saturday: "Saturday: 9:00 AM - 12:00 PM",
        sunday: "Sunday: Closed"
      },
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253651862!2d144.95372915905873!3d-37.817327679751104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1635201076117!5m2!1sen!2sus"
    },
    
    // Admission benefits and process
    admission: {
      benefits: [
        "Comprehensive curriculum focusing on academic excellence",
        "State-of-the-art facilities and modern learning environment",
        "Dedicated and experienced faculty members",
        "Emphasis on extracurricular activities and holistic development",
        "Safe and nurturing environment for all students"
      ],
      process: [
        "Submit an enquiry form",
        "Attend an interview and assessment",
        "Receive offer letter",
        "Complete registration and fee payment",
        "Welcome to Excellence School!"
      ],
      grades: [
        "Nursery", "Kindergarten", 
        "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", 
        "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10",
        "Grade 11", "Grade 12"
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <section id="home">
          <Carousel images={schoolData.carouselImages} interval={5000} />
        </section>
        
        <AboutSection data={schoolData.about} />
        <FacultySection faculty={schoolData.faculty} />
        <AlumniSection alumni={schoolData.alumni} />
        <AdmissionSection data={schoolData.admission} />
        <ContactSection data={schoolData.contact} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
