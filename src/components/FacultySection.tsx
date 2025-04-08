
import React from 'react';

const facultyMembers = [
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
];

const FacultySection = () => {
  return (
    <section id="faculty" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Our Faculty</h2>
        <p className="section-subtitle">
          Meet our dedicated team of educators who are committed to nurturing the potential in every student.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyMembers.map((faculty, index) => (
            <div 
              key={faculty.id} 
              className="faculty-card relative overflow-hidden rounded-lg shadow-md animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img 
                src={faculty.image} 
                alt={faculty.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-school-primary">{faculty.name}</h3>
                <p className="text-school-secondary font-medium">{faculty.position}</p>
              </div>
              <div className="faculty-overlay absolute inset-0 bg-school-primary/90 p-6 flex flex-col justify-center opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{faculty.name}</h3>
                <p className="text-white/80 mb-4">{faculty.position}</p>
                <p className="text-white">{faculty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
