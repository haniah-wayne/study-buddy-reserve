import { BookOpen } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="p-2 bg-primary-foreground rounded-xl">
        <BookOpen className="w-8 h-8 text-primary" />
      </div>
      <span className="text-2xl font-bold text-primary-foreground">StudyRez</span>
    </div>
  );
};
