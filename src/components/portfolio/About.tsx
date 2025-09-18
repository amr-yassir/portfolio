import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Software Engineer specializing in backend development and DevOps, with experience in Go, Node.js, TypeScript, Docker, and Kubernetes. I build scalable APIs, developer tools, and automation workflows with a strong focus on clean code, testing, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Vision */}
          <Card className="card-interactive animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To engineer innovative and reliable software solutions that empower developers and organizations to work more efficiently, scale seamlessly, and deliver value through technology.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="card-interactive animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To leverage my expertise in Go, Node.js, and modern DevOps practices to build secure, scalable, and maintainable systems while continuously learning and contributing to impactful projects and open-source communities.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="card-interactive animate-fade-in md:col-span-2 lg:col-span-1" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="text-muted-foreground">
                <p className="font-medium text-foreground mb-1">B.Sc. Communication & Computer Engineering</p>
                <p className="text-sm mb-2">Mansoura University</p>
                <p className="text-sm">
                  <span className="font-medium">GPA:</span> 3.9/4.0
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional bio section */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Who I Am</h3>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  I a Software Engineer driven by curiosity and a love for solving problems with code. 
                  My journey began with exploring low-level programming in C and Python, where I built everything from a UNIX shell to system utilities. 
                  That foundation sparked my passion for creating tools that not only work but make developers’ lives easier.
                </p>
                <p className="mb-4">
                  Over time, I found myself diving deep into Go and Node.js, where I discovered the joy of building APIs, automation workflows, and scalable systems. 
                  During my experience at CodeScalers Egypt, I contributed to projects that ranged from secure note-sharing applications to VPN automation 
                  on the ThreeFold Grid—each challenge shaping my skills and mindset as an engineer.
                </p>
                <p>
                  What excites me most is the craft of turning complex ideas into simple, reliable, and impactful solutions. 
                  I believe in writing clean, tested, and maintainable code, and I’m always looking for opportunities to grow, learn, 
                  and contribute to projects that push the boundaries of what technology can do.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}