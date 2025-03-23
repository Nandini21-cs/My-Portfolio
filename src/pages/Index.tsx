
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import AuthForm from "@/components/AuthForm";
import { isAuthenticated } from "@/lib/auth";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard if already authenticated
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <div className="inline-block rounded-full p-3 bg-primary/5 mb-3">
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
            className="h-6 w-6 text-primary"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Sign in to your account with email verification
        </p>
      </div>

      <AuthForm />

      <div className="mt-6 text-center text-sm text-muted-foreground">
        By continuing, you agree to our{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
        .
      </div>
    </AuthLayout>
  );
};

export default Index;
