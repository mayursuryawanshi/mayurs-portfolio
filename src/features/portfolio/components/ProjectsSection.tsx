import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
    color: "bg-neo-mint",
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
  const cardRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <Card
      ref={cardRef.ref}
      className={`neo-card bg-neo-cream overflow-hidden group border-0 scroll-fade-in-up ${
        cardRef.isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div className={`relative h-48 ${project.color} overflow-hidden`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 diagonal-lines" />
      </div>

      {/* Project Content */}
      <CardContent className="p-6">
        <div className="font-display text-2xl mb-3">{project.title}</div>
        <div className="font-body text-muted-foreground mb-4">
          {project.description}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="px-3 py-1 text-xs font-body bg-background neo-border"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <Button
            asChild
            size="sm"
            className="neo-button bg-primary text-foreground font-body"
          >
            <a href={project.liveUrl} className="flex items-center gap-2">
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="neo-button bg-secondary text-foreground font-body"
          >
            <a href={project.githubUrl} className="flex items-center gap-2">
              Code <Github className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const decorativeRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      id="projects"
      className="py-20 px-4 relative bg-neo-cyan diagonal-lines"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef.ref}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 scroll-fade-in-up ${
            headerRef.isVisible ? "visible" : ""
          }`}
        >
          <div>
            <Badge
              variant="outline"
              className="neo-tag bg-neo-cyan mb-4 px-4 py-2"
            >
              <span className="w-3 h-3 rounded-full bg-foreground mr-2" />
              <span className="font-body text-sm tracking-widest uppercase">
                My Work
              </span>
            </Badge>
            <div className="font-display text-4xl md:text-5xl">
              Featured Projects
            </div>
          </div>
          <Button
            asChild
            className="neo-button bg-primary text-foreground font-body h-auto py-3 px-6 self-start"
          >
            <a href="#" className="flex items-center gap-2">
              View All <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative */}
      <div
        ref={decorativeRef.ref}
        className={`absolute bottom-20 left-5 hidden xl:block scroll-fade-in ${
          decorativeRef.isVisible ? "visible" : ""
        }`}
        style={{ transitionDelay: "0.3s" }}
      >
        <div className="w-20 h-20 bg-neo-purple neo-border rounded-lg rotate-45 animate-wiggle" />
      </div>
    </div>
  );
};

export default ProjectsSection;