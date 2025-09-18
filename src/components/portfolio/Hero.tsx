import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          {/* Professional greeting */}
            <img src="../../src/assets/pic.png" alt="Amr Yassir" className="shadow-lg w-[250px] h-[250px] rounded-full mx-auto mb-4" />
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Software Engineer
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Amr Yassir</span>
            </h1>
          </div>

          {/* Bio and expertise */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Building scalable and impactful systems with{" "}
            <span className="text-primary font-semibold">Go</span>,{" "}
            <span className="text-primary font-semibold">Node.js</span>,
            and <span className="text-primary font-semibold">Modern DevOps practices</span>.
          </p>

          {/* Tech stack highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Go", "JavaScript", "TypeScript", "Node.js", "Docker", "Kubernetes", "Git", "GitHub Actions", "Linux", "CCNA"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg text-sm font-medium hover:border-primary/50 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="btn-hero group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/amr-yassir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/amryassir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:amryassir66@gmail.com"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}