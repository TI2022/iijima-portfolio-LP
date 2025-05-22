import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Iijima Tatsunori</h3>
            <p className="text-sm text-muted-foreground">
              Freelance software engineer specializing in modern web technologies
              and startup solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground">
                Skills
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link href="#blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm text-muted-foreground">
              hello@johndoe.dev
            </p>
            <p className="text-sm text-muted-foreground">
              Available for freelance work and consulting
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social</h3>
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
            © {new Date().getFullYear()} Iijima Tatsunori. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}