import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="glow-card group h-full rounded-xl border border-[#007BFF]/25 bg-gradient-to-b from-[#071E34] to-[#020B14] p-6 shadow-[0_20px_50px_-36px_rgba(0,123,255,0.9)] transition duration-300 hover:-translate-y-1.5 hover:border-[#008CFF]/70 hover:shadow-[0_28px_60px_-28px_rgba(0,140,255,0.7)]">
      <div className="grid size-12 place-items-center rounded-full bg-[#007BFF]/15 text-[#8EC8FF] shadow-[0_0_24px_rgba(0,140,255,0.35)] ring-1 ring-[#008CFF]/45">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#C5D7E6]">{description}</p>
    </article>
  );
}
