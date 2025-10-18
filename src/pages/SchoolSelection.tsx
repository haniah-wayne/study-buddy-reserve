import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SchoolSelection = () => {
  const navigate = useNavigate();
  const [selectedSchool, setSelectedSchool] = useState("");

  const handleContinue = () => {
    if (selectedSchool) {
      navigate("/auth");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="max-w-md w-full space-y-8">
        <Logo className="justify-center" />
        
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary-foreground text-center">
            Select your school
          </h2>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/60" />
              <Select value={selectedSchool} onValueChange={setSelectedSchool}>
                <SelectTrigger className="pl-10 bg-primary-foreground border-0 h-12 text-base">
                  <SelectValue placeholder="Search schools" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wayne-state">Wayne State University</SelectItem>
                  <SelectItem value="other">Other Universities (Coming Soon)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleContinue}
              disabled={!selectedSchool}
              className="w-full bg-primary-dark hover:bg-primary-dark/90 text-primary-foreground h-12 text-base shadow-medium"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolSelection;
