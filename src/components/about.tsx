import { Check } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import type { BrandImages } from "@/lib/assets";

const features = [
  "Fast & Reliable Service",
  "Professional Delivery Team",
  "Bike & Car Delivery Options",
  "Business-Friendly Solutions",
  "Customer-Focused Support",
];

type AboutProps = {
  images: BrandImages;
};

export function About({ images }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24 bg-[#020B14] py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-[#008CFF]/35 bg-[#061A2D] shadow-[0_30px_80px_-40px_rgba(0,123,255,0.85)]">
            <span className="absolute top-4 left-4 z-10 size-6 border-t border-l border-[#008CFF]" aria-hidden="true" />
            <span className="absolute top-4 right-4 z-10 size-6 border-t border-r border-[#008CFF]" aria-hidden="true" />
            <span className="absolute bottom-4 left-4 z-10 size-6 border-b border-l border-[#008CFF]" aria-hidden="true" />
            <span className="absolute right-4 bottom-4 z-10 size-6 border-r border-b border-[#008CFF]" aria-hidden="true" />
            {images.skyline ? (
              <Image
                src={images.skyline}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-bottom opacity-70"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B14] via-[#020B14]/20 to-transparent" />
            {images.bike ? (
              <Image
                src={images.bike}
                alt="Delivery motorcycle with a rear cargo box"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-contain p-8"
              />
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-xs font-medium tracking-[0.24em] text-[#7CC4FF] uppercase">About</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Your Reliable Delivery Partner in Dubai
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#D5E4F0] sm:text-lg">
            OneLink Delivery Service provides professional delivery solutions for businesses and customers across Dubai. Our focus is simple — fast service, safe handling and reliable delivery.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[#E7F3FF]">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#007BFF]/15 text-[#8EC8FF] ring-1 ring-[#008CFF]/40">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
