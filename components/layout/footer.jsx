import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Social */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-2xl">
                  SL
                </span>
              </div>
              <div className="flex gap-4">
                <Instagram className="w-6 h-6 text-foreground hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-foreground hover:text-primary cursor-pointer transition-colors" />
                <MessageCircle className="w-6 h-6 text-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            <p className="text-lg font-heading text-foreground">
              primordialhealth.co.uk
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "Services",
                "Quizzes",
                "Book a meeting",
                "About",
                "Blogs",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-base text-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-base text-foreground hover:text-primary transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              Contact
            </h3>
            <a
              href="mailto:ca.sleepcoach@gmail.com"
              className="text-base text-foreground hover:text-primary transition-colors underline"
            >
              ca.sleepcoach@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-muted py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="text-center space-y-2">
            <p className="text-base text-foreground">
              © 2025 All rights reserved.
            </p>
            <p className="text-sm text-foreground">
              Built by <span className="underline">Buildo.ae</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
