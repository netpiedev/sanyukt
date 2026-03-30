import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/home/media-partners-section";
import { SupportersTestimonialsSection } from "@/components/home/supporters-testimonials-section";
import { HeroSection } from "@/components/join/hero-section";
import { MembershipFormSection } from "@/components/join/membership-form-section";
import { MembershipSection } from "@/components/join/membership-section";
import { TeamApplicationFormSection } from "@/components/join/team-application-form-section";
import { TeamsSection } from "@/components/join/teams-section";
import { VolunteerSection } from "@/components/join/volunteer-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs } from "@/data/faqs";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SiteHeader />
      <HeroSection />
      <MembershipSection />
      <MembershipFormSection />
      <VolunteerSection />
      <TeamsSection />
      <TeamApplicationFormSection />
      <MediaPartnersSection />
      <SupportersTestimonialsSection />
      <FaqSection entries={faqs} title="Frequently asked Questions" />
      <SiteFooter />
    </main>
  );
}
