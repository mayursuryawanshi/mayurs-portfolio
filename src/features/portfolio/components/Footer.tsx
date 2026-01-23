import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="py-8 px-4 border-t-4 border-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Marquee Banner */}
        <div className="neo-card bg-neo-pink p-4 mb-8 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="font-display text-xl mx-8">
                ★ OPEN FOR OPPORTUNITIES ★ LET'S CREATE SOMETHING AWESOME ★ NEOBRUTALISM ROCKS
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display text-2xl">
            YOUR<span className="text-primary">NAME</span>
          </div>

          <div className="font-body flex items-center gap-2">
            Made with <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-scale" />
            and lots of coffee
          </div>

          <div className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;