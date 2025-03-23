
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Languages, 
  Zap
} from "lucide-react";

const Resume = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 animate-slide-up">
              <div>
                <h1 className="text-4xl font-bold mb-4 neon-text-green">My Resume</h1>
                <p className="text-foreground/70 max-w-2xl">
                  A summary of my experience, education, and skills. Download a copy for your reference.
                </p>
              </div>
              <Button className="mt-4 md:mt-0 flex items-center gap-2 bg-primary hover:bg-primary/90">
                <Download size={16} />
                Download CV
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - Experience and Education */}
              <div className="lg:col-span-2 space-y-10">
                {/* Experience Section */}
                <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <Briefcase className="text-accent" />
                    <h2 className="text-2xl font-bold neon-text-blue">Experience</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Job 1 */}
                    <Card className="glass-effect relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <h3 className="text-xl font-bold">Senior Web Developer</h3>
                          <span className="inline-flex items-center px-3 py-1 mt-2 md:mt-0 rounded-full text-xs font-medium bg-accent/10 text-accent">
                            2021 - Present
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 mb-4">TechForward Inc. • San Francisco, CA</p>
                        <p className="text-foreground/80">
                          Lead the development of web applications for enterprise clients, managing a team of 5 developers. Implemented modern technologies and best practices to improve performance and user experience.
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span className="text-sm">Led the redesign of a major e-commerce platform that increased conversion rates by 35%</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span className="text-sm">Implemented CI/CD pipelines that reduced deployment time by 60%</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span className="text-sm">Mentored junior developers through code reviews and pair programming</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    {/* Job 2 */}
                    <Card className="glass-effect relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <h3 className="text-xl font-bold">Web Developer</h3>
                          <span className="inline-flex items-center px-3 py-1 mt-2 md:mt-0 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            2018 - 2021
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 mb-4">CreativeMinds Agency • Los Angeles, CA</p>
                        <p className="text-foreground/80">
                          Developed responsive websites and web applications for a diverse portfolio of clients in various industries. Collaborated with designers to implement pixel-perfect UI.
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-sm">Built over 30 client websites using modern JavaScript frameworks</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-sm">Reduced page load times by an average of 40% through optimization techniques</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-sm">Developed a custom CMS solution for small business clients</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    {/* Job 3 */}
                    <Card className="glass-effect relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-neon-purple"></div>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <h3 className="text-xl font-bold">Junior Web Designer</h3>
                          <span className="inline-flex items-center px-3 py-1 mt-2 md:mt-0 rounded-full text-xs font-medium bg-neon-purple/10 text-neon-purple">
                            2016 - 2018
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 mb-4">Digital Solutions • New York, NY</p>
                        <p className="text-foreground/80">
                          Created wireframes, mockups, and interactive prototypes for web projects. Collaborated with developers to ensure design integrity throughout the development process.
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start">
                            <span className="text-neon-purple mr-2">•</span>
                            <span className="text-sm">Designed UI/UX for 15+ client websites with high user satisfaction ratings</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-neon-purple mr-2">•</span>
                            <span className="text-sm">Created a design system that improved team efficiency by 25%</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-neon-purple mr-2">•</span>
                            <span className="text-sm">Received an award for most innovative design in a company competition</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {/* Education Section */}
                <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <GraduationCap className="text-primary" />
                    <h2 className="text-2xl font-bold neon-text-pink">Education</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Education 1 */}
                    <Card className="glass-effect relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-neon-pink"></div>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <h3 className="text-xl font-bold">Master's in Computer Science</h3>
                          <span className="inline-flex items-center px-3 py-1 mt-2 md:mt-0 rounded-full text-xs font-medium bg-neon-pink/10 text-neon-pink">
                            2014 - 2016
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 mb-4">Stanford University • Stanford, CA</p>
                        <p className="text-foreground/80">
                          Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.
                        </p>
                      </CardContent>
                    </Card>
                    
                    {/* Education 2 */}
                    <Card className="glass-effect relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-neon-blue"></div>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <h3 className="text-xl font-bold">Bachelor's in Digital Media</h3>
                          <span className="inline-flex items-center px-3 py-1 mt-2 md:mt-0 rounded-full text-xs font-medium bg-neon-blue/10 text-neon-blue">
                            2010 - 2014
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 mb-4">University of California • Los Angeles, CA</p>
                        <p className="text-foreground/80">
                          Focused on web design, user experience, and interactive media. GPA: 3.85/4.0
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* Sidebar - Skills, Languages, etc. */}
              <div className="space-y-8">
                {/* Professional Skills */}
                <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <Code className="text-neon-green" />
                    <h2 className="text-xl font-bold neon-text-green">Professional Skills</h2>
                  </div>
                  
                  <Card className="glass-effect">
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        <li className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Front-end Development</span>
                            <span className="text-foreground/70">95%</span>
                          </div>
                          <div className="h-2 bg-secondary/50 rounded-full">
                            <div className="h-full w-[95%] bg-accent rounded-full"></div>
                          </div>
                        </li>
                        <li className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">UI/UX Design</span>
                            <span className="text-foreground/70">90%</span>
                          </div>
                          <div className="h-2 bg-secondary/50 rounded-full">
                            <div className="h-full w-[90%] bg-primary rounded-full"></div>
                          </div>
                        </li>
                        <li className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Back-end Development</span>
                            <span className="text-foreground/70">80%</span>
                          </div>
                          <div className="h-2 bg-secondary/50 rounded-full">
                            <div className="h-full w-[80%] bg-neon-purple rounded-full"></div>
                          </div>
                        </li>
                        <li className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Digital Marketing</span>
                            <span className="text-foreground/70">85%</span>
                          </div>
                          <div className="h-2 bg-secondary/50 rounded-full">
                            <div className="h-full w-[85%] bg-neon-green rounded-full"></div>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Languages */}
                <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <Languages className="text-neon-blue" />
                    <h2 className="text-xl font-bold neon-text-blue">Languages</h2>
                  </div>
                  
                  <Card className="glass-effect">
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex justify-between items-center">
                          <span>English</span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="w-2 h-2 rounded-full bg-accent"></span>
                            ))}
                          </div>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Spanish</span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-accent' : 'bg-secondary/50'}`}></span>
                            ))}
                          </div>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>French</span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`w-2 h-2 rounded-full ${i < 3 ? 'bg-accent' : 'bg-secondary/50'}`}></span>
                            ))}
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Certifications */}
                <div className="animate-slide-up" style={{ animationDelay: "0.7s" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="text-neon-pink" />
                    <h2 className="text-xl font-bold neon-text-pink">Certifications</h2>
                  </div>
                  
                  <Card className="glass-effect">
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        <li className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Google UX Design Professional</span>
                            <span className="text-xs text-foreground/70">2022</span>
                          </div>
                          <p className="text-sm text-foreground/70">Google</p>
                        </li>
                        <li className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">AWS Certified Developer</span>
                            <span className="text-xs text-foreground/70">2021</span>
                          </div>
                          <p className="text-sm text-foreground/70">Amazon Web Services</p>
                        </li>
                        <li className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Meta Front-End Developer</span>
                            <span className="text-xs text-foreground/70">2020</span>
                          </div>
                          <p className="text-sm text-foreground/70">Meta</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Interests */}
                <div className="animate-slide-up" style={{ animationDelay: "0.9s" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <Zap className="text-neon-yellow" />
                    <h2 className="text-xl font-bold neon-text-green">Interests</h2>
                  </div>
                  
                  <Card className="glass-effect">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {["UI/UX Design", "Web Accessibility", "AI & ML", "Open Source", "Photography", "Hiking", "Reading"].map(interest => (
                          <span 
                            key={interest}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/30"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
