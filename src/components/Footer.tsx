
import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold neon-text-blue">PORTFOLIO</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Web Designer | Developer | Digital Marketer
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-neon-blue transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-neon-blue transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-neon-blue transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:info@example.com"
              className="text-foreground/70 hover:text-neon-blue transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground mt-6">
          <p>© 2023 Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/skills" className="hover:text-accent transition-colors">Skills</Link>
            <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <Link to="/resume" className="hover:text-accent transition-colors">Resume</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
