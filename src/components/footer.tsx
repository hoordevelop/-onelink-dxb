import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { footerLinks, site } from "@/lib/site";

type FooterProps = {
  logoSrc: string | null;
};

export function Footer({ logoSrc }: FooterProps) {
  return (
    <footer className="border-t border-[#C6A15B]/30 bg-[#F7F8FB]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo src={logoSrc} imageClassName="h-36 max-w-none sm:h-40" />
          <p className="font-display text-lg text-[#16181D]">{site.name}</p>
          <p className="text-sm tracking-[0.16em] text-[#C6A15B]">{site.tagline}</p>
          <p className="text-sm text-[#3A4150]">{site.location}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] text-[#16181D] uppercase">Navigate</h2>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-[#3A4150] hover:text-[#0B63E5]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold tracking-[0.16em] text-[#16181D] uppercase">Contact</h2>
          <address className="mt-4 space-y-2 text-sm text-[#3A4150] not-italic">
            <p>
              <a className="hover:text-[#0B63E5]" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="break-all hover:text-[#0B63E5]" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
          <div className="mt-5 flex gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp OneLink Delivery Service"
              className="grid size-11 place-items-center rounded-full border border-[#C6A15B]/50 text-[#0B63E5] hover:border-[#0B63E5] hover:bg-white"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              aria-label={`Call ${site.phoneDisplay}`}
              className="grid size-11 place-items-center rounded-full border border-[#C6A15B]/50 text-[#0B63E5] hover:border-[#0B63E5] hover:bg-white"
            >
              <Phone className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.email}`}
              className="grid size-11 place-items-center rounded-full border border-[#C6A15B]/50 text-[#0B63E5] hover:border-[#0B63E5] hover:bg-white"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#C6A15B]/25">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-[#5C6570] sm:px-8">
          © 2026 OneLink Delivery Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
