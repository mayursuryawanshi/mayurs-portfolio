import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";
import ScrollShape from "./ScrollShape";

const projects = [
  {
    title: "commit-sage",
    description:
      "An AI-powered CLI tool that reviews your staged Git changes before you commit. Catches bugs, security issues, and performance problems using Gemini, OpenAI, or Anthropic — works as a pre-commit hook with zero platform setup.",
    tags: ["TypeScript", "Node.js", "CLI", "AI"],
    color: "bg-neo-cyan",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    liveUrl: "https://www.npmjs.com/package/commit-sage",
    githubUrl: "https://github.com/mayursuryawanshi/commit-sage",
  },
  {
    title: "GitHub PR History",
    description:
      "A developer productivity tool to fetch and view your GitHub pull request history. Filter PRs by status, date range, and repository with summary generation for performance reviews.",
    tags: ["JavaScript", "GitHub API", "CSS"],
    color: "bg-neo-orange",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=80",
    liveUrl: "https://mayursuryawanshi.github.io/github-history/",
    githubUrl: "https://github.com/mayursuryawanshi/github-history",
  },
  {
    title: "Horoscope",
    description:
      "A daily horoscope web app that delivers zodiac sign readings. Select your sign to get personalized astrological insights, built with vanilla JavaScript and deployed on GitHub Pages.",
    tags: ["JavaScript", "CSS", "HTML"],
    color: "bg-neo-yellow",
    image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&q=80",
    liveUrl: "https://mayursuryawanshi.github.io/horoscope/",
    githubUrl: "https://github.com/mayursuryawanshi/horoscope",
  },
  {
    title: "Portfolio Website",
    description:
      "A neobrutalist-inspired personal portfolio featuring dark/light theme toggle, smooth scroll animations, responsive design, and a contact form with validation.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    color: "bg-neo-mint",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    liveUrl: "https://mayursuryawanshi.in",
    githubUrl: "https://github.com/mayursuryawanshi/mayurs-portfolio",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
  reverse?: boolean;
}

const ProjectCard = ({ project, index, reverse }: ProjectCardProps) => {
  const cardRef = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={cardRef.ref}
      className={`grid md:grid-cols-12 gap-0 scroll-fade-in-up ${cardRef.isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Image Side */}
      <div className={`md:col-span-5 relative group ${reverse ? "md:order-2" : ""}`}>
        <div className="absolute inset-0 neo-card bg-foreground translate-x-2 translate-y-2 hidden sm:block" />
        <div className={`neo-card ${project.color} h-56 md:h-full overflow-hidden relative z-10`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:scale-105 group-hover:opacity-85 transition-all duration-500"
          />
          <div className="absolute inset-0 pattern-cross-hatch pointer-events-none" />
          <div className="absolute top-4 left-4">
            <div className="neo-border bg-white px-3 py-1 font-display text-sm neo-shadow-sm">
              0{index + 1}
            </div>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className={`md:col-span-7 ${reverse ? "md:order-1" : ""}`}>
        <div className={`neo-card bg-white p-6 md:p-8 h-full flex flex-col justify-center ${reverse ? "md:-mr-4" : "md:-ml-4"} relative z-20 mt-[-1px] md:mt-0`}>
          <h3 className="font-display text-2xl md:text-3xl mb-3">{project.title}</h3>
          <p className="font-body text-base text-muted-foreground mb-5 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="neo-border px-3 py-1 text-xs font-display uppercase tracking-wide bg-neo-cream neo-shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {"liveUrl" in project && project.liveUrl && (
              <Button asChild className="neo-button bg-primary text-primary-foreground font-body h-auto py-2.5 px-5 text-sm group">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Live Demo <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            )}
            <Button asChild variant="secondary" className="neo-button bg-white text-foreground font-body h-auto py-2.5 px-5 text-sm">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Code <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-neo-purple pattern-grid-diagonal border-t-4 border-foreground">
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={headerRef.ref}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 scroll-fade-in-up ${headerRef.isVisible ? "visible" : ""}`}
        >
          <div>
            <div className="inline-flex items-center neo-tag bg-neo-yellow px-4 py-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-foreground mr-2.5" />
              <span className="font-display text-xs tracking-[0.15em] uppercase">My Work</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
              Featured<br />
              <span className="text-primary">Projects</span>
              <span className="text-accent">.</span>
            </h2>
          </div>
          <Button asChild className="neo-button bg-neo-yellow text-foreground font-body h-auto py-3 px-6 self-start group">
            <a href="https://github.com/mayursuryawanshi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>

      {/* Floating Shapes — scroll animated, random positions each load */}
      <ScrollShape zone="bottom" side="left" size="w-14 h-14" shape="shape-checkerboard" animation="scroll-zoom-rotate" postAnimation="post-wiggle" rotate="rotate-12" delay="0.1s" />
      <ScrollShape zone="top" side="right" size="w-14 h-14" shape="shape-stripes-pink" animation="scroll-spin-in" postAnimation="post-float" rounded delay="0.2s" />
      <ScrollShape zone="top" side="left" size="w-14 h-14" shape="shape-dots" animation="scroll-bounce-in" postAnimation="post-pulse" delay="0.3s" />
      <ScrollShape zone="mid" side="right" size="w-16 h-16" shape="shape-grid" animation="scroll-slide-rotate-right" delay="0.25s" />
      <ScrollShape zone="mid" side="right" size="w-14 h-14" shape="shape-rings" animation="scroll-flip-in" rounded delay="0.4s" hideBelow="lg" />
      <ScrollShape zone="mid" side="left" size="w-14 h-14" shape="shape-stripes-teal" animation="scroll-drop-in" delay="0.45s" hideBelow="lg" />
      <ScrollShape zone="bottom" side="right" size="w-16 h-16" shape="shape-checkerboard" animation="scroll-scale-up" postAnimation="post-wiggle" delay="0.5s" />
      <ScrollShape zone="top" side="left" size="w-18 h-18 xl:w-20 xl:h-20" shape="shape-rings" animation="scroll-spin-in" postAnimation="post-float" rounded delay="0.15s" hideBelow="lg" />
      <ScrollShape zone="bottom" side="right" size="w-16 h-16 xl:w-18 xl:h-18" shape="shape-stripes-teal" animation="scroll-slide-rotate-right" postAnimation="post-wiggle" delay="0.35s" />
      <ScrollShape zone="mid" side="left" size="w-16 h-16" shape="shape-stripes-pink" animation="scroll-bounce-in" postAnimation="post-pulse" delay="0.4s" />
      <ScrollShape zone="bottom" side="left" size="w-18 h-18" shape="shape-grid" animation="scroll-flip-in" rotate="rotate-12" delay="0.5s" />
      <ScrollShape zone="mid" side="left" size="w-16 h-16" shape="shape-dots" animation="scroll-zoom-rotate" rounded delay="0.55s" hideBelow="lg" />
    </section>
  );
};

export default ProjectsSection;
