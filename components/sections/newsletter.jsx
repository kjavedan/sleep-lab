"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log("Newsletter signup:", { name, email });
    setName("");
    setEmail("");
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-20">
        <div className="p-8 lg:p-16 rounded-3xl border border-border bg-card/30 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Join our newsletter
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get access to my course content, exclusive offers, and biweekly
                sleep tips.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
