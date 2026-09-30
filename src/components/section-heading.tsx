import { cn } from "cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.24em] text-[#7CC4FF] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-[#C5D7E6] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
