import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get in Touch | OneLink Delivery",
  description: "Call, WhatsApp, or email the OneLink desk in Meydan, Dubai.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="bg-[#f6f7f9]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8B909A]">GET IN TOUCH</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#1A1D23] sm:text-5xl">
            Talk to the desk.
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-[#3A4150]">
            Bike and car delivery from Meydan. The desk confirms the fare before anyone is sent.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-[#8B909A]">Phone</dt>
              <dd>
                <a href={`tel:${site.phoneTel}`} className="font-semibold text-[#2F6FED]">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[#8B909A]">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="font-semibold text-[#2F6FED]">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[#8B909A]">Desk</dt>
              <dd className="text-[#1A1D23]">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[#8B909A]">Hours</dt>
              <dd className="text-[#1A1D23]">{site.hours}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-3xl bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
