import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-6 mx-auto py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Amr Gazia</h3>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building scalable solutions and contributing to open source. 
              Passionate about Go, systems programming, and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a 
                href="#about" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#experience" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/amr-yassir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/amryassir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:amryassir66@gmail.com"
                className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>📧 amryassir66@gmail.com</p>
              <p>📍 Egypt</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Amr Gazia. All rights reserved.</span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              This portfolio is open source and available on{" "}
              <a 
                href="https://github.com/amr-yassir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}