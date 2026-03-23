import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/home/media-partners-section";
import { InternHeroSection } from "@/components/intern/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs } from "@/data/faqs";

export default function InternPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <InternHeroSection />
      <MediaPartnersSection />
      <FaqSection entries={faqs} title="Frequently asked Questions" />
      <SiteFooter />
    </main>
  );
}
