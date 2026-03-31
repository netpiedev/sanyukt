import { BenefitsSection } from "@/components/corporate/benefits-section";
import { CorporateHeroSection } from "@/components/corporate/corporate-hero-section";
import { CorporateShowcaseSection } from "@/components/corporate/corporate-showcase-section";
import { PartnerWithUsSection } from "@/components/corporate/partner-with-us-section";
import { PartnersSpotlightSection } from "@/components/corporate/partners-spotlight-section";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SiteHeader />
      <CorporateHeroSection />
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
