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
  { icon: Twitter, label: "Twitter", url: "#", color: "bg-neo-mint" },
  { icon: Mail, label: "Email", url: "mailto:your@email.com", color: "bg-neo-orange" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const formRef = useScrollAnimation({ threshold: 0.2 });
  const socialRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-neo-yellow pattern-diagonal-stripe border-t-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef.ref}
          className={`mb-14 scroll-fade-in-up ${headerRef.isVisible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center neo-tag bg-neo-pink px-4 py-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-foreground mr-2.5" />
            <span className="font-display text-xs tracking-[0.15em] uppercase">Get in Touch</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-4">
            Let's Work<br />
            <span className="text-primary">Together</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="font-body text-lg max-w-lg text-muted-foreground">
            Have a project in mind? I'd love to hear about it.
            Drop me a message and let's create something{" "}
            <span className="bg-neo-yellow px-1 font-semibold neo-border inline-block">amazing</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <div
            ref={formRef.ref}
            className={`lg:col-span-7 scroll-fade-in-up ${formRef.isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 neo-card bg-neo-cyan rotate-1 translate-x-2 translate-y-2 hidden sm:block" />
              <form onSubmit={handleSubmit} className="neo-card-lg bg-white p-6 md:p-8 relative z-10">
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="font-display text-xs uppercase tracking-wider block mb-2">Your Name</Label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="neo-input font-body"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label className="font-display text-xs uppercase tracking-wider block mb-2">Email Address</Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="neo-input font-body"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="font-display text-xs uppercase tracking-wider block mb-2">Your Message</Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="neo-input font-body min-h-[150px] resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <Button type="submit" className="neo-button bg-primary text-primary-foreground font-body w-full h-auto py-3.5 text-base flex items-center justify-center gap-2 group">
                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={socialRef.ref}
            className={`lg:col-span-5 space-y-6 scroll-fade-in-up ${socialRef.isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Social Links */}
            <div className="neo-card bg-white p-6 md:p-8">
              <h3 className="font-display text-xl mb-5">Connect With Me</h3>
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className={`neo-card-static ${social.color} p-4 flex items-center gap-3 group hover:translate-y-[-3px] hover:neo-shadow-md transition-all`}
                  >
                    <div className="w-10 h-10 bg-white neo-border flex items-center justify-center flex-shrink-0 neo-shadow-sm">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="font-body font-semibold">{social.label}</span>
                    <ArrowUpRight className="w-4 h-4 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="relative">
              <div className="absolute inset-0 neo-card bg-neo-purple -rotate-2 translate-x-1 translate-y-1 hidden sm:block" />
              <div className="neo-card bg-neo-cyan p-6 md:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400 ring-2 ring-foreground animate-pulse-scale" />
                  <span className="font-display text-lg">Currently Available</span>
                </div>
                <p className="font-body leading-relaxed">
                  I'm open to freelance projects, full-time opportunities,
                  and interesting collaborations. Let's talk!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[12%] right-[5%] hidden xl:block animate-float-2">
        <div className="w-14 h-14 neo-border-thick shape-stripes-teal neo-shadow" />
      </div>
      <div className="absolute bottom-[8%] left-[4%] hidden xl:block animate-float-6">
        <div className="w-12 h-12 neo-border-thick shape-dots neo-shadow" />
      </div>
    </section>
  );
};

export default ContactSection;
