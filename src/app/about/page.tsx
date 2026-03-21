import { AboutHeroSection } from "@/components/about/about-hero-section";
import { AboutValuesSection } from "@/components/about/about-values-section";
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
      <AboutHeroSection />
      <WatchVideoSection />
      <AboutValuesSection />
      <MediaPartnersSection />
      <FaqSection entries={faqs} title="Frequently asked Questions" />
      <SiteFooter />
    </main>
  );
}
