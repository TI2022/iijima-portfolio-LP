"use client";

import { ABOUT_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Mail, Phone, Code2, Database, Layers, Server, Smartphone, Globe } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/contexts/language-context";
import { translations } from "@/lib/translations";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Adjust amount for visibility trigger
  const { language } = useLanguage();
  const t = translations[language];

  // Data for highlight stats
  const highlightStats = [
    { label: "Years of Experience", value: "6+" },
    { label: "Projects Completed", value: "30+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Technologies", value: "8+" },
  ];

  // Sample data for skills - adjust based on your actual skills structure if needed
  const skills = [
    { name: "Frontend", icon: Code2 },
    { name: "Backend", icon: Server },
    { name: "Mobile", icon: Smartphone },
    { name: "Database", icon: Database },
    { name: "DevOps", icon: Layers },
    { name: "Web Tech", icon: Globe },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -20 }, // Add initial 3D rotation
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, // Rotate back to normal
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-muted/70 to-background relative overflow-hidden"
      ref={ref}
    >
      {/* Abstract Background Elements (3D feel) */}
      <div className="absolute inset-0 z-0">
         {/* Example: Simple angled elements */}
         <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/5 rotate-45 transform -translate-x-1/2 -translate-y-1/2" />
         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 -rotate-45 transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="px-4 py-1 text-lg"> {/* Changed badge style */}
            {t.about.title}
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"> {/* Larger title */}
            {t.about.subtitle}
          </h2>
          <p className="max-w-[48rem] text-muted-foreground md:text-xl/relaxed leading-relaxed"> {/* Wider paragraph */}
            {t.about.description}
          </p>
        </motion.div>

        {/* Main Content Grid (Non-Symmetrical) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ perspective: 1000 }} // Move perspective to style prop
        >

          {/* Left Column (Profile Image + Basic Info) */}
          <motion.div 
            className="md:col-span-1 flex flex-col items-center md:items-start space-y-6 text-center md:text-left"
            variants={itemVariants} // Apply item animation
          >
             <div className="relative w-full max-w-xs aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-primary/20 bg-card/60 backdrop-blur-md transform transition-transform duration-500 hover:rotate-3 hover:scale-105 group"> {/* Enhanced 3D effect on hover */}
              <Image
                src="/selfie.jpg"
                alt="Your Name"
                fill
                objectFit="cover"
                className="select-none pointer-events-none"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
            </div>
            <div className="space-y-2">
               <h3 className="text-3xl font-bold">{ABOUT_DATA.name}</h3>
               <p className="text-lg text-primary">{ABOUT_DATA.title}</p>
               <p className="text-muted-foreground">{t.hero.tagline} {/* Reusing tagline translation */}</p>
            </div>
          </motion.div>

          {/* Right Column (Story, Stats, Skills, Contact) */}
          <div className="md:col-span-2 space-y-12">

            {/* Story */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-foreground mb-6">{t.about.story}</h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>{t.about.summary}</p>
                <p>{t.about.background}</p>
                <p>{t.about.philosophy}</p>
              </div>
            </motion.div>

            {/* Idea */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-foreground mb-6">{t.about.idea}</h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>{t.about.summary2}</p>
                <p>{t.about.background2}</p>
                <p>{t.about.philosophy2}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}