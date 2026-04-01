import { BenefitsSection } from "@/components/corporate/benefits-section";
import { CorporateShowcaseSection } from "@/components/corporate/corporate-showcase-section";
import { Hero } from "@/components/corporate/hero";
import { PartnerWithUsSection } from "@/components/corporate/partner-with-us-section";
import { PartnersSpotlightSection } from "@/components/corporate/partners-spotlight-section";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SecondHeader } from "@/components/second-header";
import { SiteFooter } from "@/components/site-footer";

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SecondHeader />
      <Hero />
      <BenefitsSection />
      <PartnersSpotlightSection />
      <CorporateShowcaseSection />
      <PartnerWithUsSection />
      <MediaPartnersSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
