import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ArrowRight } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="max-w-md w-full text-center space-y-8">
        <Logo className="justify-center" />
        
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary-foreground">
            Welcome to StudyRez
          </h1>
          <p className="text-primary-foreground/90 text-lg">
            Reserve your study space, anywhere.
          </p>
        </div>

        <Button
          onClick={() => navigate("/school-selection")}
          size="lg"
          className="w-full bg-primary-dark hover:bg-primary-dark/90 text-primary-foreground shadow-large"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
