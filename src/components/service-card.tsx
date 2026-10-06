import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="glow-card group h-full rounded-2xl border border-[#C6A15B]/35 bg-white p-6 shadow-[0_20px_50px_-36px_rgba(11,99,229,0.35)] transition duration-300 hover:-translate-y-1.5 hover:border-[#0B63E5]/50">
      <div className="grid size-12 place-items-center rounded-full bg-[#E8F1FF] text-[#0B63E5] ring-1 ring-[#0B63E5]/20">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-[#16181D]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#3A4150]">{description}</p>
    </article>
  );
}
