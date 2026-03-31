import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="neo-card-static bg-neo-yellow inline-block px-6 py-3 mb-6">
          <h1 className="font-display text-7xl sm:text-9xl">404</h1>
        </div>
        <p className="font-display text-xl sm:text-2xl mb-2">Page not found</p>
        <p className="font-body text-sm text-muted-foreground mb-8">
          The page <code className="bg-muted px-2 py-0.5 rounded text-xs">{location.pathname}</code> doesn't exist.
        </p>
        <a
          href="/"
          className="neo-button bg-primary text-primary-foreground px-6 py-3 font-display text-sm inline-block"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
