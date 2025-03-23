
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { isAuthenticated, logoutUser } from "@/lib/auth";
import { toast } from "sonner";

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      navigate("/");
      return;
    }
    
    // Get user email
    const email = localStorage.getItem("auth_user");
    setUserEmail(email);
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M12 2 2 7l10 5 10-5-10-5Z" />
              <path d="M2 17 12 22 22 17" />
              <path d="M2 12 12 17 22 12" />
            </svg>
            <span className="font-semibold">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {userEmail}
            </span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container py-10">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm animate-fade-in">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Welcome to Your Dashboard
              </h3>
              <p className="text-sm text-muted-foreground">
                You've successfully logged in with email verification
              </p>
            </div>
            <div className="p-6 pt-0">
              <div className="prose max-w-none">
                <p>
                  This is a secure area of the application. You accessed this page
                  because your email was verified successfully.
                </p>
                <p>
                  In a real application, this dashboard would contain your actual
                  content and functionality.
                </p>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Button variant="secondary" onClick={handleLogout}>
                Log out
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Your Application. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
