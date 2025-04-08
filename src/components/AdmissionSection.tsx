
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const AdmissionSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentName: '',
    grade: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Enquiry Submitted!",
        description: "Thank you for your interest. We will contact you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        studentName: '',
        grade: '',
        message: ''
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="admission" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Admission Enquiry</h2>
        <p className="section-subtitle">
          Interested in joining Excellence School? Fill out the form below, and our admissions team will get back to you.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-school-primary text-white p-6 rounded-lg shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Excellence School?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Comprehensive curriculum focusing on academic excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>State-of-the-art facilities and modern learning environment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Dedicated and experienced faculty members</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Emphasis on extracurricular activities and holistic development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Safe and nurturing environment for all students</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-school-accent p-6 rounded-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-school-primary mb-3">Admission Process</h3>
              <ol className="space-y-2 list-decimal pl-4">
                <li>Submit an enquiry form</li>
                <li>Attend an interview and assessment</li>
                <li>Receive offer letter</li>
                <li>Complete registration and fee payment</li>
                <li>Welcome to Excellence School!</li>
              </ol>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Parent Name *</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your contact number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium mb-1">Student Name *</label>
                <Input
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Prospective student's name"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="grade" className="block text-sm font-medium mb-1">Applying for Grade *</label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary"
                required
              >
                <option value="">Select Grade</option>
                <option value="Nursery">Nursery</option>
                <option value="Kindergarten">Kindergarten</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Information</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any specific requirements or questions"
                rows={4}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-school-primary hover:bg-school-primary/90"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
