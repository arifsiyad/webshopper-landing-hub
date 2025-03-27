
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutTemplate } from "lucide-react";

const TemplateLink = () => {
  return (
    <Button asChild variant="ghost" className="text-base">
      <Link to="/templates" className="flex items-center gap-1">
        <LayoutTemplate className="h-4 w-4" />
        Templates
      </Link>
    </Button>
  );
};

export default TemplateLink;
