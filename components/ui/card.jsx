import { cn } from "@/lib/utils";

export function Card({ className, variant = "default", ...props }) {
  const cardVariants = {
    default:
      "rounded-2xl bg-card border border-border p-4 shadow-lg transition-all hover:shadow-xl cursor-pointer min-w-80",
    coaching:
      "rounded-[32px] p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all hover:shadow-xl cursor-pointer flex flex-col md:flex-row gap-4 items-start",
  };

  const backgroundStyle =
    variant === "coaching"
      ? {
          background: "linear-gradient(180deg, #171717 0%, #1D1D1D 100%)",
        }
      : {};

  return (
    <div
      className={cn(cardVariants[variant], className)}
      style={backgroundStyle}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-1.5", className)} {...props} />
  );
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn(
        "font-heading text-2xl font-bold leading-none tracking-tight text-card-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return <div className={cn("pt-3", className)} {...props} />;
}

export function CardFooter({ className, ...props }) {
  return <div className={cn("flex items-center pt-3", className)} {...props} />;
}
