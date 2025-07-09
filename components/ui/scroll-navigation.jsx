"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ScrollNavigation({
  children,
  className = "",
  scrollAmount = 300,
}) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const handleResize = () => checkScrollability();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollability, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <div className="relative">
      {/* Navigation buttons */}
      <div className="hidden lg:flex gap-3 justify-end mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`rounded-full transition-all ${
            canScrollRight
              ? "bg-primary text-primary-foreground"
              : "bg-muted opacity-50 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className={`overflow-x-auto scrollbar-hide ${className}`}
        onScroll={checkScrollability}
      >
        {children}
      </div>
    </div>
  );
}
