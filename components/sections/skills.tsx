"use client";

import { useRef } from "react";
import { SKILLS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="skills"
      className="py-20"
      ref={ref}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-4 py-1">
              Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              My Skills
            </h2>
            <p className="max-w-[42rem] text-muted-foreground md:text-xl/relaxed">
              A comprehensive view of my technical expertise and proficiency
            </p>
          </div>
        </div>

        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 opacity-0 translate-y-8 transition-all duration-700",
            isInView && "opacity-100 translate-y-0"
          )}
        >
          {SKILLS.map((skillGroup, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/10"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
                <div className="space-y-5">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <SkillProgress value={skill.level} delay={idx * 0.1} isVisible={isInView} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillProgress({ 
  value, 
  delay,
  isVisible 
}: { 
  value: number;
  delay: number;
  isVisible: boolean;
}) {
  const animationStyle = {
    width: isVisible ? `${value}%` : "0%",
    transition: `width 1s ease ${delay}s`,
  };

  return (
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary" 
        style={animationStyle}
      />
    </div>
  );
}