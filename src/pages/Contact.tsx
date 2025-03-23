
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <Layout>
      <section className="py-16 lg:py-24 relative">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h1 className="text-4xl font-bold mb-4 neon-text-blue">Get In Touch</h1>
            <p className="text-foreground/70">
              Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card className="glass-effect animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="mt-0.5">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:hello@example.com" className="text-foreground/70 hover:text-accent transition-colors">
                        hello@example.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-effect animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="mt-0.5">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-effect animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="mt-0.5">
                      <MapPin className="h-5 w-5 text-neon-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-foreground/70">
                        San Francisco, CA<br />
                        United States
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Card className="glass-effect border-border/30">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          required
                          className="bg-secondary/30 border-border/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email" 
                          required
                          className="bg-secondary/30 border-border/30"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="Subject of your message" 
                        required
                        className="bg-secondary/30 border-border/30"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message" 
                        rows={6}
                        required
                        className="bg-secondary/30 border-border/30"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-accent to-primary">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map or other location visualization could go here */}
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="rounded-xl overflow-hidden h-[300px] w-full neon-border-blue animate-fade-in">
            <img 
              src="/placeholder.svg" 
              alt="Map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
