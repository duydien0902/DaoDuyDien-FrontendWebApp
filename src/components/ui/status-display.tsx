import { cn } from "@/lib/utils";

interface StatusDisplayProps {
  className?: string;
}

export const Active = ({ className }: StatusDisplayProps) => {
  return (
    <div className={cn("w-2.5 h-2.5 rounded-full bg-green-400", className)} />
  );
};

export const InActive = ({ className }: StatusDisplayProps) => {
  return (
    <div className={cn("w-2.5 h-2.5 rounded-full bg-red-600", className)} />
  );
};
