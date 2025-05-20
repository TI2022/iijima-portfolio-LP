"use client";

import { PROJECTS_DATA } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/lib/contexts/language-context";
import { translations } from "@/lib/translations";

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const t = translations[language];

  if (!PROJECTS_DATA) {
    return null;
  }

  return (
    <section
      id="projects"
      className="py-20 bg-muted/50"
      ref={ref}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-4 py-1">
              {t.projects.title}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              {t.projects.subtitle}
            </h2>
            <p className="max-w-[42rem] text-muted-foreground md:text-xl/relaxed">
              {t.projects.description}
            </p>
          </div>
        </div>

        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 opacity-0 translate-y-8 transition-all duration-700",
            isInView && "opacity-100 translate-y-0"
          )}
        >
          {PROJECTS_DATA.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-primary/10 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                {project.featured && (
                  <Badge className="absolute top-4 right-4">
                    {t.projects.featured}
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                {project.demoUrl && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t.projects.liveDemo}
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t.projects.sourceCode}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}