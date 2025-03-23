
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/AuthLayout";
import OTPInput from "@/components/OTPInput";
import { toast } from "sonner";
import { verifyOTP, sendVerificationEmail, loginUser } from "@/lib/auth";
import { ArrowLeft, RefreshCw, Info } from "lucide-react";

const VerifyOTP = () => {
  const [email, setEmail] = useState<string>("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [latestOTP, setLatestOTP] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve email from session storage
    const storedEmail = sessionStorage.getItem("auth_email");
    if (!storedEmail) {
      // Redirect to login if no email is found
      navigate("/");
      return;
    }
    
    setEmail(storedEmail);

    // Set up countdown for resend button
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleVerify = async (otp: string) => {
    if (!email) return;
    
    setIsVerifying(true);
    
    try {
      const isValid = await verifyOTP(email, otp);
      
      if (isValid) {
        toast.success("Email verified successfully");
        
        // Login the user
        await loginUser(email);
        
        // Redirect to dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Verification error:", error);
      toast.error("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    if (!email || isResending || !canResend) return;
    
    setIsResending(true);
    
    try {
      // Save current console.log implementation
      const originalConsoleLog = console.log;
      
      // Override console.log to capture the OTP
      console.log = (...args) => {
        originalConsoleLog(...args);
        const logStr = args.join(" ");
        if (logStr.includes("[DEV] Verification OTP for")) {
          const otpMatch = logStr.match(/(\d{6})$/);
          if (otpMatch && otpMatch[1]) {
            setLatestOTP(otpMatch[1]);
          }
        }
      };
      
      await sendVerificationEmail(email);
      
      // Restore original console.log
      console.log = originalConsoleLog;
      
      toast.success("New verification code sent");
      
      // Reset countdown
      setCountdown(60);
      setCanResend(false);
      
      // Set up countdown again
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            setCanResend(true);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    } catch (error) {
      console.error("Resend error:", error);
      toast.error("Failed to resend code. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <AuthLayout>
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-4 p-0 h-auto"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={18} className="mr-1" />
        <span className="text-sm">Back</span>
      </Button>

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
            <path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
            <path d="m22 6-10 7L2 6" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Check your email</h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto">
          We've sent a verification code to{" "}
          <span className="font-medium text-foreground">{email}</span>
        </p>
      </div>

      <div className="space-y-8 animate-slide-up">
        <div className="space-y-2">
          <p className="text-sm text-center text-muted-foreground mb-4">
            Enter the 6-digit verification code
          </p>
          <OTPInput
            length={6}
            onComplete={handleVerify}
            autoFocus
          />
        </div>

        {/* Demo-only information box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <div className="flex items-start">
            <Info size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
            <div className="text-sm text-blue-700 dark:text-blue-300">
              <p className="font-medium mb-1">Demo Mode</p>
              <p>
                Since this is a demo app without real email integration, your verification code 
                is displayed in the browser's console log and in a toast notification.
              </p>
              {latestOTP && (
                <p className="mt-2">
                  <span className="font-medium">Current code:</span>{" "}
                  <code className="bg-blue-100 dark:bg-blue-800 px-2 py-0.5 rounded font-mono">
                    {latestOTP}
                  </code>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-3">
            Didn't receive the code?
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={handleResendCode}
            disabled={!canResend || isResending}
            className="h-10"
          >
            {isResending ? (
              <>
                <RefreshCw size={16} className="mr-2 animate-spin" />
                Sending...
              </>
            ) : canResend ? (
              "Resend Code"
            ) : (
              `Resend code in ${countdown}s`
            )}
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyOTP;
