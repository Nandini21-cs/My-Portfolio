
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Github } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <PageTransition>
        <main className="flex-grow">{children}</main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Layout;
