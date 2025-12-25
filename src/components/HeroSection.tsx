import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const DecorativeShape = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} scroll-fade-in ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen flex items-center justify-center relative py-20 px-4 bg-neo-mint checkerboard-pattern">
      <div
        ref={ref}
        className={`animate-bounce-subtle neo-card bg-neo-cream p-8 md:p-12 max-w-2xl w-full relative z-10 scroll-fade-in-up ${
          isVisible ? "visible" : ""
        }`}
      >
        {/* Tag */}
        <Badge
          variant="outline"
          className="neo-tag bg-background mb-6 px-4 py-2 text-sm font-body"
        >
          <span className="w-3 h-3 rounded-full bg-secondary neo-border mr-2" />
          <span className="tracking-widest uppercase">Available for Work</span>
        </Badge>

        {/* Main Heading */}
        <div className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          I'm <span className="text-primary">Mayur Suryawanshi</span>
        </div>

        {/* Description */}
        <div className="font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
          A Creative Developer with a passion for building beautiful,
          functional, and user-centered digital experiences. I bring ideas to
          life through code and design.
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            asChild
            className="neo-button bg-primary text-foreground font-body h-auto py-3 px-6 group"
          >
            <a href="#projects" className="flex items-center gap-2">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="neo-button bg-secondary text-foreground font-body h-auto py-3 px-6"
          >
            <a href="#contact" className="flex items-center gap-2">
              Get in Touch
            </a>
          </Button>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-full bg-secondary neo-border flex items-center justify-center">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="font-body">Based in Maharashtra, India</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeShape
        className="absolute top-1 right-10 md:right-20 hidden lg:block"
        delay={0.3}
      >
        <div className="w-40 h-40 bg-neo-pink neo-border rounded-lg rotate-12 animate-wiggle dotted-pattern" />
      </DecorativeShape>
      <DecorativeShape
        className="absolute bottom-1/4 left-10 md:left-20 hidden lg:block"
        delay={0.5}
      >
        <div className="w-20 h-20 bg-neo-cyan neo-border rounded-full animate-bounce-subtle" />
      </DecorativeShape>
    </div>
  );
};

export default HeroSection;
