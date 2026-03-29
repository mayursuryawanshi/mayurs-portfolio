import { MapPin, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";
import ScrollShape from "./ScrollShape";

const experiences = [
  {
    title: "Software Development Engineer - I",
    company: "House Works Inc",
    type: "Full-time",
    period: "Apr 2025 - Present",
    location: "Remote",
    description:
      "Building and maintaining healthcare products including EMR (Electronic Medical Records) and RBP (Review Board Platform). Developing full-stack features with React.js and TypeScript on the frontend, Python and Django on the backend. Working on AI-powered features to enhance clinical workflows and patient data management.",
    skills: [
      "React.js",
      "TypeScript",
      "Python",
      "Django",
      "AI/ML",
      "Healthcare",
    ],
    color: "bg-neo-cyan",
    current: true,
  },
  {
    title: "Software Development Engineer Intern",
    company: "House Works Inc",
    type: "Internship",
    period: "Feb 2025 - Mar 2025",
    location: "Remote",
    description:
      "Contributed to healthcare product development for EMR and RBP platforms using React.js, Next.js, and TypeScript. Styled interfaces with Tailwind CSS and Ant Design for clean, consistent UI across clinical workflows. Used GitHub for version control and collaborative development.",
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Ant Design"],
    color: "bg-neo-yellow",
  },
  {
    title: "Software Development Engineer Trainee",
    company: "Procedure",
    type: "Apprenticeship",
    period: "Oct 2024 - Feb 2025",
    location: "Mumbai, Maharashtra, India",
    description:
      "Gained practical experience in full-stack development using TypeScript, React.js, and NestJS. Built modern, responsive UIs with shadcn/ui, focusing on accessibility and design consistency. Containerized applications with Docker and automated infrastructure using Terraform.",
    skills: [
      "TypeScript",
      "React.js",
      "NestJS",
      "Docker",
      "Terraform",
      "shadcn/ui",
    ],
    color: "bg-neo-orange",
  },
  {
    title: "MERN Stack Intern",
    company: "R3 Systems India Pvt. Ltd.",
    type: "Internship",
    period: "Jan 2023 - Feb 2023",
    location: "Shirpur, Maharashtra, India",
    description:
      "Utilized MERN stack, including MongoDB, Express.js, React.js, and Node.js. Applied Bootstrap, CSS, and HTML for frontend development.",
    skills: ["Node.js", "MongoDB", "Express.js", "React.js", "Bootstrap"],
    color: "bg-neo-mint",
  },
  {
    title: "Java Developer Intern",
    company: "R3 Systems India Pvt. Ltd.",
    type: "Internship",
    period: "Aug 2022 - Sep 2022",
    location: "Shirpur, Maharashtra, India",
    description:
      "Mastered Core Java, Advanced Java, JDBC, Servlets, and JSP. Introduced to Spring and Spring Boot frameworks. Conducted rigorous unit testing and debugging, ensuring 95% code quality and performance.",
    skills: ["Java", "JSP", "JDBC", "Spring Boot", "Servlets"],
    color: "bg-neo-pink",
  },
];

const ExperienceSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-neo-cream pattern-grid-diagonal border-t-4 border-foreground"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={headerRef.ref}
          className={`mb-14 scroll-fade-in-up ${
            headerRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="inline-flex items-center neo-tag bg-neo-cyan px-4 py-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-foreground mr-2.5" />
            <span className="font-display text-xs tracking-[0.15em] uppercase">
              Career Path
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
            Work
            <br />
            <span className="text-primary">Experience</span>
            <span className="text-accent">.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-foreground neo-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const cardRef = useScrollAnimation({ threshold: 0.15 });
              return (
                <div
                  key={`${exp.company}-${exp.title}`}
                  ref={cardRef.ref}
                  className={`relative pl-0 sm:pl-20 md:pl-24 scroll-fade-in-up ${
                    cardRef.isVisible ? "visible" : ""
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-6 top-6 hidden sm:flex">
                    <div
                      className={`w-5 h-5 neo-border ${
                        exp.current ? "bg-neo-yellow" : "bg-white"
                      } neo-shadow-sm z-10 ${
                        exp.current ? "animate-pulse-scale" : ""
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className="relative">
                    <div className="absolute inset-0 neo-card bg-foreground translate-x-1.5 translate-y-1.5 hidden sm:block" />
                    <div
                      className={`neo-card bg-white p-6 md:p-8 relative z-10`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-display text-xl md:text-2xl">
                              {exp.title}
                            </h3>
                            {exp.current && (
                              <span className="neo-border bg-neo-yellow px-2 py-0.5 font-display text-[10px] uppercase tracking-wider neo-shadow-sm">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`neo-border ${exp.color} px-3 py-1 font-display text-sm`}
                            >
                              {exp.company}
                            </span>
                            <span className="neo-border bg-neo-cream px-2 py-0.5 font-body text-xs">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 text-muted-foreground shrink-0">
                          <div className="flex items-center gap-1.5 font-body text-sm">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1.5 font-body text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="neo-border px-3 py-1 text-xs font-display uppercase tracking-wide bg-neo-cream neo-shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <ScrollShape
        zone="top"
        side="right"
        size="w-14 h-14"
        shape="shape-stripes-pink"
        animation="scroll-spin-in"
        postAnimation="post-float"
        delay="0.1s"
      />
      <ScrollShape
        zone="bottom"
        side="left"
        size="w-14 h-14"
        shape="shape-dots"
        animation="scroll-bounce-in"
        postAnimation="post-pulse"
        delay="0.2s"
      />
      <ScrollShape
        zone="mid"
        side="right"
        size="w-16 h-16"
        shape="shape-checkerboard"
        animation="scroll-slide-rotate-right"
        postAnimation="post-wiggle"
        delay="0.3s"
      />
      <ScrollShape
        zone="top"
        side="left"
        size="w-16 h-16"
        shape="shape-grid"
        animation="scroll-drop-in"
        delay="0.35s"
        hideBelow="lg"
      />
      <ScrollShape
        zone="bottom"
        side="right"
        size="w-14 h-14"
        shape="shape-rings"
        animation="scroll-flip-in"
        rounded
        delay="0.4s"
      />
      <ScrollShape
        zone="mid"
        side="left"
        size="w-14 h-14"
        shape="shape-stripes-teal"
        animation="scroll-scale-up"
        delay="0.45s"
        hideBelow="lg"
      />
      <ScrollShape
        zone="bottom"
        side="left"
        size="w-18 h-18"
        shape="shape-stripes-pink"
        animation="scroll-zoom-rotate"
        postAnimation="post-float"
        rounded
        delay="0.5s"
      />
      <ScrollShape
        zone="top"
        side="right"
        size="w-16 h-16 xl:w-18 xl:h-18"
        shape="shape-dots"
        animation="scroll-bounce-in"
        postAnimation="post-pulse"
        delay="0.25s"
      />
    </section>
  );
};

export default ExperienceSection;
