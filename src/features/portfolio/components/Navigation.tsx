import { Home, User, Briefcase, Mail, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useActiveSection } from "@/features/portfolio/hooks/use-active-section";

const navItems = [
  { icon: Home, label: "Home", href: "#", sectionId: "" },
  { icon: User, label: "About", href: "#about", sectionId: "about" },
  {
    icon: Briefcase,
    label: "Projects",
    href: "#projects",
    sectionId: "projects",
  },
  { icon: Mail, label: "Contact", href: "#contact", sectionId: "contact" },
];

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="neo-card-static bg-background p-2 flex flex-col gap-2 rounded-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group relative flex items-center"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className={`w-11 h-11 rounded-xl neo-border transition-all duration-150 ${
                    isActive
                      ? "bg-primary shadow-none translate-x-[2px] translate-y-[2px]"
                      : "bg-background hover:bg-neo-yellow neo-shadow-sm"
                  }`}
                >
                  <item.icon className="w-4.5 h-4.5" />
                </Button>
                <span className="absolute left-14 px-3 py-1.5 bg-foreground text-background font-body text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity whitespace-nowrap neo-border">
                  {item.label}
                </span>
              </a>
            );
          })}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-xl neo-border bg-background hover:bg-neo-yellow transition-all duration-150 flex items-center justify-center neo-shadow-sm"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-4.5 h-4.5" />
            ) : (
              <Moon className="w-4.5 h-4.5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed top-4 right-4 z-50 lg:hidden neo-button bg-primary p-2.5 h-11 w-11 rounded-xl"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-background border-l-4 border-foreground"
        >
          <div className="flex flex-col gap-3 mt-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`neo-card-static p-4 flex items-center gap-4 rounded-xl transition-all ${
                    isActive ? "bg-neo-yellow" : "bg-background"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl neo-border flex items-center justify-center neo-shadow-sm ${
                      isActive ? "bg-primary" : "bg-background"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-display text-lg">{item.label}</span>
                </a>
              );
            })}
            <button
              onClick={toggleTheme}
              className="neo-card-static bg-background p-4 flex items-center gap-4 rounded-xl"
              aria-label="Toggle theme"
            >
              <div className="w-11 h-11 rounded-xl bg-neo-yellow neo-border flex items-center justify-center neo-shadow-sm">
                {mounted && theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </div>
              <span className="font-display text-lg">
                {mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navigation;
