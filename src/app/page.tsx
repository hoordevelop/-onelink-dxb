import type { Metadata } from "next";
import { HomePageView } from "@/components/home-page";
import { getBrandImages } from "@/lib/assets";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "OneLink Delivery | The gold standard, door to door",
  description:
    "ONELINK DELIVERY L.L.C-FZ. Bikes and cars from Meydan, booked and tracked to the door.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OneLink Delivery | The gold standard, door to door",
    description: site.tagline,
    url: site.url,
  },
};

export default function HomePage() {
  return (
    <main id="main">
      <HomePageView images={getBrandImages()} />
    </main>
  );
}
