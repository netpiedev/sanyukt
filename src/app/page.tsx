import { FaqSection } from "@/components/faq-section";
import { BuildingChangeSection } from "@/components/home/building-change-section";
import { DonationImpactSection } from "@/components/home/donation-impact-section";
import { Hero } from "@/components/home/hero";
import { StoriesUpdateSection } from "@/components/home/stories-update-section";
import { SupportersTestimonialsSection } from "@/components/home/supporters-testimonials-section";
import { WhatWeDoSection } from "@/components/home/what-we-do-section";
import { WhySanyuktSection } from "@/components/home/why-sanyukt-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SiteHeader />
      <Hero />
      <BuildingChangeSection />
      <WhatWeDoSection />
      <DonationImpactSection />
      <StoriesUpdateSection />
      <WhySanyuktSection />
      <MediaPartnersSection />
      <SupportersTestimonialsSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
