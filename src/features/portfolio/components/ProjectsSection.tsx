import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";

const projects = [
  {
    title: "Project One",
    description:
      "A modern web application built with React and Node.js. Features real-time updates and beautiful UI.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "bg-neo-cyan",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "E-commerce platform with seamless checkout experience and inventory management system.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "bg-neo-orange",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "Mobile-first dashboard for analytics and data visualization with interactive charts.",
    tags: ["TypeScript", "D3.js", "Tailwind"],
    color: "bg-neo-yellow",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Four",
    description:
      "AI-powered content management system with automated workflows and smart suggestions.",
    tags: ["Python", "React", "OpenAI"],
    color: "bg-neo-mint",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
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
            <Button asChild className="neo-button bg-primary text-primary-foreground font-body h-auto py-2.5 px-5 text-sm group">
              <a href={project.liveUrl} className="flex items-center gap-2">
                Live Demo <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="secondary" className="neo-button bg-white text-foreground font-body h-auto py-2.5 px-5 text-sm">
              <a href={project.githubUrl} className="flex items-center gap-2">
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
      <div className="max-w-7xl mx-auto">
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
            <a href="#" className="flex items-center gap-2">
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

      <div className="absolute bottom-[10%] left-[3%] hidden xl:block animate-float-4">
        <div className="w-14 h-14 neo-border-thick shape-checkerboard neo-shadow rotate-12" />
      </div>
      <div className="absolute top-[8%] right-[4%] hidden xl:block animate-float-1">
        <div className="w-12 h-12 rounded-full neo-border-thick shape-stripes-pink neo-shadow" />
      </div>
    </section>
  );
};

export default ProjectsSection;
