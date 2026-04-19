import { Home, User, Briefcase, Mail, Wrench, GitPullRequest, Sparkles, Building2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useActiveSection } from "@/features/portfolio/hooks/use-active-section";

const navItems = [
  { icon: Home, label: "Home", href: "#", sectionId: "" },
  { icon: User, label: "About", href: "#about", sectionId: "about" },
  { icon: Building2, label: "Experience", href: "#experience", sectionId: "experience" },
  { icon: Briefcase, label: "Projects", href: "#projects", sectionId: "projects" },
  { icon: Mail, label: "Contact", href: "#contact", sectionId: "contact" },
];

const toolItems = [
  { icon: Bot, label: "commit-sage", href: "https://www.npmjs.com/package/commit-sage" },
  { icon: GitPullRequest, label: "GitHub History", href: "https://mayursuryawanshi.github.io/github-history/" },
  { icon: Sparkles, label: "Horoscope", href: "https://mayursuryawanshi.github.io/horoscope/" },
];

const Navigation = () => {
  const activeSection = useActiveSection();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop Nav — horizontal top center */}
      <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
        <div className="neo-card-static bg-neo-cream p-2 flex flex-row items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a key={item.label} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="group relative flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className={`w-11 h-11 neo-border transition-all duration-150 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-none translate-x-[3px] translate-y-[3px]"
                      : "bg-white hover:bg-neo-yellow neo-shadow-sm"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                </Button>
                <span className="absolute top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background font-body text-xs opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap neo-border">
                  {item.label}
                </span>
              </a>
            );
          })}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="group relative flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-11 h-11 neo-border transition-all duration-150 bg-white hover:bg-neo-yellow neo-shadow-sm"
                >
                  <Wrench className="w-4 h-4" />
                </Button>
                <span className="absolute top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background font-body text-xs opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap neo-border">
                  Tools
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="neo-border bg-white neo-shadow-sm" sideOffset={12}>
              {toolItems.map((tool) => (
                <DropdownMenuItem key={tool.label} asChild>
                  <a href={tool.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                    <tool.icon className="w-4 h-4" />
                    <span className="font-body text-sm">{tool.label}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Nav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default" size="icon" className="fixed top-4 right-4 z-50 lg:hidden neo-button bg-primary p-2.5 h-11 w-11" aria-label="Toggle menu">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-background border-l-4 border-foreground">
          <div className="flex flex-col gap-3 mt-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a key={item.label} href={item.href} onClick={(e) => handleNavClick(e, item.href)}
                  className={`neo-card-static p-4 flex items-center gap-4 transition-all ${isActive ? "bg-neo-yellow" : "bg-white"}`}>
                  <div className={`w-11 h-11 neo-border flex items-center justify-center neo-shadow-sm ${isActive ? "bg-primary text-primary-foreground" : "bg-white"}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-display text-lg">{item.label}</span>
                </a>
              );
            })}
            <div className="mt-2 mb-1 px-1 font-display text-sm text-muted-foreground flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Tools
            </div>
            {toolItems.map((tool) => (
              <a key={tool.label} href={tool.href} target="_blank" rel="noopener noreferrer"
                className="neo-card-static p-4 flex items-center gap-4 transition-all bg-white">
                <div className="w-11 h-11 neo-border flex items-center justify-center neo-shadow-sm bg-white">
                  <tool.icon className="w-5 h-5" />
                </div>
                <span className="font-display text-lg">{tool.label}</span>
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navigation;
