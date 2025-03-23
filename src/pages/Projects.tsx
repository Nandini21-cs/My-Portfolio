
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

const projectCategories = [
  "All",
  "Web Design",
  "Web Development",
  "Digital Marketing"
];

// Sample projects data
const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A modern e-commerce platform with product catalog, shopping cart, and secure checkout.",
    image: "/placeholder.svg",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A sleek portfolio website for a creative photographer to showcase their work.",
    image: "/placeholder.svg",
    category: "Web Design",
    tags: ["HTML/CSS", "JavaScript", "Responsive"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Marketing Campaign",
    description: "Digital marketing campaign for a tech startup that increased their conversion rate by 40%.",
    image: "/placeholder.svg",
    category: "Digital Marketing",
    tags: ["SEO", "Content Strategy", "Analytics"],
    link: "#",
    github: null
  },
  {
    id: 4,
    title: "Restaurant Booking System",
    description: "Online reservation system for a chain of restaurants with table management.",
    image: "/placeholder.svg",
    category: "Web Development",
    tags: ["React", "Express", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Corporate Website Redesign",
    description: "Complete overhaul of a corporate website with improved UI/UX and performance.",
    image: "/placeholder.svg",
    category: "Web Design",
    tags: ["UI/UX", "WordPress", "Responsive"],
    link: "#",
    github: null
  },
  {
    id: 6,
    title: "Social Media Campaign",
    description: "Integrated social media campaign across multiple platforms that increased brand awareness.",
    image: "/placeholder.svg",
    category: "Digital Marketing",
    tags: ["Social Media", "Content Creation", "Analytics"],
    link: "#",
    github: null
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h1 className="text-4xl font-bold mb-4 neon-text-green">My Projects</h1>
            <p className="text-foreground/70">
              Take a look at some of the projects I've worked on. Each project represents my dedication to creating exceptional digital experiences.
            </p>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {projectCategories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full ${activeCategory === category ? 'bg-accent hover:bg-accent/90' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="overflow-hidden border-0 shadow-lg animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {project.link && (
                        <Button size="icon" variant="secondary" asChild className="rounded-full w-8 h-8">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} />
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button size="icon" variant="secondary" asChild className="rounded-full w-8 h-8">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={14} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="bg-secondary/50">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-background/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-accent/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 neon-text-pink">Have a project in mind?</h2>
            <p className="text-foreground/70 mb-8">
              I'm always looking for new and exciting projects to work on. If you have something in mind, I'd love to hear about it.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-accent to-primary">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
