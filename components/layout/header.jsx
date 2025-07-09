"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blogs", href: "#blogs" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 lg:w-20 lg:h-20 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg lg:text-2xl">
                SL
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-xl font-body text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden relative z-50">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground relative z-50"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Circular Full Screen */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Circular background */}
        <div
          className={cn(
            "absolute top-4 right-6 w-12 h-12 bg-card rounded-full transition-all duration-500 ease-in-out",
            mobileMenuOpen ? "scale-[100] transform-gpu" : "scale-0",
          )}
        />

        {/* Menu content */}
        <div
          className={cn(
            "relative z-50 flex flex-col items-center justify-center h-full space-y-8 transition-all duration-700 ease-in-out delay-200",
            mobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4",
          )}
        >
          {navigation.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "text-3xl font-heading font-bold text-foreground hover:text-primary transition-all duration-300",
                mobileMenuOpen ? "animate-in slide-in-from-bottom-4" : "",
              )}
              style={{
                animationDelay: `${index * 100 + 400}ms`,
                animationFillMode: "both",
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
