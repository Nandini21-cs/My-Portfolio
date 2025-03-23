import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Code, Briefcase, Layout as LayoutIcon, Users, Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Portfolio = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent/10 filter blur-3xl"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 neon-text-pink">
                Hello, I'm<br/>
                <span className="text-gradient inline-block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Nandini Shukla
                </span>
              </h1>
              <p className="text-lg text-foreground/80 mb-8 max-w-lg">
                I create stunning digital experiences that combine beautiful design with performant code. From concept to deployment, I'll bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="rounded-full bg-accent hover:bg-accent/90">
                  <Link to="/projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <Button asChild variant="ghost" className="rounded-full flex items-center gap-2">
                  <a href="https://github.com/Nandini21-cs" target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-1" /> GitHub
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 animate-slide-down">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden neon-border-pink">
                  <img 
                    src="/lovable-uploads/1e72e232-7285-44e9-b20d-f5e400382e19.png" 
                    alt="Nandini Shukla" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -left-6 top-1/4 glass-effect px-4 py-2 rounded-full animate-float">
                  <span className="text-accent font-medium flex items-center gap-2">
                    <Code size={16} /> Web Development
                  </span>
                </div>
                <div className="absolute -right-6 top-2/3 glass-effect px-4 py-2 rounded-full animate-float" style={{ animationDelay: "1s" }}>
                  <span className="text-primary font-medium flex items-center gap-2">
                    <LayoutIcon size={16} /> UI/UX Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4 neon-text-blue">My Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              I offer a wide range of services to help businesses succeed in the digital world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-effect rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <LayoutIcon className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Design</h3>
              <p className="text-foreground/70">
                Create beautiful, responsive websites that engage your audience and reflect your brand identity.
              </p>
            </div>
            
            {/* Service Card 2 */}
            <div className="glass-effect rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Code className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-foreground/70">
                Build fast, scalable, and maintainable websites and web applications using modern technologies.
              </p>
            </div>
            
            {/* Service Card 3 */}
            <div className="glass-effect rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center mb-4">
                <Users className="text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
              <p className="text-foreground/70">
                Increase your online presence and reach your target audience through effective digital marketing strategies.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="ghost" className="group">
              <Link to="/skills" className="flex items-center gap-2">
                View All Services
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Recent Projects */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-4 neon-text-green">Recent Projects</h2>
              <p className="text-foreground/70 max-w-xl">
                Check out some of my latest work
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0 animate-slide-up">
              <Link to="/projects" className="flex items-center gap-2">
                All Projects <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Project 1" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Website</h3>
                <p className="text-sm text-foreground/80 mb-4">Web Design, Development</p>
                <Button asChild size="sm" className="w-fit">
                  <Link to="/projects">View Project</Link>
                </Button>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="group relative rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Project 2" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">Marketing Campaign</h3>
                <p className="text-sm text-foreground/80 mb-4">Digital Marketing, SEO</p>
                <Button asChild size="sm" className="w-fit">
                  <Link to="/projects">View Project</Link>
                </Button>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="group relative rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Project 3" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-sm text-foreground/80 mb-4">Web Design, UI/UX</p>
                <Button asChild size="sm" className="w-fit">
                  <Link to="/projects">View Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-accent/5 relative overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text-purple">Ready to start your project?</h2>
            <p className="text-foreground/70 text-lg mb-8">
              Let's work together to create something amazing. Get in touch to discuss your next project.
            </p>
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-accent to-primary">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
