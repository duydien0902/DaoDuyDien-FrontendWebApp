import { cn } from "@/lib/utils";

interface DescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export const Description = ({ children, className }: DescriptionProps) => {
  return (
    <h3
      className={cn(
        "leading-tight font-normal text-sm text-slate-400",
        className
      )}
    >
      {children}
    </h3>
  );
};
