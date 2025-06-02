import { CallToACtion } from "@/components/callToAction";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Offers } from "@/components/offers";
import { Welcome } from "@/components/welcome";
import { Wellness } from "@/components/wellness";

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Offers />
      <Wellness />
      <Faq />
      <CallToACtion />
      <Footer />
    </main>
  );
}
