import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Fleet } from "@/components/fleet";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { WhyChooseUs } from "@/components/why-choose-us";
import { getBrandImages } from "@/lib/assets";

export default function HomePage() {
  const images = getBrandImages();

  return (
    <>
      <Navbar logoSrc={images.logo} />
      <main id="main">
        <Hero images={images} />
        <Services />
        <Stats />
        <About images={images} />
        <WhyChooseUs />
        <Fleet images={images} />
        <HowItWorks />
        <Contact />
      </main>
      <Footer logoSrc={images.logo} />
      <WhatsAppButton />
    </>
  );
}
