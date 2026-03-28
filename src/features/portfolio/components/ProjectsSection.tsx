import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";

const projects = [
  {
    title: "Project One",
    description:
      "A modern web application built with React and Node.js. Features real-time updates and beautiful UI.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "bg-neo-pink",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "E-commerce platform with seamless checkout experience and inventory management system.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "bg-neo-cyan",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "Mobile-first dashboard for analytics and data visualization with interactive charts.",
    tags: ["TypeScript", "D3.js", "Tailwind"],
    color: "bg-neo-orange",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Four",
    description:
      "AI-powered content management system with automated workflows and smart suggestions.",
    tags: ["Python", "React", "OpenAI"],
    color: "bg-neo-yellow",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useScrollAnimation({ threshold: 0.15 });
  const rotation = index % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]";

  return (
    <div
      ref={cardRef.ref}
      className={`neo-card bg-background overflow-hidden group scroll-fade-in-up ${rotation} ${
        cardRef.isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Project Image */}
      <div className={`relative h-44 sm:h-52 ${project.color} overflow-hidden`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover mix-blend-multiply opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
        />
        {/* Subtle hatch overlay */}
        <div className="absolute inset-0 pattern-hatch pointer-events-none" />
        {/* Number Badge */}
        <div className="absolute top-3 left-3">
          <div className="neo-border rounded-lg bg-background px-2.5 py-1 font-display text-xs neo-shadow-sm">
            0{index + 1}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg sm:text-xl leading-tight mb-2">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4 leading-[1.6]">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="neo-border rounded-lg px-2.5 py-1 text-[0.65rem] sm:text-xs font-display uppercase tracking-wide bg-background neo-shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2.5">
          <Button
            asChild
            className="neo-button bg-primary text-foreground font-body h-auto py-2 px-4 text-xs sm:text-sm group/btn"
          >
            <a href={project.liveUrl} className="flex items-center gap-1.5">
              Live Demo
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="neo-button bg-background text-foreground font-body h-auto py-2 px-4 text-xs sm:text-sm"
          >
            <a href={project.githubUrl} className="flex items-center gap-1.5">
              Code <Github className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 relative overflow-hidden bg-background pattern-teal-check"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          ref={headerRef.ref}
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14 scroll-fade-in-up ${
            headerRef.isVisible ? "visible" : ""
          }`}
        >
          <div>
            <div className="inline-flex items-center neo-tag bg-neo-yellow rotate-1 px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-white ring-2 ring-foreground mr-2.5" />
              <span className="font-display text-xs tracking-[0.15em] uppercase">
                My Work
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl leading-[1.05]">
              Featured{" "}
              <span className="text-primary">Projects</span>
              <span className="text-accent">.</span>
            </h2>
          </div>
          <Button
            asChild
            className="neo-button bg-neo-yellow text-foreground font-body h-auto py-2.5 px-5 text-sm self-start group"
          >
            <a href="#" className="flex items-center gap-2">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-[8%] right-[4%] hidden lg:block animate-float-1">
        <div className="w-14 h-14 xl:w-20 xl:h-20 rounded-full neo-border-thick shape-stripes-pink neo-shadow" />
      </div>
      <div className="absolute bottom-[10%] left-[3%] hidden lg:block animate-float-4">
        <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-2xl neo-border-thick shape-checkerboard neo-shadow rotate-12" />
      </div>
    </section>
  );
};

export default ProjectsSection;
