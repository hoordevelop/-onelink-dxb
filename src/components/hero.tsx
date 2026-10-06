"use client";

import { Check, MapPin } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import type { BrandImages } from "@/lib/assets";
import { cn } from "cn";

const trust = ["On-Time Delivery", "Professional Drivers", "Dubai-Wide Service"];

const particles = [
  { top: "16%", left: "8%", delay: "0s", size: 3 },
  { top: "28%", left: "22%", delay: "1.4s", size: 2 },
  { top: "62%", left: "14%", delay: "2.1s", size: 4 },
  { top: "22%", left: "78%", delay: "0.6s", size: 3 },
  { top: "48%", left: "88%", delay: "1.8s", size: 2 },
  { top: "72%", left: "70%", delay: "2.6s", size: 3 },
  { top: "12%", left: "48%", delay: "3s", size: 2 },
];

type HeroProps = {
  images: BrandImages;
};

export function Hero({ images }: HeroProps) {
  const reduce = useReducedMotion();

  const item = {
    opacity: [0, 1],
    y: [22, 0],
  };

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_55%,#f7f1e4_100%)]" />
      <div className="absolute -top-24 right-[-10%] size-[520px] rounded-full bg-[#0B63E5]/10 blur-3xl" />
      <div className="absolute bottom-0 left-[-8%] size-[420px] rounded-full bg-[#C6A15B]/20 blur-3xl" />
      <div className="hero-grid absolute inset-0" />
      {particles.map((particle) => (
        <span
          key={`${particle.top}-${particle.left}`}
          className="particle"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
          }}
        />
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-5 pt-32 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36">
        <motion.div
          className="text-center lg:text-left"
          initial={false}
          animate={reduce ? undefined : "show"}
          variants={{
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p
            initial={false}
            variants={{ show: item }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/50 bg-white px-3 py-1.5 text-sm text-[#16181D] shadow-sm"
          >
            <MapPin className="size-3.5 text-[#B8893A]" aria-hidden="true" />
            Dubai Based
          </motion.p>

          <motion.h1
            initial={false}
            variants={{ show: item }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-6 text-[2.7rem] leading-[1.02] font-semibold tracking-[-0.04em] text-[#16181D] sm:text-6xl lg:text-[4.5rem]"
          >
            The gold standard,
            <span className="mt-2 block text-[#0B63E5]">
              door to door.
            </span>
          </motion.h1>

          <motion.p
            initial={false}
            variants={{ show: item }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#3A4150] sm:text-lg lg:mx-0"
          >
            Professional bike and car delivery solutions built for businesses and customers across Dubai.
          </motion.p>

          <motion.div
            initial={false}
            variants={{ show: item }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#quote"
              onClick={() => {
                window.setTimeout(() => document.getElementById("full-name")?.focus(), 450);
              }}
              className={cn(buttonVariants({ variant: "glow", size: "xl" }), "w-full sm:w-auto")}
            >
              Book a Delivery
            </a>
            <a href="#contact" className={cn(buttonVariants({ variant: "glass", size: "xl" }), "w-full sm:w-auto")}>
              Contact Us
            </a>
          </motion.div>

          <motion.ul
            initial={false}
            variants={{ show: item }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
          >
            {trust.map((label) => (
              <li key={label} className="inline-flex items-center gap-2 text-sm text-[#16181D]">
                <span className="grid size-5 place-items-center rounded-full bg-[#F7F1E4] text-[#B8893A] ring-1 ring-[#C6A15B]/50">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="relative mx-auto h-[340px] w-full max-w-xl sm:h-[440px] lg:h-[520px]">
          <VehiclePlate
            src={images.car}
            alt="Black and gold OneLink delivery cars in Dubai"
            className="absolute top-0 right-0 w-[82%]"
            label="Car"
            delay={0.2}
          />
          <VehiclePlate
            src={images.bike}
            alt="Black and gold OneLink delivery motorcycle with a cargo box"
            className="absolute bottom-0 left-0 z-10 w-[78%]"
            label="Bike"
            delay={0.45}
          />
        </div>
      </div>
    </section>
  );
}

function VehiclePlate({
  src,
  alt,
  className,
  label,
  delay,
}: {
  src: string | null;
  alt: string;
  className: string;
  label: string;
  delay: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      animate={reduce ? undefined : { opacity: [0, 1], y: [24, 0] }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay }}
        className="overflow-hidden rounded-2xl border border-[#C6A15B]/70 bg-white shadow-[0_30px_80px_-28px_rgba(184,137,58,0.45)]"
      >
        <div className="relative aspect-[16/10]">
          {src ? (
            <Image src={src} alt={alt} fill priority sizes="(max-width: 1024px) 80vw, 460px" className="object-cover" />
          ) : (
            <div className="grid h-full place-items-center text-xs tracking-[0.2em] text-[#0B63E5]">{label}</div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
