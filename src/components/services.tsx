"use client";

import { Building2, Car, Clock, Motorbike } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    title: "Bike Delivery",
    description: "Fast and efficient delivery for documents, food, parcels and urgent orders.",
    icon: Motorbike,
  },
  {
    title: "Car Delivery",
    description: "Secure car delivery for larger, sensitive or multiple-item orders.",
    icon: Car,
  },
  {
    title: "Business Delivery",
    description: "Reliable delivery support for businesses, online stores and corporate clients.",
    icon: Building2,
  },
  {
    title: "Same-Day Delivery",
    description: "Quick local delivery solutions designed to keep your customers satisfied.",
    icon: Clock,
  },
];

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-24 border-t border-[#007BFF]/15 bg-[#041221] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Our Delivery Services"
            subtitle="Flexible delivery solutions designed around your business."
          />
        </Reveal>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
