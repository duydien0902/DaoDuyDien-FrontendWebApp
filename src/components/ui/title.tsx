import { cn } from "@/lib/utils";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <div
      className={cn(
        "text-xl leading-tight font-bold light:text-[#03274E] lg:mb-8 sm:mb-6 mb-4",
        className
      )}
    >
      {children}
    </div>
  );
};
