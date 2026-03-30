import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/home/media-partners-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/team/hero";
import { ProfessionalsSection } from "@/components/team/professionals-section";
import { faqs } from "@/data/faqs";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <HeroSection />
      <ProfessionalsSection />
      <MediaPartnersSection />
      <FaqSection entries={faqs} title="Frequently asked Questions" />
      <SiteFooter />
    </main>
  );
}
