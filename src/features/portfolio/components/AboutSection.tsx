import { Code, Brain, Zap, HeartPulse } from "lucide-react";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";
import ScrollShape from "./ScrollShape";

const skills = [
  { name: "React", color: "bg-neo-cyan" },
  { name: "TypeScript", color: "bg-neo-pink" },
  { name: "Python", color: "bg-neo-yellow" },
  { name: "Django", color: "bg-neo-orange" },
  { name: "Next.js", color: "bg-neo-purple" },
  { name: "Node.js", color: "bg-neo-mint" },
  { name: "Tailwind CSS", color: "bg-neo-pink" },
  { name: "MongoDB", color: "bg-neo-cyan" },
  { name: "PostgreSQL", color: "bg-neo-yellow" },
  { name: "Docker", color: "bg-neo-orange" },
  { name: "AI/ML", color: "bg-neo-purple" },
];

const traits = [
  { icon: Code, label: "Full-Stack", desc: "Frontend & Backend", color: "bg-neo-cyan" },
  { icon: HeartPulse, label: "Healthcare", desc: "EMR & RBP products", color: "bg-neo-yellow" },
  { icon: Brain, label: "AI/ML", desc: "Intelligent features", color: "bg-neo-orange" },
  { icon: Zap, label: "Fast Learner", desc: "Adapting to new tech", color: "bg-neo-mint" },
];

const AboutSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const leftRef = useScrollAnimation({ threshold: 0.2 });
  const rightRef = useScrollAnimation({ threshold: 0.2 });
  const traitsRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-neo-pink-light pattern-diagonal-stripe border-t-4 border-foreground">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef.ref}
          className={`mb-12 scroll-fade-in-up ${headerRef.isVisible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center neo-tag bg-neo-orange px-4 py-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-foreground mr-2.5" />
            <span className="font-display text-xs tracking-[0.15em] uppercase">About Me</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
            Developer &<br />
            <span className="text-primary">Problem Solver</span>
            <span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column — Bio */}
          <div
            ref={leftRef.ref}
            className={`lg:col-span-7 scroll-fade-in-up ${leftRef.isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 neo-card bg-neo-cyan rotate-1 translate-x-2 translate-y-2 hidden sm:block" />
              <div className="neo-card-lg bg-white p-6 md:p-8 relative z-10">
                <p className="font-body text-lg md:text-xl leading-relaxed mb-5">
                  I'm a full-stack developer working in the{" "}
                  <span className="bg-neo-yellow px-1 font-semibold neo-border inline-block">
                    healthcare
                  </span>{" "}
                  sector, building products like EMR and RBP that directly
                  impact patient care and clinical workflows. I work across
                  React and Python/Django, with a growing focus on AI-powered features.
                </p>
                <p className="font-body text-lg md:text-xl leading-relaxed">
                  My goal is to build systems that are{" "}
                  <span className="bg-neo-cyan px-1 font-semibold neo-border inline-block">
                    reliable
                  </span>{" "}
                  and impactful — combining clean architecture with
                  practical solutions that make healthcare technology better.
                </p>
              </div>
            </div>

            {/* Traits Row */}
            <div
              ref={traitsRef.ref}
              className={`grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 scroll-fade-in-up ${
                traitsRef.isVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              {traits.map((trait) => (
                <div
                  key={trait.label}
                  className={`neo-card-static ${trait.color} p-4 text-center`}
                >
                  <div className="w-11 h-11 bg-white neo-border flex items-center justify-center mx-auto mb-2 neo-shadow-sm">
                    <trait.icon className="w-5 h-5" />
                  </div>
                  <div className="font-display text-xs sm:text-sm">{trait.label}</div>
                  <div className="font-body text-[0.65rem] text-muted-foreground mt-0.5">
                    {trait.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={rightRef.ref}
            className={`lg:col-span-5 space-y-6 scroll-fade-in-up ${rightRef.isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Tech Stack */}
            <div className="neo-card bg-white p-6 md:p-8">
              <h3 className="font-display text-xl mb-5">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`neo-tag ${skill.color} font-body`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="relative">
              <div className="absolute inset-0 neo-card bg-neo-purple -rotate-2 translate-x-1 translate-y-1 hidden sm:block" />
              <div className="neo-card-lg bg-neo-yellow p-6 md:p-8 relative z-10">
                <h3 className="font-display text-xl mb-5">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "1.5+", label: "Years Experience", color: "bg-white" },
                    { value: "10+", label: "Projects Built", color: "bg-neo-cyan" },
                    { value: "10+", label: "Tech Skills", color: "bg-neo-pink" },
                    { value: "∞", label: "Cups of Coffee", color: "bg-neo-orange" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={`neo-border p-4 text-center neo-shadow-sm ${stat.color}`}
                    >
                      <div className="font-display text-3xl">{stat.value}</div>
                      <div className="font-body text-xs uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shapes — scroll animated, random positions each load */}
      <ScrollShape zone="top" side="right" size="w-16 h-16" shape="shape-dots" animation="scroll-spin-in" postAnimation="post-float" delay="0.1s" />
      <ScrollShape zone="bottom" side="left" size="w-14 h-14" shape="shape-grid" animation="scroll-slide-rotate-left" rotate="rotate-45" delay="0.2s" />
      <ScrollShape zone="mid" side="left" size="w-14 h-14" shape="shape-stripes-pink" animation="scroll-scale-up" postAnimation="post-wiggle" rounded delay="0.3s" />
      <ScrollShape zone="bottom" side="right" size="w-16 h-16" shape="shape-checkerboard" animation="scroll-bounce-in" postAnimation="post-pulse" delay="0.4s" />
      <ScrollShape zone="mid" side="right" size="w-14 h-14" shape="shape-rings" animation="scroll-drop-in" rounded delay="0.5s" hideBelow="lg" />
      <ScrollShape zone="mid" side="left" size="w-16 h-16" shape="shape-stripes-teal" animation="scroll-flip-in" delay="0.35s" />
      <ScrollShape zone="top" side="left" size="w-16 h-16 xl:w-18 xl:h-18" shape="shape-stripes-teal" animation="scroll-zoom-rotate" postAnimation="post-float" delay="0.15s" hideBelow="lg" />
      <ScrollShape zone="bottom" side="right" size="w-18 h-18 xl:w-20 xl:h-20" shape="shape-grid" animation="scroll-slide-rotate-right" postAnimation="post-wiggle" delay="0.25s" />
      <ScrollShape zone="mid" side="right" size="w-16 h-16" shape="shape-dots" animation="scroll-drop-in" postAnimation="post-pulse" rounded delay="0.45s" />
      <ScrollShape zone="bottom" side="left" size="w-18 h-18" shape="shape-checkerboard" animation="scroll-spin-in" delay="0.55s" rotate="-rotate-6" />
    </section>
  );
};

export default AboutSection;
