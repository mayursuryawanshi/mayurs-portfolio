import { Mail, Linkedin, Github, Twitter, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const socials = [
  { icon: Linkedin, label: "LinkedIn", url: "#", color: "bg-neo-cyan" },
  { icon: Github, label: "GitHub", url: "#", color: "bg-neo-mint" },
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

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="neo-tag bg-neo-pink mb-4 px-4 py-2">
            <span className="w-3 h-3 rounded-full bg-foreground mr-2" />
            <span className="font-body text-sm tracking-widest uppercase">Get in Touch</span>
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Let's Work Together</h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Drop me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="neo-card bg-neo-cream p-8">
            <div className="space-y-6">
              <div>
                <Label className="font-display text-sm block mb-2">Your Name</Label>
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
                <Label className="font-display text-sm block mb-2">Email Address</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="neo-input font-body"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <Label className="font-display text-sm block mb-2">Your Message</Label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="neo-input font-body min-h-[150px] resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="neo-button bg-primary text-foreground font-body w-full h-auto py-3 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </Button>
            </div>
          </form>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="neo-card bg-neo-mint p-8">
              <h3 className="font-display text-2xl mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className={`neo-card ${social.color} p-4 flex items-center gap-3 group`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-background neo-border flex items-center justify-center">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="font-body font-semibold">{social.label}</span>
                    <ArrowUpRight className="w-4 h-4 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="neo-card bg-neo-orange p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-neo-mint neo-border animate-pulse-scale" />
                <span className="font-display text-lg">Currently Available</span>
              </div>
              <p className="font-body">
                I'm open to freelance projects, full-time opportunities, 
                and interesting collaborations. Let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-1/2 right-5 hidden xl:block">
        <div className="w-16 h-16 bg-neo-cyan neo-border rounded-full animate-bounce-subtle" />
      </div>
    </section>
  );
};

export default ContactSection;
