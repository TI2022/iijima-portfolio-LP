"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/lib/contexts/language-context";
import { translations } from "@/lib/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer className="w-full border-t bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Iijima Tatsunori</h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>
          <div className="space-y-4">
            
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.footer.contact}</h3>
            <p className="text-sm text-muted-foreground">
              motorsports46animals@gmail.com
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.footer.social}</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/TI2022" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://x.com/tadanofurien?s=21&t=jhBqRne1ERNGuzDFQflNiw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.linkedin.com/in/%E8%BE%B0%E5%89%87-%E9%A3%AF%E5%B3%B6-88953a34a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Iijima Tatsunori. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}