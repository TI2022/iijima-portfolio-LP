"use client";

import { useRef } from "react";
import { PROJECTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Filter featured projects first
  const sortedProjects = [...PROJECTS].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

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
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              My Projects
            </h2>
            <p className="max-w-[42rem] text-muted-foreground md:text-xl/relaxed">
              A showcase of my recent work and technical achievements
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {sortedProjects.map((project, index) => (
            <Card 
              key={index}
              className={cn(
                "overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/10 opacity-0 translate-y-8 transition-all duration-700",
                isInView && `opacity-100 translate-y-0 delay-[${index * 200}ms]`
              )}
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : "0ms"
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Featured
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between gap-4">
                {project.demoUrl && (
                  <Button asChild variant="default" className="w-full">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Link>
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