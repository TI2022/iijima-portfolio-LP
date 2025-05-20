"use client";

import { useRef } from "react";
import { BLOG_POSTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="blog"
      className="py-20"
      ref={ref}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-4 py-1">
              Blog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Recent Articles
            </h2>
            <p className="max-w-[42rem] text-muted-foreground md:text-xl/relaxed">
              Sharing insights and experiences from my journey in tech
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {BLOG_POSTS.map((post, index) => (
            <Card 
              key={index}
              className={cn(
                "overflow-hidden hover:shadow-md transition-all duration-300 opacity-0 translate-y-8 transition-all duration-700 bg-card/50 backdrop-blur-sm border border-primary/10",
                isInView && `opacity-100 translate-y-0 delay-[${index * 200}ms]`
              )}
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : "0ms"
              }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="rounded-full">
                    {post.platform}
                  </Badge>
                  <time className="text-sm text-muted-foreground">
                    {format(new Date(post.date), "MMM d, yyyy")}
                  </time>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <Separator />
              <CardFooter className="p-6">
                <Button asChild variant="ghost" className="px-0 hover:bg-transparent hover:text-primary">
                  <Link href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Read article
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline">
            <Link href="https://medium.com/@johndoe" target="_blank" rel="noopener noreferrer">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}