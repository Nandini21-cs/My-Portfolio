
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  className?: string;
  autoFocus?: boolean;
}

const OTPInput = ({
  length = 6,
  onComplete,
  className,
  autoFocus = true,
}: OTPInputProps) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    inputRefs.current = inputRefs.current.slice(0, length);
    
    // Auto focus first input on mount
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [length, autoFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    // Allow only single digit
    if (/^\d*$/.test(value) && value.length <= 1) {
      // Update the OTP array
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input if value was added
      if (value && index < length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
      
      // Check if OTP is complete
      const otpValue = newOtp.join("");
      if (otpValue.length === length && onComplete) {
        onComplete(otpValue);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
        // If current input is empty, focus previous input
        inputRefs.current[index - 1].focus();
      }
      
      // Clear current input
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
    
    // Handle left arrow key
    else if (e.key === "ArrowLeft" && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
    
    // Handle right arrow key
    else if (e.key === "ArrowRight" && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    
    // Check if pasted data contains only digits
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.slice(0, length).split("");
      
      // Fill the OTP array with pasted digits
      const newOtp = [...otp];
      digits.forEach((digit, index) => {
        if (index < length) {
          newOtp[index] = digit;
        }
      });
      
      setOtp(newOtp);
      
      // Focus the input after the last pasted digit
      const focusIndex = Math.min(digits.length, length - 1);
      if (inputRefs.current[focusIndex]) {
        inputRefs.current[focusIndex].focus();
      }
      
      // Check if OTP is complete
      const otpValue = newOtp.join("");
      if (otpValue.length === length && onComplete) {
        onComplete(otpValue);
      }
    }
  };

  return (
    <div className={cn("otp-container", className)}>
      {Array(length)
        .fill(null)
        .map((_, index) => (
          <input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className={cn(
              "otp-input",
              otp[index] ? "border-primary" : ""
            )}
            autoComplete="one-time-code"
            aria-label={`Digit ${index + 1} of verification code`}
          />
        ))}
    </div>
  );
};

export default OTPInput;
