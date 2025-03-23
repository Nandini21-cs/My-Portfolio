
import React, { useState, useEffect } from 'react';

interface TypedTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypedText: React.FC<TypedTextProps> = ({ 
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50, 
  pauseTime = 1500 
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isPaused) {
      timeout = setTimeout(() => setIsPaused(false), pauseTime);
      return () => clearTimeout(timeout);
    }

    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === currentPhrase) {
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, isPaused, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-primary font-medium">
      {currentText}
      <span className="border-r-2 border-primary ml-1 animate-pulse-subtle">&nbsp;</span>
    </span>
  );
};

export default TypedText;
