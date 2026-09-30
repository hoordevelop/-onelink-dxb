import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { BrandImages } from "@/lib/assets";

const fleet = [
  {
    key: "bike" as const,
    title: "BIKE",
    line: "Fast & Flexible",
    detail: "City runs for documents, parcels, and urgent orders.",
    alt: "Blue and gold delivery scooter with a cargo box",
  },
  {
    key: "car" as const,
    title: "CAR",
    line: "Comfortable & Secure",
    detail: "Larger, sensitive, or multi-item deliveries across Dubai.",
    alt: "Blue and gold delivery sedan",
  },
];

type FleetProps = {
  images: BrandImages;
};

export function Fleet({ images }: FleetProps) {
  return (
    <section id="fleet" className="scroll-mt-24 bg-[#020B14] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Fleet"
            title="Our Fleet"
            subtitle="Bike and car options for the way Dubai actually moves."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {fleet.map((item, index) => {
            const src = images[item.key];
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="group overflow-hidden rounded-xl border border-[#D4B483]/50 bg-[#061A2D] shadow-[0_30px_80px_-36px_rgba(212,180,131,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_90px_-30px_rgba(212,180,131,0.55)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {src ? (
                      <Image
                        src={src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : null}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061A2D] via-transparent to-transparent" />
                  </div>
                  <div className="border-t border-[#007BFF]/20 px-6 py-6 sm:px-8">
                    <p className="text-xs tracking-[0.28em] text-[#7CC4FF]">FLEET</p>
                    <h3 className="font-display mt-2 text-3xl font-semibold tracking-[0.14em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-lg text-[#E7F3FF]">{item.line}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#C5D7E6]">{item.detail}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
