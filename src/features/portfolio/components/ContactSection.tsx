import { Mail, Linkedin, Github, Twitter, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useScrollAnimation } from "@/features/portfolio/hooks/use-scroll-animation";

const socials = [
  { icon: Linkedin, label: "LinkedIn", url: "#", color: "bg-neo-cyan" },
  { icon: Github, label: "GitHub", url: "#", color: "bg-neo-yellow" },
  { icon: Twitter, label: "Twitter", url: "#", color: "bg-neo-pink" },
  { icon: Mail, label: "Email", url: "mailto:your@email.com", color: "bg-neo-orange" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const formRef = useScrollAnimation({ threshold: 0.2 });
  const socialRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 relative overflow-hidden bg-background pattern-pink-stripe">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          ref={headerRef.ref}
          className={`mb-10 sm:mb-14 scroll-fade-in-up ${headerRef.isVisible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center neo-tag bg-neo-pink -rotate-1 px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-white ring-2 ring-foreground mr-2.5" />
            <span className="font-display text-xs tracking-[0.15em] uppercase">Connect</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl leading-[1.05] mb-3">
            Let's Work{" "}
            <span className="text-primary">Together</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg leading-[1.7] max-w-lg text-muted-foreground">
            Have a project in mind? I'd love to hear about it.
            Drop me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form Card */}
          <div
            ref={formRef.ref}
            className={`scroll-fade-in-up ${formRef.isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <form
              onSubmit={handleSubmit}
              className="neo-card-lg bg-neo-gold p-6 sm:p-8 rotate-[0.5deg] relative"
            >
              {/* Subtle overlay */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-white/10 pointer-events-none" />

              <div className="relative z-10 space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <Label className="font-display text-xs uppercase tracking-wider block mb-2">Your Name</Label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="neo-input font-body text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label className="font-display text-xs uppercase tracking-wider block mb-2">Email</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="neo-input font-body text-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label className="font-display text-xs uppercase tracking-wider block mb-2">Message</Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="neo-input font-body text-sm min-h-[140px] resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="neo-button bg-primary text-foreground font-body w-full h-auto py-3 text-sm sm:text-base flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column — Socials + Availability */}
          <div
            ref={socialRef.ref}
            className={`space-y-6 scroll-fade-in-up ${socialRef.isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Social Links */}
            <div className="neo-card bg-background p-5 sm:p-6 -rotate-[0.5deg]">
              <h3 className="font-display text-base sm:text-lg mb-4">Find Me Online</h3>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className={`neo-card-static ${social.color} p-3 sm:p-4 flex items-center gap-2.5 rounded-xl group hover:translate-y-[-4px] hover:neo-shadow-md transition-all`}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/90 neo-border flex items-center justify-center flex-shrink-0 neo-shadow-sm">
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="font-display text-xs sm:text-sm">{social.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="neo-card bg-secondary p-5 sm:p-6 rotate-[0.5deg] relative">
              <div className="absolute inset-0 rounded-[1rem] bg-white/15 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 ring-2 ring-foreground animate-pulse-scale" />
                  <span className="font-display text-sm sm:text-base">Currently Available</span>
                </div>
                <p className="font-body text-sm leading-[1.6] font-medium">
                  I'm open to freelance projects, full-time opportunities,
                  and interesting collaborations. Let's talk!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-[12%] right-[5%] hidden lg:block animate-float-2">
        <div className="w-14 h-14 xl:w-18 xl:h-18 rounded-full neo-border-thick shape-stripes-teal neo-shadow" />
      </div>
      <div className="absolute bottom-[8%] left-[4%] hidden lg:block animate-float-6">
        <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-xl neo-border-thick shape-dots neo-shadow rotate-6" />
      </div>
    </section>
  );
};

export default ContactSection;
