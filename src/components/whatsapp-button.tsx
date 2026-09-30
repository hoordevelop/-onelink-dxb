import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with OneLink on WhatsApp"
      className="whatsapp-float fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-[#128C7E] text-white shadow-[0_12px_30px_-8px_rgba(18,140,126,0.9)] transition hover:bg-[#17A589] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7CC4FF] sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
