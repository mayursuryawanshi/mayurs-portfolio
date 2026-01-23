import { Code, Palette, Zap, Coffee } from "lucide-react";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";

const skills = [
  { name: "React", color: "bg-neo-cyan" },
  { name: "TypeScript", color: "bg-neo-pink" },
  { name: "Node.js", color: "bg-neo-mint" },
  { name: "Tailwind CSS", color: "bg-neo-orange" },
  { name: "Next.js", color: "bg-neo-purple" },
  { name: "Figma", color: "bg-neo-pink" },
  { name: "MongoDB", color: "bg-neo-mint" },
  { name: "PostgreSQL", color: "bg-neo-cyan" },
];

const traits = [
  { icon: Code, label: "Clean Code", desc: "Writing maintainable solutions" },
  { icon: Palette, label: "Design Eye", desc: "Attention to visual details" },
  { icon: Zap, label: "Fast Learner", desc: "Adapting to new technologies" },
  { icon: Coffee, label: "Dedicated", desc: "Committed to excellence" },
];

const AboutSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const leftRef = useScrollAnimation({ threshold: 0.2 });
  const rightRef = useScrollAnimation({ threshold: 0.2 });
  const decorativeRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <div id="about" className="py-20 px-4 relative bg-neo-pink stripes-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef.ref}
          className={`inline-flex items-center gap-2 neo-tag bg-neo-orange mb-8 scroll-fade-in-up ${
            headerRef.isVisible ? "visible" : ""
          }`}
        >
          <span className="w-3 h-3 rounded-full bg-foreground" />
          <span className="font-body text-sm tracking-widest uppercase">
            About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - About Text */}
          <div
            ref={leftRef.ref}
            className={`neo-card bg-neo-cream p-8 scroll-fade-in-up ${
              leftRef.isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="font-display text-3xl md:text-4xl mb-6">
              Developer & Designer
            </div>
            <div className="font-body text-lg leading-relaxed mb-6">
              I enjoy taking ideas from concept to execution and shaping
              experiences that genuinely help users. I prioritize
              maintainability because when the foundation is clean, the product
              becomes easier to improve.
            </div>
            <div className="font-body text-lg leading-relaxed">
              My goal is always to build systems that feel thoughtful and
              intentional, combining technical excellence with creative
              problem-solving.
            </div>

            {/* Traits Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {traits.map((trait) => (
                <div
                  key={trait.label}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg neo-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary neo-border flex items-center justify-center flex-shrink-0">
                    <trait.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm">{trait.label}</div>
                    <div className="font-body text-xs text-muted-foreground">
                      {trait.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div
            ref={rightRef.ref}
            className={`neo-card bg-neo-mint p-8 scroll-fade-in-up ${
              rightRef.isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="font-display text-2xl mb-6">Tech Stack</div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill.name}
                  className={`neo-tag ${skill.color} font-body animate-float`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-background rounded-lg neo-border p-6 text-center">
                <span className="font-display text-4xl text-primary">3+</span>
                <div className="font-body text-sm mt-2">Years Experience</div>
              </div>
              <div className="bg-background rounded-lg neo-border p-6 text-center">
                <span className="font-display text-4xl text-secondary">
                  20+
                </span>
                <div className="font-body text-sm mt-2">Projects Completed</div>
              </div>
              <div className="bg-background rounded-lg neo-border p-6 text-center">
                <span className="font-display text-4xl text-accent">15+</span>
                <div className="font-body text-sm mt-2">Happy Clients</div>
              </div>
              <div className="bg-background rounded-lg neo-border p-6 text-center">
                <span className="font-display text-4xl text-neo-purple">∞</span>
                <div className="font-body text-sm mt-2">Cups of Coffee</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div
        ref={decorativeRef.ref}
        className={`absolute top-10 right-10 hidden xl:block scroll-fade-in ${
          decorativeRef.isVisible ? "visible" : ""
        }`}
        style={{ transitionDelay: "0.4s" }}
      >
        <div className="w-32 h-32 rounded-full bg-neo-pink neo-border animate-spin-slow opacity-50" />
      </div>
    </div>
  );
};

export default AboutSection;