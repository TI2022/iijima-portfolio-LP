"use client";

import { SKILLS_DATA } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/contexts/language-context";
import { translations } from "@/lib/translations";

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const t = translations[language];

  if (!SKILLS_DATA) {
    return null;
  }

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
              {t.skills.title}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              {t.skills.subtitle}
            </h2>
            <p className="max-w-[42rem] text-muted-foreground md:text-xl/relaxed">
              {t.skills.description}
            </p>
          </div>
        </div>

        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 opacity-0 translate-y-8 transition-all duration-700",
            isInView && "opacity-100 translate-y-0"
          )}
        >
          {SKILLS_DATA.map((skill, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
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