import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "cn";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden bg-[#F4F7FB] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#ffffff,#f4f7fb_55%,rgba(198,161,91,0.18))]" />
      <div className="pointer-events-none absolute -top-20 right-0 size-[420px] rounded-full bg-[#0B63E5]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.24em] text-[#B8893A] uppercase">Contact</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#16181D] sm:text-4xl lg:text-5xl">
            Ready to Move With OneLink?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#3A4150] sm:text-lg">
            Let&apos;s make your deliveries faster, safer and easier.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:max-w-sm">
            <a href={`tel:${site.phoneTel}`} className={cn(buttonVariants({ variant: "glow", size: "xl" }), "w-full")}>
              <Phone aria-hidden="true" />
              Call Now
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "whatsapp", size: "xl" }), "w-full")}
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
            <a href={`mailto:${site.email}`} className={cn(buttonVariants({ variant: "glass", size: "xl" }), "w-full")}>
              <Mail aria-hidden="true" />
              Email Us
            </a>
          </div>

          <address className="mt-8 space-y-2 text-sm text-[#3A4150] not-italic">
            <p>
              Phone:{" "}
              <a className="text-[#0B63E5] underline-offset-4 hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="break-all text-[#0B63E5] underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>{site.location}</p>
          </address>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
