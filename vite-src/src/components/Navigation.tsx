import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { SOCIAL_URLS, PROFILE_URLS } from "@/lib/constants";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/tools", label: "Tools" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img
                src={PROFILE_URLS.GRAVATAR}
                alt="Jonathan Clarkin"
                className="w-10 h-10 rounded-full border border-border"
              />
              <Button
                variant="ghost"
                className="text-lg font-semibold"
                onClick={() => navigate("/")}
              >
                Clarkin
              </Button>
            </div>
            
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  onClick={() => navigate(item.path)}
                  className="text-sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(SOCIAL_URLS.LINKEDIN, '_blank')}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 