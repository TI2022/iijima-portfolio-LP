"use client";

import { Button } from "@/components/ui/button";
import { ABOUT_DATA, SOCIAL_LINKS } from "@/lib/constants";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/contexts/language-context";
import { translations } from "@/lib/translations";
import Image from "next/image";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/6106991.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="select-none pointer-events-none"
        />
        {/* Overlay to help with light/dark mode and text readability */}
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90 z-10" />
      </div>

      {/* Existing Background Pattern (optional, keep if desired) */}
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center z-0 opacity-5 dark:opacity-10" /> */}

      <div className="container max-w-7xl mx-auto px-4 md:px-6 z-20">
        <motion.div
          className="flex flex-col items-center text-center space-y-10"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          <motion.div
            className="space-y-2"
            variants={item}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              {ABOUT_DATA.name}
            </h1>
            <p className="text-lg md:text-lg text-muted-foreground">
              {t.hero.title}
            </p>
          </motion.div>

          <motion.p
            className="max-w-[42rem] text-xl md:text-2xl text-muted-foreground leading-normal"
            variants={item}
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
            variants={item}
          >
            {/* <Button asChild size="lg">
              <Link href="#about">{t.hero.viewWork}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#skills">{t.hero.getInTouch}</Link>
            </Button> */}
          </motion.div>

          <motion.div
            className="flex space-x-4"
            variants={item}
          >
            <Link 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/80 p-3 rounded-full hover:bg-secondary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/80 p-3 rounded-full hover:bg-secondary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/80 p-3 rounded-full hover:bg-secondary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" scroll={false}>
          <Button variant="ghost" size="icon" className="rounded-full h-20 w-20">
            <ArrowDown className="h-10 w-10" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}