"use client";

import { useState, useEffect } from "react";

interface TypingProps {
  text: string;
  setDoneTyping: (
    update: (prev: { isAnimation: boolean; isDone: boolean }) => {
      isAnimation: boolean;
      isDone: boolean;
    }
  ) => void;
  duration?: number;
}

export const Typing = ({ text, setDoneTyping, duration }: TypingProps) => {
  const [completedTyping, setCompletedTyping] = useState(false);
  const [displayResponse, setDisplayResponse] = useState("");

  useEffect(() => {
    setCompletedTyping(false);
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayResponse(text?.slice(0, i));
      i++;
      if (i > text?.length) {
        clearInterval(intervalId);
        setCompletedTyping(true);
      }
    }, 80);
    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (completedTyping && duration) {
      setDoneTyping((prev) => {
        return {
          ...prev,
          isAnimation: true,
        };
      });

      timeoutId = setTimeout(() => {
        setDoneTyping((prev) => {
          return {
            ...prev,
            isDone: true,
          };
        });
      }, duration);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [completedTyping]);

  return (
    <div className="flex items-center text-2xl">
      <p>{displayResponse}</p>
      {!completedTyping && (
        <div className="animate-flicker w-1 h-6 ml-1.5 rounded-full inline-block dark:bg-white bg-black" />
      )}
    </div>
  );
};
