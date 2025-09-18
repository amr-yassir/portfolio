import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Send,
  Coffee,
  MessageCircle
} from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "amryassir66@gmail.com",
      link: "mailto:amryassir66@gmail.com",
      description: "Best for detailed discussions and project inquiries"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/amryassir",
      link: "https://linkedin.com/in/amryassir",
      description: "Professional networking and career opportunities"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/amr-yassir",
      link: "https://github.com/amr-yassir",
      description: "Code collaboration and open source contributions"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the form data to a backend service
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a good conversation about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to collaborate on a project, have a job opportunity, 
                or simply want to connect with a fellow developer, I'd love to hear from you. 
                I'm particularly interested in opportunities involving Go, distributed systems, 
                and innovative technology solutions.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-interactive animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold mb-1">{method.title}</h4>
                        <a 
                          href={method.link}
                          target={method.title !== "Email" ? "_blank" : undefined}
                          rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                          className="text-primary hover:text-primary-glow transition-colors break-all"
                        >
                          {method.value}
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-hero flex-1"
                onClick={() => window.open('mailto:amryassir66@gmail.com?subject=Hello Amr!', '_blank')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary flex-1"
                onClick={() => window.open('https://linkedin.com/in/amryassir', '_blank')}
              >
                <Coffee className="h-4 w-4 mr-2" />
                Let's Chat
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="card-gradient">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your full name"
                        required
                        className="transition-all duration-300 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        required
                        className="transition-all duration-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?"
                      required
                      className="transition-all duration-300 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={5}
                      required
                      className="transition-all duration-300 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-hero">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  I typically respond within 24 hours. Looking forward to connecting with you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <Card className="card-gradient max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Based in Egypt</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Open to remote opportunities worldwide and local collaborations in Egypt. 
                Available for freelance projects, full-time positions, and consulting work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}