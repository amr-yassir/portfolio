import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "ThreeFold Spawner Tool",
      description: "A command-line tool using Go for spawning and destroying benchmark VMs on the Threefold Grid, with results managed in InfluxDB, streamlining VM management and enhancing user experience.",
      technologies: ["Go", "InfluxDB", "CLI", "ThreeFold Grid"],
      github: "https://github.com/threefoldtech/guardians_healthchecker/tree/development/spawner",
      category: "Open Source",
      status: "Active"
    },
    {
      title: "Secret Note",
      description: "Secure note-sharing application with end-to-end encryption and time-based expiration. Features include password protection, automatic deletion, and secure sharing links.",
      technologies: ["Go", "TypeScript", "Vue.js", "Encryption", "REST APIs"],
      github: "https://github.com/codescalersinternships/secret-note-api-spa-amr",
      category: "Web Application",
      status: "Completed"
    },
    {
      title: "tfVPN",
      description: "tfvpn is a tool that instantly connects you to a vpn server located on the threefold grid and tunnels all of your traffic through the server.",
      technologies: ["Go", "Python", "Networking", "VPN"],
      github: "https://github.com/codescalersinternships/tfvpn",
      category: "Systems Programming",
      status: "Completed"
    },
    {
      title: "RESP Parser",
      description: "High-performance Redis Serialization Protocol (RESP) parser implementation in Go. Handles all RESP data types with optimized parsing algorithms and comprehensive error handling.",
      technologies: ["Go", "Protocol Parsing", "Performance Optimization"],
      github: "https://github.com/codescalersinternships/resp-parser-amr/tree/development",
      category: "Systems Programming",
      status: "Completed"
    },
    {
      title: "INI Parser",
      description: "Robust INI file configuration parser with support for sections, comments, and data type conversion. Designed for high-performance applications requiring fast configuration loading.",
      technologies: ["Go", "File Processing", "Configuration Management"],
      github: "https://github.com/codescalersinternships/amryassir-inigo/tree/development",
      category: "Utility Library",
      status: "Completed"
    },
    {
      title: "Coreutils Implementation",
      description: "Modern implementation of essential Unix command-line utilities in Go. Includes ls, cat, grep, and other fundamental tools with enhanced features and cross-platform compatibility.",
      technologies: ["Go", "CLI", "Unix Systems", "Cross-platform"],
      github: "https://github.com/codescalersinternships/coreutils-amr/tree/development",
      category: "Systems Programming",
      status: "Completed"
    },
    {
      title: "Shell Interpreter",
      description: "Complete Unix shell implementation in C with support for command execution, pipes, redirections, built-in commands, and job control. Built as part of ALX Software Engineering program.",
      technologies: ["C", "System Calls", "Process Management", "Unix"],
      github: "https://github.com/amr-yassir/simple_shell",
      category: "Systems Programming",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "In Progress":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "Completed":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work in systems programming, web development, and open-source contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-interactive animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <Badge className={`text-xs border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  {project.status === "Active" || project.status === "Completed" ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Card className="card-gradient max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Explore More Projects</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects, contributions, and ongoing work
              </p>
              <Button 
                className="btn-hero"
                onClick={() => window.open('https://github.com/amr-yassir', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}