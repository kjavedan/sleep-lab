"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

function FloatingZ({ delay = 0 }) {
  return (
    <div
      className="absolute text-6xl lg:text-8xl font-heading font-bold text-muted-foreground/40 select-none float-z"
      style={{ animationDelay: `${delay}s` }}
    >
      z
    </div>
  );
}

export function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background pt-16 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 lg:space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-heading font-extrabold leading-tight text-foreground">
                Better sleep
                <br />
                better life
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Sleep like your ancestors. Wake up healthier, happier, and more
                energized every day.
              </p>
            </div>
            <Button
              onClick={scrollToServices}
              size="default"
              className="text-lg lg:text-xl"
            >
              Start Now
            </Button>
          </div>

          {/* Right Content - Hero Image with Floating Z's */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Hero Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-muted/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/10 to-background flex items-center justify-center relative overflow-hidden">
                    {/* Sleep illustration placeholder - you can replace with actual image */}
                    <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-card flex items-center justify-center border border-border">
                      <div className="text-center">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-3xl lg:text-4xl">😴</span>
                        </div>
                        <p className="text-xs lg:text-sm text-muted-foreground font-heading">
                          Sweet Dreams
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Z animations */}
                <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
                  <FloatingZ delay={0} />
                </div>
                <div className="absolute top-16 right-16 lg:top-24 lg:right-24">
                  <FloatingZ delay={0.5} />
                </div>
                <div className="absolute top-24 right-24 lg:top-36 lg:right-36">
                  <FloatingZ delay={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
}
