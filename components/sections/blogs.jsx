"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    title: "The Surprising Benefits of Saunas for Sleep",
    author: "Carolina Ramuski",
    readTime: "2 min read",
    image: "/api/placeholder/400/300",
  },
  {
    id: 2,
    title: "What About Caffeine?",
    author: "Carolina Ramuski",
    readTime: "3 min read",
    image: "/api/placeholder/400/300",
  },
  {
    id: 3,
    title: "Is Oversleeping Good?",
    author: "Carolina Ramuski",
    readTime: "4 min read",
    image: "/api/placeholder/400/300",
  },
  {
    id: 4,
    title: "Sleep Cycles",
    author: "Carolina Ramuski",
    readTime: "5 min read",
    image: "/api/placeholder/400/300",
  },
  {
    id: 5,
    title: "Understanding Your Chronotype",
    author: "Carolina Ramuski",
    readTime: "3 min read",
    image: "/api/placeholder/400/300",
  },
];

export function Blogs() {
  return (
    <section id="blogs" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex items-center justify-between mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground">
            Blogs
          </h2>

          {/* Navigation arrows for larger screens */}
          <div className="hidden lg:flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-muted"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-muted"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {blogs.slice(0, 4).map((blog) => (
            <Card key={blog.id} className="h-full">
              <CardHeader className="p-4 pb-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm">📝</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground">
                      {blog.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {blog.readTime}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-muted/20 rounded-2xl mb-4 flex items-center justify-center">
                  <span className="text-3xl">📖</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground line-clamp-2">
                  {blog.title}
                </h3>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button size="sm" className="w-full">
                  Read
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 horizontal-scroll no-scrollbar snap-x snap-mandatory">
            {blogs.map((blog) => (
              <Card key={blog.id} className="flex-shrink-0 w-72 snap-center">
                <CardHeader className="p-4 pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm">📝</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm text-foreground">
                        {blog.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {blog.readTime}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-muted/20 rounded-2xl mb-4 flex items-center justify-center">
                    <span className="text-3xl">📖</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {blog.title}
                  </h3>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button size="sm" className="w-full">
                    Read
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {blogs.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-muted" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
