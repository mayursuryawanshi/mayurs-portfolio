import { Code, Palette, Zap, Coffee } from "lucide-react";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";

const skills = [
  { name: "React", color: "bg-neo-cyan" },
  { name: "TypeScript", color: "bg-neo-pink" },
  { name: "Node.js", color: "bg-neo-yellow" },
  { name: "Tailwind CSS", color: "bg-neo-orange" },
  { name: "Next.js", color: "bg-neo-purple text-white" },
  { name: "Figma", color: "bg-neo-pink" },
  { name: "MongoDB", color: "bg-neo-cyan" },
  { name: "PostgreSQL", color: "bg-neo-yellow" },
];

const traits = [
  { icon: Code, label: "Clean Code", color: "bg-neo-cyan" },
  { icon: Palette, label: "Design Eye", color: "bg-neo-pink" },
  { icon: Zap, label: "Fast Learner", color: "bg-neo-yellow" },
  { icon: Coffee, label: "Dedicated", color: "bg-neo-orange" },
];

const AboutSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const cardRef = useScrollAnimation({ threshold: 0.15 });
  const skillsRef = useScrollAnimation({ threshold: 0.2 });
  const statsRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 relative overflow-hidden bg-background pattern-plaid">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Badge */}
        <div
          ref={headerRef.ref}
          className={`mb-10 sm:mb-14 scroll-fade-in-up ${headerRef.isVisible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center neo-tag bg-neo-orange -rotate-1 px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-white ring-2 ring-foreground mr-2.5" />
            <span className="font-display text-xs tracking-[0.15em] uppercase">About Me</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl leading-[1.05]">
            Developer &{" "}
            <span className="text-secondary">Designer</span>
            <span className="text-accent">.</span>
          </h2>
        </div>

        {/* Main Info Card — teal tinted, like inspiration */}
        <div
          ref={cardRef.ref}
          className={`scroll-fade-in-up ${cardRef.isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="neo-card-lg bg-secondary p-6 sm:p-8 md:p-10 rotate-[0.5deg] relative">
            {/* Subtle overlay */}
            <div className="absolute inset-0 rounded-[1.5rem] bg-white/15 pointer-events-none" />
            {/* Dot texture */}
            <div className="absolute inset-0 rounded-[1.5rem] pattern-dots-subtle pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-10">
              {/* Bio */}
              <div className="space-y-4">
                <p className="font-body text-sm sm:text-base md:text-lg leading-[1.7] font-medium">
                  I enjoy taking ideas from concept to execution and shaping
                  experiences that genuinely help users. I prioritize
                  maintainability because when the foundation is clean,
                  the product becomes easier to improve.
                </p>
                <p className="font-body text-sm sm:text-base md:text-lg leading-[1.7] font-medium">
                  My goal is always to build systems that feel thoughtful
                  and intentional — combining technical excellence with
                  creative problem-solving.
                </p>
              </div>

              {/* Traits Grid */}
              <div className="grid grid-cols-2 gap-3">
                {traits.map((trait) => (
                  <div
                    key={trait.label}
                    className={`neo-card-static ${trait.color} p-4 rounded-xl text-center`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/90 neo-border flex items-center justify-center mx-auto mb-2 neo-shadow-sm">
                      <trait.icon className="w-5 h-5" />
                    </div>
                    <div className="font-display text-xs sm:text-sm">{trait.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row — Skills + Stats side by side */}
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          {/* Tech Stack */}
          <div
            ref={skillsRef.ref}
            className={`neo-card bg-background p-5 sm:p-6 -rotate-[0.5deg] scroll-fade-in-up ${
              skillsRef.isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="font-display text-base sm:text-lg mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`neo-border rounded-xl p-2.5 text-center neo-shadow-sm hover:neo-shadow-md hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all ${skill.color}`}
                >
                  <span className="font-display text-[0.65rem] sm:text-xs uppercase tracking-wide">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef.ref}
            className={`neo-card bg-neo-gold p-5 sm:p-6 rotate-[0.5deg] scroll-fade-in-up ${
              statsRef.isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <h3 className="font-display text-base sm:text-lg mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "3+", label: "Years Exp" },
                { value: "20+", label: "Projects" },
                { value: "15+", label: "Clients" },
                { value: "∞", label: "Coffee" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="neo-border rounded-xl p-3 sm:p-4 text-center bg-white/50 neo-shadow-sm"
                >
                  <div className="font-display text-xl sm:text-2xl">{stat.value}</div>
                  <div className="font-display text-[0.6rem] sm:text-xs uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-[10%] right-[5%] hidden lg:block animate-float-3">
        <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full neo-border-thick shape-dots neo-shadow" />
      </div>
      <div className="absolute bottom-[12%] left-[4%] hidden lg:block animate-float-5">
        <div className="w-14 h-14 xl:w-18 xl:h-18 rounded-2xl neo-border-thick shape-grid neo-shadow rotate-6" />
      </div>
    </section>
  );
};

export default AboutSection;
