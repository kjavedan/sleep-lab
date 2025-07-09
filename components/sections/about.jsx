"use client";

import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-3">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-muted/20 border border-primary/30 flex items-center justify-center overflow-hidden">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-card to-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-4xl lg:text-5xl">👩‍⚕️</span>
                    </div>
                    <p className="text-sm lg:text-base text-muted-foreground font-heading">
                      Carolina
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="p-8 lg:p-12 rounded-3xl border border-border bg-card/50">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6">
                My name is{" "}
                <span className="font-heading font-bold text-foreground">
                  Carolina
                </span>
                , I help people sleep better so they can live healthier, happier
                lives. By combining ancestral wisdom with modern technology, I
                create personalized sleep solutions that look at the whole
                person. I believe quality sleep is the foundation of wellbeing,
                and I offer coaching for both individuals and organizations to
                improve health and performance.{" "}
                <button className="font-heading font-bold text-primary hover:text-primary/80 underline transition-colors">
                  Read more...
                </button>
              </p>
            </div>

            <Button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              size="default"
              className="text-lg lg:text-xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
