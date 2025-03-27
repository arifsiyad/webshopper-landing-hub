
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutTemplate } from "lucide-react";

interface TemplateLinkProps {
  className?: string;
}

const TemplateLink = ({ className }: TemplateLinkProps) => {
  return (
    <Button asChild variant="ghost" className={`text-base ${className}`}>
      <Link to="/templates" className="flex items-center gap-1">
        <LayoutTemplate className="h-4 w-4" />
        Templates
      </Link>
    </Button>
  );
};

export default TemplateLink;
