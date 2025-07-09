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
        <div className="flex h-20 lg:h-32 items-center justify-between">
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
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bg-background border-b border-border transition-all duration-300 ease-in-out",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none",
        )}
      >
        <div className="px-6 py-6 space-y-6">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left text-xl font-body text-foreground hover:text-primary transition-colors py-2"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
