import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  Tent, 
  BookOpen, 
  Zap, 
  Dumbbell, 
  Film,
  Camera,
  Mountain
} from "lucide-react";

export function Interests() {
  const interests = [
    {
      icon: Plane,
      title: "Traveling",
      description: "Exploring new cultures, cuisines, and landscapes around the world. I believe travel broadens perspective and inspires creativity in problem-solving.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Tent,
      title: "Camping",
      description: "Finding peace in nature and disconnecting from the digital world. Camping helps me recharge and gain clarity for complex technical challenges.",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: BookOpen,
      title: "Islamic History",
      description: "Studying the rich heritage and scientific contributions of Islamic civilization. This interest deepens my appreciation for historical innovation and learning.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Zap,
      title: "Horse Riding",
      description: "The art of equestrian sports teaches patience, focus, and communication. These skills translate well into collaborative software development.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Dumbbell,
      title: "Fitness Training",
      description: "Maintaining physical health to support mental clarity and endurance. Regular exercise helps me stay focused during long coding sessions.",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Film,
      title: "Movies & Series",
      description: "Enjoying storytelling through cinema, especially sci-fi and technology-themed content that sparks imagination and innovation.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    }
  ];

  return (
    <section id="interests" className="section-padding bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Interests</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beyond coding, these activities keep me balanced, inspired, and continuously learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className="card-interactive animate-fade-in group" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${interest.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <interest.icon className={`h-8 w-8 ${interest.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {interest.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy section */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Life Philosophy</h3>
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                "Life is about continuous growth, meaningful connections, and making a positive impact. 
                Whether I'm debugging code, exploring a new trail, or learning about history, 
                I approach each experience with curiosity and dedication."
              </blockquote>
              <p className="text-muted-foreground">
                These diverse interests keep me grounded, provide fresh perspectives for problem-solving, 
                and remind me that the best solutions often come from unexpected places. 
                Balance in life leads to better code and more innovative thinking.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}