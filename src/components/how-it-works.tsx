"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    number: "01",
    title: "Book Your Delivery",
    description: "Share the pickup, drop-off, and how you want it moved.",
  },
  {
    number: "02",
    title: "We Collect",
    description: "A professional rider or driver collects the shipment.",
  },
  {
    number: "03",
    title: "We Deliver",
    description: "We take it across Dubai with care and clear updates.",
  },
  {
    number: "04",
    title: "Delivered Safely",
    description: "The delivery is completed and confirmed with you.",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section id="how-it-works" className="scroll-mt-24 border-t border-[#007BFF]/15 bg-[#041221] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="How It Works"
            subtitle="Four clear steps from booking to a safe handover."
          />
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute top-7 right-[10%] left-[10%] hidden h-px overflow-hidden bg-[#007BFF]/20 md:block" aria-hidden="true">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-[#007BFF] via-[#FFD100] to-white"
              initial={false}
              whileInView={reduce ? undefined : { scaleX: [0, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: reduce ? 0 : 1.2, ease: "easeOut" }}
            />
          </div>
          <div className="absolute top-4 bottom-4 left-[27px] w-px bg-gradient-to-b from-[#008CFF] to-transparent md:hidden" aria-hidden="true" />

          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <motion.li
                key={step.number}
                className="relative pl-16 md:pl-0 md:text-center"
                initial={false}
                whileInView={reduce ? undefined : { opacity: [0, 1], y: [16, 0] }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.1 }}
              >
                <span className="absolute top-0 left-0 grid size-14 place-items-center rounded-full border border-[#FFD100]/70 bg-black font-display text-sm font-semibold tracking-[0.14em] text-[#FFD100] shadow-[0_0_24px_rgba(255,209,0,0.22)] md:relative md:mx-auto">
                  {step.number}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-white md:mt-6">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C5D7E6]">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
