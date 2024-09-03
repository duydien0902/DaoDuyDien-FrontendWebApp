import React from "react";

import { Typing } from "@/components/typing";

interface WelcomeProps {
  text: string;
  setDoneTyping: (
    update: (prev: { isAnimation: boolean; isDone: boolean }) => {
      isAnimation: boolean;
      isDone: boolean;
    }
  ) => void;
  duration: number;
}
export const Welcome = ({ setDoneTyping, text, duration }: WelcomeProps) => {
  return (
    <div className="w-full flex justify-center">
      <Typing setDoneTyping={setDoneTyping} text={text} duration={duration} />
    </div>
  );
};
