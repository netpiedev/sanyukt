import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/home/media-partners-section";
import { AboutInternshipSection } from "@/components/intern/about-internship";
import { BackgroundVerificationSection } from "@/components/intern/background-verification-section";
import { FormSection } from "@/components/intern/form";
import { InternHeroSection } from "@/components/intern/hero";
import { StarInternsSection } from "@/components/intern/star-interns-section";
import { UniversitiesCollegesPartnershipSection } from "@/components/intern/universities-colleges-partnership-section";
import { UniversitiesJoinedSection } from "@/components/intern/universities-joined-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function InternPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SiteHeader />
      <InternHeroSection />
      <UniversitiesJoinedSection />
      <AboutInternshipSection />
      <UniversitiesCollegesPartnershipSection />
      <StarInternsSection />
      <FormSection />
      <BackgroundVerificationSection />
      <MediaPartnersSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
