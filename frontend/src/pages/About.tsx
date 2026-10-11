import React from 'react';
import OceanBackground from '@/components/OceanBackground';
import PageTransition from '@/components/PageTransition';
import { cn } from '@/lib/utils';

const About = () => {
  const teamMembers = [
    { name: "P. Abhinay", role: "Member" },
    { name: "V. Mahitha", role: "Member" },
    { name: "Manjyot Kaur", role: "Member" }
  ];

  return (
    <>
      <OceanBackground />
      <PageTransition>
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 animate-fade-down">
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-gradient">About the Project</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Helping to detect underwater plastic pollution using computer vision
              </p>
            </div>
            
            <div className={cn(
              "glass-card rounded-2xl p-8 mb-10 animate-fade-up",
              "border border-border/50"
            )}>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gradient">Our Mission</h2>
                <p className="text-muted-foreground">
                  Underwater plastic pollution is a growing environmental concern affecting marine 
                  ecosystems worldwide. Our project aims to provide a tool for researchers, 
                  environmental agencies, and citizen scientists to detect and monitor plastic waste 
                  in underwater environments.
                </p>
                <p className="text-muted-foreground">
                  Using advanced computer vision technology and the YOLOv8 object detection model, 
                  our application can identify various types of plastic debris in underwater images, 
                  helping to track pollution hotspots and support cleanup efforts.
                </p>
                
                <div className="pt-4">
                  <h3 className="text-xl font-medium mb-3">Technology</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["React", "TailwindCSS", "YOLOv8", "Python Flask","Vite","TensorFlow","Leaflet.js","TypeScript"].map((tech, index) => (
                      <div 
                        key={index} 
                        className="glass-button px-4 py-2 rounded-lg text-center text-sm"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10 animate-fade-up animate-delay-200">
              <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "glass-card rounded-xl p-6 text-center",
                      "transition-all duration-300 hover:translate-y-[-5px]"
                    )}
                    style={{ animationDelay: `${200 + (index * 100)}ms` }}
                  >
                    <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default About;
