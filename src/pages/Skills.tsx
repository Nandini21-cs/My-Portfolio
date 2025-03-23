
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Globe, 
  Terminal, 
  Search, 
  BarChart, 
  BrainCircuit, 
  Database, 
  Layout as LayoutIcon,
  Smartphone,
  Cpu,
  Server,
  Pencil,
  GitBranch,
  Mail
} from "lucide-react";

const Skills = () => {
  const designSkills = [
    { name: "UI/UX Design", level: 90, icon: <Palette size={20} /> },
    { name: "Responsive Design", level: 95, icon: <Smartphone size={20} /> },
    { name: "Wireframing", level: 85, icon: <LayoutIcon size={20} /> },
    { name: "Graphic Design", level: 80, icon: <Palette size={20} /> },
  ];

  const developmentSkills = [
    { name: "HTML/CSS", level: 95, icon: <Code size={20} /> },
    { name: "JavaScript", level: 90, icon: <Terminal size={20} /> },
    { name: "React", level: 85, icon: <Code size={20} /> },
    { name: "Node.js", level: 80, icon: <Database size={20} /> },
    { name: "TypeScript", level: 75, icon: <Code size={20} /> },
    { name: "Next.js", level: 75, icon: <Terminal size={20} /> },
  ];

  const marketingSkills = [
    { name: "SEO", level: 85, icon: <Search size={20} /> },
    { name: "Content Strategy", level: 80, icon: <BarChart size={20} /> },
    { name: "Social Media", level: 90, icon: <Globe size={20} /> },
    { name: "Email Marketing", level: 85, icon: <Mail size={20} /> },
    { name: "Analytics", level: 75, icon: <BarChart size={20} /> },
  ];

  const SkillBar = ({ level, name, icon }: { level: number; name: string; icon: React.ReactNode }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-foreground/70">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000" 
          style={{ width: `${level}%`, transitionDelay: '300ms' }}
        ></div>
      </div>
    </div>
  );

  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h1 className="text-4xl font-bold mb-4 neon-text-blue">My Skills</h1>
            <p className="text-foreground/70">
              I combine technical expertise with creative problem-solving to deliver exceptional digital experiences. Here are some of the skills I've honed over the years.
            </p>
          </div>

          {/* Core Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="glass-effect border-accent/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Palette className="h-5 w-5" />
                  Web Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Creating visually appealing and functional websites that provide an exceptional user experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">•</span> UI/UX Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">•</span> Responsive Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">•</span> Wireframing & Prototyping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">•</span> Brand Identity
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Code className="h-5 w-5" />
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Building robust, scalable websites and applications using modern technologies and best practices.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span> Frontend Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span> Backend Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span> API Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span> Performance Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-neon-purple/20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-neon-purple">
                  <Globe className="h-5 w-5" />
                  Digital Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Implementing strategies to increase online visibility and drive engagement with your target audience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-neon-purple">•</span> Search Engine Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neon-purple">•</span> Content Marketing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neon-purple">•</span> Social Media Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-neon-purple">•</span> Analytics & Reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skill Bars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-bold mb-6 text-accent flex items-center gap-2">
                <Palette size={24} />
                Design Skills
              </h2>
              {designSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                <Code size={24} />
                Development Skills
              </h2>
              {developmentSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.7s" }}>
              <h2 className="text-2xl font-bold mb-6 text-neon-purple flex items-center gap-2">
                <Globe size={24} />
                Marketing Skills
              </h2>
              {marketingSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text-green">Technologies I Work With</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "HTML5", icon: <Code size={28} /> },
              { name: "CSS3", icon: <Palette size={28} /> },
              { name: "JavaScript", icon: <Terminal size={28} /> },
              { name: "React", icon: <Code size={28} /> },
              { name: "Node.js", icon: <Server size={28} /> },
              { name: "TypeScript", icon: <Code size={28} /> },
              { name: "Next.js", icon: <Globe size={28} /> },
              { name: "Tailwind CSS", icon: <Palette size={28} /> },
              { name: "Figma", icon: <Pencil size={28} /> },
              { name: "WordPress", icon: <Globe size={28} /> },
              { name: "MongoDB", icon: <Database size={28} /> },
              { name: "Git", icon: <GitBranch size={28} /> }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="glass-effect rounded-xl p-6 flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-primary mb-3">{tech.icon}</div>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
