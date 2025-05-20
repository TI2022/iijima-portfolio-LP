"use client";

import { ABOUT_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Mail } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="py-20 bg-muted/50"
      ref={ref}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-4 py-1">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              My Background
            </h2>
            <p className="max-w-[42rem] text-muted-foreground md:text-xl/relaxed">
              Get to know my professional journey and approach to software development
            </p>
          </div>
        </div>
        
        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 opacity-0 translate-y-8 transition-all duration-700",
            isInView && "opacity-100 translate-y-0"
          )}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>{ABOUT_DATA.summary}</p>
                <p>{ABOUT_DATA.background}</p>
                <p>{ABOUT_DATA.philosophy}</p>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                <span>{ABOUT_DATA.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                <span>{ABOUT_DATA.availability}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-2" />
                <span>{ABOUT_DATA.email}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/10">
              <CardContent className="p-6">
                <div className="font-bold text-3xl mb-4">6+</div>
                <div className="text-lg font-medium">Years of Experience</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Working with startups and enterprise clients
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/10">
              <CardContent className="p-6">
                <div className="font-bold text-3xl mb-4">30+</div>
                <div className="text-lg font-medium">Projects Completed</div>
                <p className="text-sm text-muted-foreground mt-2">
                  From concept to successful deployment
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/10">
              <CardContent className="p-6">
                <div className="font-bold text-3xl mb-4">15+</div>
                <div className="text-lg font-medium">Happy Clients</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Delivering results that exceed expectations
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/10">
              <CardContent className="p-6">
                <div className="font-bold text-3xl mb-4">8+</div>
                <div className="text-lg font-medium">Technologies</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Expertise in multiple tech stacks
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}