"use client";

import { SKILLS_DATA } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/contexts/language-context";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const t = translations[language];

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Map skill names to translation keys
  const skillKeyMap: Record<string, keyof typeof t.skills> = {
    "Frontend Development": "frontend",
    "Backend Development": "backend",
    "Mobile Development": "mobile",
    "Database Design": "database",
    "DevOps & Cloud": "devops",
    "Web Technologies": "web"
  };

  if (!SKILLS_DATA) {
    return null;
  }

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-background to-muted/70 relative overflow-hidden"
      ref={ref}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="px-4 py-1 text-lg">
            {t.skills.title}
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            {t.skills.frontend.title}
          </h2>
          <p className="max-w-[48rem] text-muted-foreground md:text-xl/relaxed leading-relaxed">
            {t.skills.frontend.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((skill, index) => {
            const skillKey = skillKeyMap[skill.name];
            if (!skillKey) return null;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card/60 backdrop-blur-md border border-primary/20 rounded-xl p-6 shadow-xl transform transition-transform duration-300 hover:-translate-y-2"
              >
                <skill.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  {t.skills[skillKey].title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.skills[skillKey].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}