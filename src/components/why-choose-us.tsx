"use client";

import { BadgeCheck, ShieldCheck, Users, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const reasons = [
  {
    title: "Fast Delivery",
    description: "Designed for time-sensitive deliveries.",
    icon: Zap,
  },
  {
    title: "Safe Handling",
    description: "Your packages are handled with care.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Service",
    description: "Clear communication and dependable delivery support.",
    icon: BadgeCheck,
  },
  {
    title: "Professional Team",
    description: "Service focused on your business and customer experience.",
    icon: Users,
  },
];

export function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section id="why-us" className="scroll-mt-24 border-t border-[#C6A15B]/25 bg-[#F7F8FB] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Why OneLink" title="Why Choose OneLink?" />
        </Reveal>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2"
          initial={false}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
          }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.article
                key={reason.title}
                initial={false}
                variants={{
                  show: reduce
                    ? { opacity: 1, y: 0 }
                    : { opacity: [0, 1], y: [18, 0], transition: { duration: 0.55 } },
                }}
                className="glow-card flex gap-5 rounded-2xl border border-[#C6A15B]/35 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0B63E5]/40"
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#F7F1E4] text-[#B8893A] ring-1 ring-[#C6A15B]/45">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#16181D]">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3A4150]">{reason.description}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
