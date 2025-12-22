import { Home, User, Briefcase, Mail, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="neo-card bg-neo-cream p-2 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative flex items-center"
            >
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-lg bg-background neo-border hover:bg-primary transition-colors"
              >
                <item.icon className="w-5 h-5" />
              </Button>
              <span className="absolute left-16 px-3 py-2 bg-foreground text-background font-body text-sm rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity whitespace-nowrap neo-border">
                {item.label}
              </span>
            </a>
          ))}
          <div className="group relative flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="w-12 h-12 rounded-lg bg-background neo-border hover:bg-primary transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            <span className="absolute left-16 px-3 py-2 bg-foreground text-background font-body text-sm rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity whitespace-nowrap neo-border">
              {mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed top-4 right-4 z-50 lg:hidden neo-button bg-primary p-3 h-12 w-12"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-background border-l-4 border-foreground"
        >
          <nav className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="neo-card bg-neo-cream p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary neo-border flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="font-display text-xl">{item.label}</span>
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="neo-card bg-neo-cream p-4 flex items-center gap-4"
              aria-label="Toggle theme"
            >
              <div className="w-12 h-12 rounded-lg bg-primary neo-border flex items-center justify-center">
                {mounted && theme === "dark" ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </div>
              <span className="font-display text-xl">
                {mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navigation;
