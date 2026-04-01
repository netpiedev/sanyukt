import { FaqSection } from "@/components/faq-section";
import { AboutInternshipSection } from "@/components/intern/about-internship";
import { BackgroundVerificationSection } from "@/components/intern/background-verification-section";
import { FormSection } from "@/components/intern/form";
import { Hero } from "@/components/intern/hero";
import { StarInternsSection } from "@/components/intern/star-interns-section";
import { UniversitiesCollegesPartnershipSection } from "@/components/intern/universities-colleges-partnership-section";
import { UniversitiesJoinedSection } from "@/components/intern/universities-joined-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SecondHeader } from "@/components/second-header";
import { SiteFooter } from "@/components/site-footer";

export default function InternPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SecondHeader />
      <Hero />
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
