import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Settings, GitBranch, TestTube, Globe } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Go", level: 90, description: "Primary language for backend development and system tools" },
        { name: "Python", level: 85, description: "Data processing, automation, and scripting" },
        { name: "C", level: 80, description: "Systems programming and low-level development" },
        { name: "TypeScript", level: 85, description: "Type-safe web development and APIs" },
        { name: "JavaScript", level: 80, description: "Frontend development and Node.js" },
        { name: "C++", level: 70, description: "Object-oriented programming and algorithms" },
        { name: "SQL", level: 75, description: "Database design and query optimization" }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      icon: Settings,
      skills: [
        { name: "Docker", level: 85, description: "Containerization and orchestration" },
        { name: "Docker Compose", level: 80, description: "Multi-container application deployment" },
        { name: "GitHub Actions", level: 85, description: "CI/CD pipeline automation" },
        { name: "Makefiles", level: 75, description: "Build automation and task management" },
        { name: "Linux", level: 80, description: "System administration and shell scripting" }
      ]
    },
    {
      title: "Version Control & Testing",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 90, description: "Advanced version control and collaboration" },
        { name: "GitHub", level: 85, description: "Project management and code review" },
        { name: "Unit Testing", level: 80, description: "Test-driven development practices" },
        { name: "Integration Testing", level: 75, description: "End-to-end testing strategies" }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "Vue.js", level: 80, description: "Modern frontend framework development" },
        { name: "REST APIs", level: 85, description: "API design and implementation" },
        { name: "HTTP/HTTPS", level: 80, description: "Web protocols and security" },
        { name: "WebSockets", level: 70, description: "Real-time communication" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 75, description: "Relational database design and optimization" },
        { name: "Redis", level: 70, description: "Caching and session management" },
        { name: "SQLite", level: 80, description: "Embedded database applications" }
      ]
    },
    {
      title: "Development Practices",
      icon: TestTube,
      skills: [
        { name: "Microservices", level: 80, description: "Distributed system architecture" },
        { name: "API Design", level: 85, description: "RESTful and scalable API development" },
        { name: "Code Review", level: 85, description: "Quality assurance and collaboration" },
        { name: "Documentation", level: 80, description: "Technical writing and knowledge sharing" }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 75) return "bg-blue-500";
    if (level >= 65) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="card-interactive animate-fade-in h-fit" 
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill.level)}`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        ></div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional technical interests */}
        <div className="mt-16">
          <Card className="card-gradient max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Current Learning & Interests</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-3 text-primary">Exploring</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Kubernetes and container orchestration</li>
                    <li>• Rust programming language</li>
                    <li>• Distributed systems design patterns</li>
                    <li>• WebAssembly (WASM) applications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-primary">Interested In</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cloud-native development</li>
                    <li>• Machine learning integration</li>
                    <li>• Blockchain and decentralized systems</li>
                    <li>• Performance optimization techniques</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}