
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-display font-bold text-gradient-primary mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="button-primary inline-flex">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
