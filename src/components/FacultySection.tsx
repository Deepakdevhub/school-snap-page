
import React from 'react';

interface FacultyMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
}

interface FacultySectionProps {
  faculty: FacultyMember[];
}

const FacultySection: React.FC<FacultySectionProps> = ({ faculty }) => {
  return (
    <section id="faculty" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Our Faculty</h2>
        <p className="section-subtitle">
          Meet our dedicated team of educators who are committed to nurturing the potential in every student.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, index) => (
            <div 
              key={member.id} 
              className="faculty-card relative overflow-hidden rounded-lg shadow-md animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-school-primary">{member.name}</h3>
                <p className="text-school-secondary font-medium">{member.position}</p>
              </div>
              <div className="faculty-overlay absolute inset-0 bg-school-primary/90 p-6 flex flex-col justify-center opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-white/80 mb-4">{member.position}</p>
                <p className="text-white">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
