import { ArrowRight, MapPin, Sparkles, Code2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-background pattern-grid-diagonal"
    >
      {/* Marquee Ticker Strip */}
      <div className="border-b-4 border-foreground bg-neo-yellow overflow-hidden py-2.5 relative z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3 font-display text-xs tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Creative Developer
              <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
              UI/UX Enthusiast
              <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
              Open to Work
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-44px)] px-4 sm:px-6 py-12 md:py-16">
        <div
          ref={ref}
          className={`max-w-md sm:max-w-3xl w-full scroll-fade-in-up ${
            isVisible ? "visible" : ""
          }`}
        >
          {/* Hero Card */}
          <div className="neo-card-lg bg-background p-5 sm:p-8 md:p-10 relative">
            {/* Animated gradient overlay */}
            <div
              className="absolute inset-0 rounded-[1.5rem] opacity-40 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(94,220,212,0.3) 0%, rgba(252,238,75,0.2) 40%, transparent 70%)",
              }}
            />

            <div className="relative z-10 space-y-5 sm:space-y-7">
              {/* Badge */}
              <div className="inline-flex items-center neo-tag bg-neo-orange rotate-1 px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-white ring-2 ring-foreground mr-2.5" />
                <span className="font-display text-xs tracking-[0.15em] uppercase">
                  Available for Work
                </span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                  Hi, I'm{" "}
                  <span className="text-primary">Mayur</span>
                  <br />
                  <span className="text-secondary">Suryawanshi</span>
                  <span className="text-accent">.</span>
                </h1>
              </div>

              {/* Description */}
              <p className="font-body text-sm sm:text-base md:text-lg leading-[1.7] max-w-xl text-muted-foreground">
                A Creative Developer with a passion for building beautiful,
                functional, and user-centered digital experiences. I bring
                ideas to life through code and design.
              </p>

              {/* Skill Icons Row */}
              <div className="flex items-center gap-2.5">
                {[
                  { icon: Code2, color: "bg-neo-cyan", label: "Code" },
                  { icon: Palette, color: "bg-neo-pink", label: "Design" },
                  { icon: Sparkles, color: "bg-neo-yellow", label: "Create" },
                ].map(({ icon: Icon, color, label }) => (
                  <div
                    key={label}
                    className={`w-11 h-11 sm:w-12 sm:h-12 neo-border rounded-xl ${color} flex items-center justify-center neo-shadow-sm hover:neo-shadow-md hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all`}
                    title={label}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button
                  asChild
                  className="neo-button bg-primary text-foreground font-body h-auto py-3 px-7 text-sm sm:text-base group"
                >
                  <a href="#projects" className="flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="neo-button bg-neo-yellow text-foreground font-body h-auto py-3 px-7 text-sm sm:text-base"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Get in Touch
                  </a>
                </Button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5 pt-1">
                <div className="w-8 h-8 rounded-lg bg-neo-cyan neo-border flex items-center justify-center neo-shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-body text-sm text-muted-foreground">
                  Based in Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Shapes — pattern-filled, slow ambient animation */}
      <div className="absolute top-[15%] right-[8%] hidden lg:block animate-float-1">
        <div className="w-20 h-20 xl:w-28 xl:h-28 rounded-[2rem] neo-border-thick shape-stripes-pink neo-shadow-md" />
      </div>
      <div className="absolute bottom-[20%] left-[6%] hidden lg:block animate-float-2">
        <div className="w-16 h-16 xl:w-24 xl:h-24 rounded-full neo-border-thick shape-checkerboard neo-shadow-md" />
      </div>
      <div className="absolute top-[40%] right-[4%] hidden xl:block animate-float-3">
        <div className="w-14 h-14 xl:w-20 xl:h-20 rounded-2xl neo-border-thick shape-dots neo-shadow" />
      </div>
      <div className="absolute bottom-[35%] left-[3%] hidden xl:block animate-float-4">
        <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full neo-border-thick shape-rings neo-shadow" />
      </div>
      <div className="absolute top-[25%] left-[12%] hidden lg:block animate-float-5">
        <div
          className="w-14 h-14 xl:w-18 xl:h-18 neo-border-thick shape-stripes-teal neo-shadow"
          style={{ clipPath: "polygon(50% 0%, 100% 90%, 0% 90%)" }}
        />
      </div>
      <div className="absolute bottom-[15%] right-[12%] hidden lg:block animate-float-6">
        <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-xl neo-border-thick shape-grid neo-shadow rotate-12" />
      </div>
    </section>
  );
};

export default HeroSection;
