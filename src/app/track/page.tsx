import type { Metadata } from "next";
import { TrackForm } from "@/components/track-form";

export const metadata: Metadata = {
  title: "Track a shipment | OneLink Delivery",
  description: "Send your OL number to the OneLink desk and get the live status.",
  alternates: { canonical: "/track" },
};

export default function TrackPage() {
  return (
    <main id="main" className="bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8B909A]">TRACK NOW</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#1A1D23] sm:text-5xl">
          Track your shipment.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#3A4150]">
          Enter the OL number from your booking. The desk confirms where the parcel is.
        </p>
        <TrackForm />
      </div>
    </main>
  );
}
