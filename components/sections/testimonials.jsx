"use client";

import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ScrollNavigation } from "@/components/ui/scroll-navigation";

const testimonials = [
  {
    id: 1,
    rating: 5,
    content:
      "Sleep has always been an issue I have been meaning to address (amongst others!). Carolina's course enlightened me to not only the importance of sleep hygiene, but also how important it is in relation to the hierarchy of health needs. I learned that good sleep has a positive knock on effect with diet, physical health, vitality as well as mental health.",
    author: "Robert Kent",
    title: "Therapist",
  },
  {
    id: 2,
    rating: 5,
    content:
      "All the content and follow-up I've had during this process was absolutely useful and effective. Each week Carolina brought contents that complemented each other. With small changes in my habits, I improved the quality of my sleep and was able to identify habits that were destroying my sleep.",
    author: "Sarah Johnson",
    title: "Marketing Manager",
  },
  {
    id: 3,
    rating: 5,
    content:
      "Carolina is very down to earth, relatable, and passionate about her profession. She is always on hand to offer advice and support, she clearly loves her subject, and is dedicated to helping others achieve holistic health and wellness.",
    author: "Michael Chen",
    title: "Software Engineer",
  },
  {
    id: 4,
    rating: 5,
    content:
      "The program helped me understand my sleep patterns and make sustainable changes. I now wake up feeling refreshed and energized every morning. Highly recommend Carolina's coaching approach.",
    author: "Emily Davis",
    title: "Teacher",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl lg:px-20">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-3">
            Testimonials
          </h2>
        </div>

        {/* Horizontal Scroll for All Screen Sizes */}
        <ScrollNavigation scrollAmount={400}>
          <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-6 no-scrollbar">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                rating={testimonial.rating}
                content={testimonial.content}
                author={testimonial.author}
                title={testimonial.title}
                className="flex-shrink-0 w-80 lg:w-96"
              />
            ))}
          </div>
        </ScrollNavigation>
      </div>
    </section>
  );
}
