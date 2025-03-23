
import React from "react";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AuthLayout = ({ children, className }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-b from-background to-secondary/20">
      <div className={cn(
        "w-full max-w-md animate-fade-in mx-auto",
        className
      )}>
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
          
          {/* Content */}
          <div className="relative z-10 backdrop-blur-sm bg-white/80 dark:bg-black/50 p-8 rounded-xl border border-border shadow-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
