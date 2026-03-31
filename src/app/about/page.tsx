import { FounderSection } from "@/components/about/founder-section";
import { HeroSection } from "@/components/about/hero-section";
import { TimelineSection } from "@/components/about/timeline-section";
import { ValuesSection } from "@/components/about/values-section";
import { WhatWeDoSection } from "@/components/about/what-we-do-section";
import { WatchVideoSection } from "@/components/donate/watch-video-section";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SiteHeader />
      <HeroSection />
      <FounderSection />
      <WatchVideoSection />
      <ValuesSection />
      <WhatWeDoSection />
      <TimelineSection />
      <MediaPartnersSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
