import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "CodeScalers Egypt",
      role: "Software Engineer",
      period: "Jul 2024 - Sep 2024",
      location: "Egypt",
      type: "Internship",
      projects: [
        {
          name: "Go SDK Development",
          description: "Added graphqlurl support to tfpluginclient and integrated WireGuard deployment into tfrobot, expanding network and configuration capabilities for developers on the ThreeFold Grid."
        },
        {
          name: "Spawner Tool",
          description: "Developed a command-line tool using Go for spawning and destroying benchmark VMs on the Threefold Grid, with results managed in InfluxDB, streamlining VM management and enhancing user experience."
        },
        {
          name: "TFVPN",
          description: "Built a tool for instant VPN connection via the ThreeFold Grid, tunneling all traffic through the server."
        },
        {
          name: "TypeScript SDK",
          description: "Worked on the TypeScript SDK to facilitate the integration of Jenkins into applications. Created an FLIST using Docker and Zero-OS Hub to run Jenkins seamlessly, enabling efficient CI/CD workflows for developers."
        },
        {
          name: "Secret Note",
          description: "Built secure, self-destructing note-sharing application using Go for backend and Vue.js for frontend."
        }
      ],
      technologies: ["Go", "TypeScript", "Docker", "GitHub Actions", "Vue.js", "REST APIs", "Microservices"]
    },
    {
      company: "ALX Scholarship Program",
      role: "Software Engineering Intern",
      period: "Jun 2023 - Dec 2023",
      location: "Remote",
      type: "Internship",
      projects: [
        {
          name: "Shell Interpreter",
          description: "Implemented a complete Unix shell interpreter in C, supporting command execution, pipes, redirections, and built-in commands."
        },
        {
          name: "Printf Implementation",
          description: "Created custom printf function from scratch in C, handling various format specifiers and edge cases."
        },
        {
          name: "Linux System Projects",
          description: "Developed various system-level applications including file systems, memory management, and process management tools."
        }
      ],
      technologies: ["C", "Python", "Linux", "System Programming", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative solutions and contributing to impactful projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-interactive animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                {/* Company header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Projects & Contributions</h4>
                  <div className="grid gap-4">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="border-l-2 border-primary/20 pl-4 py-2">
                        <h5 className="font-medium text-foreground mb-1">{project.name}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}