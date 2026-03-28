import { ArrowRight, MapPin, Sparkles, Code2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-neo-mint pattern-grid-diagonal"
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
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 scroll-fade-in-up ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center neo-tag bg-neo-orange px-4 py-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-foreground mr-2.5" />
              <span className="font-display text-xs tracking-[0.15em] uppercase">
                Available for Work
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
                I'm
              </h1>
              <div className="relative inline-block">
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-primary">
                  Mayur
                </h1>
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-neo-yellow neo-border" />
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
                Suryawanshi<span className="text-accent">.</span>
              </h1>
            </div>

            {/* Description Card */}
            <div className="neo-card bg-neo-cream p-5 max-w-lg">
              <p className="font-body text-lg md:text-xl leading-relaxed">
                A Creative Developer with a passion for building{" "}
                <span className="bg-neo-yellow px-1 font-semibold neo-border inline-block">
                  beautiful
                </span>
                , functional, and user-centered digital experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                asChild
                className="neo-button bg-primary text-primary-foreground font-body h-auto py-3.5 px-7 text-base group"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="neo-button bg-neo-yellow text-foreground font-body h-auto py-3.5 px-7 text-base"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get in Touch
                </a>
              </Button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 bg-neo-cyan neo-border flex items-center justify-center neo-shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-body text-base text-muted-foreground">
                Based in Maharashtra, India
              </span>
            </div>
          </div>

          {/* Right Column — Stacked Cards */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-12">
            {/* Background rotated card */}
            <div className="absolute inset-0 neo-card bg-neo-pink rotate-2 translate-x-2 translate-y-2 hidden sm:block" />

            {/* Main card */}
            <div className="neo-card-lg bg-neo-yellow p-6 md:p-8 relative z-10">
              {/* Icon row */}
              <div className="flex items-center gap-3 mb-6">
                {[
                  { icon: Code2, color: "bg-white" },
                  { icon: Palette, color: "bg-neo-cyan" },
                  { icon: Sparkles, color: "bg-neo-pink" },
                ].map(({ icon: Icon, color }, i) => (
                  <div key={i} className={`w-12 h-12 neo-border ${color} flex items-center justify-center neo-shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                ))}
              </div>

              {/* Skills grid */}
              <h3 className="font-display text-lg mb-3">What I Do</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Frontend", color: "bg-neo-cyan" },
                  { label: "UI/UX", color: "bg-neo-pink" },
                  { label: "React", color: "bg-white" },
                  { label: "TypeScript", color: "bg-neo-purple" },
                ].map(({ label, color }) => (
                  <div
                    key={label}
                    className={`neo-border px-4 py-3 font-body font-semibold text-sm text-center neo-shadow-sm ${color}`}
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-4 mt-6 pt-4 border-t-3 border-foreground">
                {[
                  { val: "2+", label: "Years Exp" },
                  { val: "10+", label: "Projects" },
                  { val: "5+", label: "Tech Stack" },
                ].map((s, i) => (
                  <div key={s.label} className="text-center flex-1 flex flex-col items-center">
                    <div className="font-display text-2xl">{s.val}</div>
                    <div className="font-body text-xs uppercase tracking-wider">{s.label}</div>
                    {i < 2 && <div className="hidden" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-[15%] right-[6%] hidden lg:block animate-float-1">
        <div className="w-20 h-20 xl:w-24 xl:h-24 neo-border-thick shape-stripes-teal neo-shadow-md" />
      </div>
      <div className="absolute bottom-[20%] left-[5%] hidden lg:block animate-float-2">
        <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full neo-border-thick shape-checkerboard neo-shadow" />
      </div>
      <div className="absolute top-[45%] right-[3%] hidden xl:block animate-float-3">
        <div className="w-12 h-12 xl:w-16 xl:h-16 neo-border-thick shape-dots neo-shadow" />
      </div>
      <div className="absolute bottom-[30%] left-[3%] hidden xl:block animate-float-4">
        <div className="w-10 h-10 xl:w-14 xl:h-14 rounded-full neo-border-thick shape-rings neo-shadow" />
      </div>
    </section>
  );
};

export default HeroSection;
