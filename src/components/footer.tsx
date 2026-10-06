import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { footerLinks, site } from "@/lib/site";

type FooterProps = {
  logoSrc: string | null;
};

export function Footer({ logoSrc }: FooterProps) {
  return (
    <footer className="border-t border-[#007BFF]/20 bg-[#01080F]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo src={logoSrc} imageClassName="h-36 max-w-none sm:h-40" />
          <p className="font-display text-lg text-white">{site.name}</p>
          <p className="text-sm tracking-[0.16em] text-[#FFD100]">{site.tagline}</p>
          <p className="text-sm text-[#C5D7E6]">{site.location}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] text-white uppercase">Navigate</h2>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-[#C5D7E6] hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold tracking-[0.16em] text-white uppercase">Contact</h2>
          <address className="mt-4 space-y-2 text-sm text-[#C5D7E6] not-italic">
            <p>
              <a className="hover:text-white" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="break-all hover:text-white" href={`mailto:${site.email}`}>
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
              className="grid size-11 place-items-center rounded-md border border-[#008CFF]/30 text-white hover:border-[#008CFF] hover:bg-[#007BFF]/10"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              aria-label={`Call ${site.phoneDisplay}`}
              className="grid size-11 place-items-center rounded-md border border-[#008CFF]/30 text-white hover:border-[#008CFF] hover:bg-[#007BFF]/10"
            >
              <Phone className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.email}`}
              className="grid size-11 place-items-center rounded-md border border-[#008CFF]/30 text-white hover:border-[#008CFF] hover:bg-[#007BFF]/10"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#007BFF]/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-[#9BB3C7] sm:px-8">
          © 2026 OneLink Delivery Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
