"use client";

import { ABOUT_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Mail } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/contexts/language-context";
import { translations } from "@/lib/translations";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="about"
      className="py-20 bg-muted/50"
      ref={ref}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-4 py-1">
              {t.about.title}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              {t.about.subtitle}
            </h2>
            <p className="max-w-[42rem] text-muted-foreground md:text-xl/relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
        
        <div 
          className={cn(
            "grid grid-cols-1 gap-8 mt-12 opacity-0 translate-y-8 transition-all duration-700 mx-auto",
            isInView && "opacity-100 translate-y-0"
          )}
        >
          <div className="space-y-6 mx-auto max-w-prose">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t.about.story}</h3>
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
        </div>
      </div>
    </section>
  );
}