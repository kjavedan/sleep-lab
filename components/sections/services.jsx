"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "One on One Sleep Coaching",
    description:
      "Customized sleep programs with tools, resources, and one-on-one support. I'll help interpret your sleep data and guide you to optimal sleep quality.",
    image: "/api/placeholder/400/300",
    imageAlt: "One on One Sleep Coaching",
  },
  {
    id: 2,
    title: "Couples Sleep Coaching",
    description:
      "Most couples struggle to sleep well together, one always ends up sacrificing sleep. With my couples sleep coaching, I help you understand what's happening at night and improve sleep for both partners based on their individual needs.",
    image: "/api/placeholder/400/300",
    imageAlt: "Couples Sleep Coaching",
  },
  {
    id: 3,
    title: "Group Sleep Coaching",
    description:
      "A more fun and accessible way to get the sleep coaching you need. You'll connect with others facing the same struggles in a supportive community full of motivation and accountability.",
    image: "/api/placeholder/400/300",
    imageAlt: "Group Sleep Coaching",
  },
  {
    id: 4,
    title: "Sleep to thrive",
    description:
      "Are you a company that truly cares about your team? My program helps your staff become more focused, productive, and energized—by teaching them to sleep like cavemen. Boost performance, profit, and create a workplace full of healthier, happier people.",
    image: "/api/placeholder/400/300",
    imageAlt: "Sleep to thrive",
  },
  {
    id: 5,
    title: "Companies Sleep Coaching",
    description:
      "Optimize your sleep with a my online video course. I'll provide you with all the necessary tools, resources so you can do it yourself and improve your sleep in a more cost-effective way.",
    image: "/api/placeholder/400/300",
    imageAlt: "Companies Sleep Coaching",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-heading font-bold text-foreground mb-6">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`group transition-all duration-300 ${
                index === 2 ? "md:col-span-2 xl:col-span-1" : ""
              } ${index >= 3 ? "md:col-span-1 xl:col-span-1" : ""}`}
            >
              <CardHeader className="p-0">
                <div className="relative w-full h-64 lg:h-72 overflow-hidden rounded-t-3xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-muted/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                        <span className="text-2xl lg:text-3xl">
                          {index === 0 && "👤"}
                          {index === 1 && "💑"}
                          {index === 2 && "👥"}
                          {index === 3 && "🏢"}
                          {index === 4 && "🎯"}
                        </span>
                      </div>
                      <p className="text-xs lg:text-sm text-muted-foreground font-heading">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="mb-4 text-xl lg:text-2xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Start Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
