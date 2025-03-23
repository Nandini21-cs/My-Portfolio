
import { toast } from "sonner";

// In a real application, these would connect to actual backend services
// This is a mock implementation for demonstration

// Store generated OTPs temporarily (in a real app, this would be stored securely on the server)
const otpStore: Record<string, { otp: string; timestamp: number }> = {};

// Generate a random 6-digit OTP
const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Simulate sending a verification email with OTP
export const sendVerificationEmail = async (email: string): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Generate OTP
  const otp = generateOTP();
  
  // Store OTP with timestamp (5 minute expiry)
  otpStore[email] = {
    otp,
    timestamp: Date.now() + 5 * 60 * 1000, // 5 minutes from now
  };
  
  // In a real app, this would send an actual email
  console.log(`[DEV] Verification OTP for ${email}: ${otp}`);
  
  return Promise.resolve();
};

// Verify the OTP entered by the user
export const verifyOTP = async (email: string, otp: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const storedData = otpStore[email];
  
  // Check if OTP exists and is valid
  if (!storedData) {
    toast.error("Verification failed. Please request a new code.");
    return false;
  }
  
  // Check if OTP has expired
  if (Date.now() > storedData.timestamp) {
    delete otpStore[email]; // Clean up expired OTP
    toast.error("Verification code has expired. Please request a new one.");
    return false;
  }
  
  // Check if OTP matches
  if (storedData.otp !== otp) {
    toast.error("Invalid verification code. Please try again.");
    return false;
  }
  
  // OTP verified successfully, clean up
  delete otpStore[email];
  return true;
};

// Handle user login after successful verification
export const loginUser = async (email: string): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, this would create a session or token
  localStorage.setItem("auth_user", email);
  localStorage.setItem("isAuthenticated", "true");
  
  return Promise.resolve();
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return localStorage.getItem("isAuthenticated") === "true";
};

// Log out the user
export const logoutUser = (): void => {
  localStorage.removeItem("auth_user");
  localStorage.removeItem("isAuthenticated");
};
