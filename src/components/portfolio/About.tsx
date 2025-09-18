import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building scalable solutions and continuously learning new technologies
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
                To become a well-rounded engineer building scalable and impactful systems that solve real-world problems and make a positive difference.
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
                To continuously learn, share knowledge, and build practical, secure, and user-friendly solutions that drive innovation and growth.
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
                  <span className="font-medium">GPA:</span> 3.86/4.0
                </p>
                <p className="text-sm">
                  <span className="font-medium">Years:</span> 2021 - 2026
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
                  I'm a dedicated Software Engineer with a passion for creating robust, scalable systems. 
                  My journey in technology spans across multiple domains, from low-level systems programming 
                  to modern web applications and DevOps practices.
                </p>
                <p className="mb-4">
                  Currently pursuing my degree in Communication and Computer Engineering at Mansoura University, 
                  I've gained hands-on experience through my work at CodeScalers Egypt and the ALX Scholarship Program, 
                  where I've contributed to various open-source projects and built practical solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new places, camping under the stars, 
                  reading about Islamic history, horse riding, or staying active through fitness training. 
                  I also enjoy unwinding with movies and series that inspire creativity and innovation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}