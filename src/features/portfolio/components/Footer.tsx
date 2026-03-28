import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Marquee Banner */}
      <div className="border-y-4 border-foreground bg-neo-pink overflow-hidden py-2.5">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3 font-display text-xs tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
              Open for Opportunities
              <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
              Let's Create Something Awesome
            </span>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-8 sm:py-10 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
            {/* Brand */}
            <div className="font-display text-xl sm:text-2xl">
              MAYUR<span className="text-primary">.</span>
            </div>

            {/* Made with love */}
            <div className="font-body flex items-center gap-2 text-sm text-muted-foreground">
              Made with{" "}
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-scale" />{" "}
              and lots of coffee
            </div>

            {/* Back to top + copyright */}
            <div className="flex items-center gap-3">
              <span className="font-body text-xs text-muted-foreground">
                © {new Date().getFullYear()}
              </span>
              <button
                onClick={scrollToTop}
                className="neo-button bg-neo-yellow text-foreground h-9 w-9 p-0 flex items-center justify-center rounded-lg text-sm"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
