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
    alt: "Black and gold OneLink delivery motorcycle with a cargo box",
  },
  {
    key: "car" as const,
    title: "CAR",
    line: "Comfortable & Secure",
    detail: "Larger, sensitive, or multi-item deliveries across Dubai.",
    alt: "Black and gold OneLink delivery cars in Dubai",
  },
];

type FleetProps = {
  images: BrandImages;
};

export function Fleet({ images }: FleetProps) {
  return (
    <section id="fleet" className="scroll-mt-24 bg-[#F7F8FB] py-24 sm:py-28">
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
                <article className="group overflow-hidden rounded-2xl border border-[#C6A15B]/40 bg-white shadow-[0_30px_80px_-36px_rgba(184,137,58,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#0B63E5]/40">
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
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  </div>
                  <div className="border-t border-[#C6A15B]/25 px-6 py-6 sm:px-8">
                    <p className="text-xs tracking-[0.28em] text-[#B8893A]">FLEET</p>
                    <h3 className="font-display mt-2 text-3xl font-semibold tracking-[0.14em] text-[#16181D]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-lg text-[#0B63E5]">{item.line}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#3A4150]">{item.detail}</p>
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
