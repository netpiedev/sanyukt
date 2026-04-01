import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SiteFooter } from "@/components/site-footer";
import { SecondHeader } from "@/components/second-header";
import { HeroSection } from "@/components/team/hero";
import { ProfessionalsSection } from "@/components/team/professionals-section";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SecondHeader />
      <HeroSection />
      <ProfessionalsSection />
      <MediaPartnersSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
