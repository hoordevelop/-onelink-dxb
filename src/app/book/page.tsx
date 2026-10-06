import type { Metadata } from "next";
import { BookForm } from "@/components/book-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book your shipment | OneLink Delivery",
  description:
    "Book a bike or car pickup in Dubai. The desk confirms the fare before anyone is sent.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <main id="main" className="bg-[#f6f7f9]">
      <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8B909A]">BOOK NOW</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[#1A1D23] sm:text-6xl">
          Book your shipment.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#3A4150]">
          Two doors, a bike or a car, and a service. The desk confirms the fare before anyone is
          sent. You keep the OL number.
        </p>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl bg-[#1C2430] p-6 text-white">
            <h2 className="text-lg font-semibold">Before you send</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/85">
              <li>Express is confirmed inside Dubai.</li>
              <li>Same-day bookings are taken before 11:00 AM.</li>
              <li>Next-day bookings across the emirates close at 2:00 PM.</li>
              <li>Cars are for boxes that will not ride safely on a bike.</li>
            </ul>
            <p className="mt-6 text-sm text-white/75">{site.hours}</p>
            <a href={`tel:${site.phoneTel}`} className="mt-3 block text-lg font-semibold">
              {site.phoneDisplay}
            </a>
          </aside>
          <div className="rounded-3xl bg-white p-5 sm:p-8">
            <BookForm />
          </div>
        </div>
      </div>
    </main>
  );
}
