"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/contexts/language-context";
import { translations } from "@/lib/translations";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold tracking-tight"
        >
          <span className="text-xl">Iijima Tatsunori</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary"
          >
            {t.nav.about}
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:text-primary"
          >
            {t.nav.skills}
          </Link>
          {/* <Link
            href="#projects"
            className="text-sm font-medium hover:text-primary"
          >
            {t.nav.projects}
          </Link>
          <Link
            href="#blog"
            className="text-sm font-medium hover:text-primary"
          >
            {t.nav.blog}
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary"
          >
            {t.nav.contact}
          </Link> */}
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="ml-2"
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b z-50 animate-in slide-in-from-top">
          <nav className="container mx-auto py-4 px-8 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.skills}
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.projects}
            </Link>
            <Link
              href="#blog"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.blog}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="justify-start"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === "ja" ? "English" : "日本語"}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}