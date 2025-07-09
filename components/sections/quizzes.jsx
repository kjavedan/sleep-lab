"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quizzes = [
  {
    id: 1,
    title: "How is your sleep affecting you?",
    description:
      "Discover how your current sleep patterns impact your daily life and wellbeing.",
    image: "/api/placeholder/400/300",
    imageAlt: "Sleep Impact Quiz",
  },
  {
    id: 2,
    title: "Do you know your chronotype?",
    description:
      "Find out if you're a morning lark, night owl, or something in between.",
    image: "/api/placeholder/400/300",
    imageAlt: "Chronotype Quiz",
  },
  {
    id: 3,
    title: "Might I have a sleep disorder?",
    description:
      "Take this assessment to identify potential sleep disorder warning signs.",
    image: "/api/placeholder/400/300",
    imageAlt: "Sleep Disorder Quiz",
  },
];

export function Quizzes() {
  return (
    <section id="quizzes" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-3">
            Quizzes
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            How much do you know about your sleep? Find out below.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {quizzes.map((quiz, index) => (
            <Card key={quiz.id} className="h-full">
              <CardHeader className="p-0">
                <div className="relative w-full h-40 lg:h-48 overflow-hidden rounded-t-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-muted/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                        <span className="text-2xl lg:text-3xl">
                          {index === 0 && "🧠"}
                          {index === 1 && "🦉"}
                          {index === 2 && "💤"}
                        </span>
                      </div>
                      <p className="text-xs lg:text-sm text-muted-foreground font-heading">
                        {quiz.title}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="mb-3 text-lg lg:text-xl">
                  {quiz.title}
                </CardTitle>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    // Quiz functionality would go here
                    console.log(`Starting quiz: ${quiz.title}`);
                  }}
                >
                  Take Quiz
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 horizontal-scroll no-scrollbar snap-x snap-mandatory">
            {quizzes.map((quiz, index) => (
              <Card key={quiz.id} className="flex-shrink-0 w-80 snap-center">
                <CardHeader className="p-0">
                  <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-muted/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                          <span className="text-2xl">
                            {index === 0 && "🧠"}
                            {index === 1 && "🦉"}
                            {index === 2 && "💤"}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground font-heading">
                          {quiz.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg">{quiz.title}</CardTitle>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      console.log(`Starting quiz: ${quiz.title}`);
                    }}
                  >
                    Take Quiz
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {quizzes.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-muted" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
