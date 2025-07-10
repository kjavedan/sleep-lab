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
      "I'll look at your sleep data, then give you a custom plan, the right tools, and personal support to help you sleep better.",
    image: "/one-on-one.png",
    imageAlt: "One on One Sleep Coaching",
  },
  {
    id: 2,
    title: "Couples Sleep Coaching",
    description:
      "Most couples struggle to sleep well together—one always ends up sacrificing sleep. With my couples sleep coaching, I help you understand what's happening at night and improve sleep for both partners based on their individual needs.",
    image: "/couples.png",
    imageAlt: "Couples Sleep Coaching",
  },
  {
    id: 3,
    title: "Group Sleep Coaching",
    description:
      "A more fun and accessible way to get the sleep coaching you need. You'll connect with others facing the same struggles in a supportive community full of motivation and accountability.",
    image: "/group.png",
    imageAlt: "Group Sleep Coaching",
  },
  {
    id: 4,
    title: "Sleep to thrive",
    description:
      "Are you a company that truly cares about your team? My program helps your staff become more focused, productive, and energized—by teaching them to sleep like cavemen. Boost performance, profit, and create a workplace full of healthier, happier people.",
    image: "/staff.png",
    imageAlt: "Sleep to thrive",
  },
  {
    id: 5,
    title: "Companies Sleep Coaching",
    description:
      "Optimize your sleep with a my online video course. I'll provide you with all the necessary tools, resources so you can do it yourself and improve your sleep in a more cost-effective way.",
    image: "/running.png",
    imageAlt: "Companies Sleep Coaching",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, 1).map((service, index) => (
            <Card
              key={service.id}
              variant="coaching"
              className="col-span-1 lg:col-span-2 xl:col-span-3 max-w-4xl mx-auto group transition-all duration-300"
            >
              {/* Image Section */}
              <div className="flex-shrink-0">
                <div className="relative w-full md:w-64 h-44 overflow-hidden rounded-3xl">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 justify-between py-4">
                <div className="space-y-4">
                  <CardTitle className="text-white text-2xl font-bold font-[Playpen_Sans] leading-[130.4%]">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-[#9B9B9B] text-base font-[Lato] leading-[130%] line-clamp-3">
                    {service.description}
                  </CardDescription>
                </div>

                <div className="mt-6">
                  <Button
                    size="sm"
                    className="bg-[#F5E27B] text-[#171717] hover:bg-yellow-500 px-8 py-4 rounded-full font-[Playpen_Sans]"
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Start Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          {/* Other services in regular grid */}
          {services.slice(1).map((service, index) => (
            <Card
              key={service.id}
              className={`group transition-all duration-300`}
            >
              <CardHeader className="p-0">
                <div className="relative w-full h-48 lg:h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <CardTitle className="mb-3 text-lg lg:text-xl line-clamp-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm lg:text-base leading-relaxed line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="p-4 pt-0">
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
