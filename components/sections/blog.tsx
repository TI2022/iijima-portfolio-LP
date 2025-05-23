"use client";

import { BLOG_POSTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/contexts/language-context";
import { translations } from "@/lib/translations";

export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="blog"
      className="py-20"
      ref={ref}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-4 py-1">
              {t.blog.title}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              {t.blog.subtitle}
            </h2>
            <p className="max-w-[42rem] text-muted-foreground md:text-xl/relaxed">
              {t.blog.description}
            </p>
          </div>
        </div>

        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 opacity-0 translate-y-8 transition-all duration-700",
            isInView && "opacity-100 translate-y-0"
          )}
        >
          {BLOG_POSTS.map((post, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-primary/10">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="ghost" className="w-full justify-between group">
                  {t.blog.readArticle}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            {t.blog.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}