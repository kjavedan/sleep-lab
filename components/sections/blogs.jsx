"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollNavigation } from "@/components/ui/scroll-navigation";

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
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-3">
            Blogs
          </h2>
        </div>

        {/* Horizontal Scroll for All Screen Sizes */}
        <ScrollNavigation scrollAmount={300}>
          <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-6 no-scrollbar">
            {blogs.map((blog) => (
              <Card key={blog.id} className="flex-shrink-0 w-72 lg:w-80">
                <CardHeader className="p-3 pb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs">📝</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xs text-foreground">
                        {blog.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {blog.readTime}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-3">
                  <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-muted/20 rounded-xl mb-3 flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground line-clamp-2">
                    {blog.title}
                  </h3>
                </CardContent>

                <CardFooter className="p-3 pt-0">
                  <Button size="sm" className="w-full">
                    Read
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollNavigation>
      </div>
    </section>
  );
}
