import { HeroSection } from "@/components/about/hero-section";
import { ValuesSection } from "@/components/about/values-section";
import { TimelineSection } from "@/components/about/timeline-section";
import { FounderSection } from "@/components/about/founder-section";
import { faqs } from "@/data/faqs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WatchVideoSection } from "@/components/donate/watch-video-section";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/home/media-partners-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <HeroSection />
      <FounderSection />
      <WatchVideoSection />
      <ValuesSection />
      <TimelineSection />
      <MediaPartnersSection />
      <FaqSection entries={faqs} title="Frequently asked Questions" />
      <SiteFooter />
    </main>
  );
}
