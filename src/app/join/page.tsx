import { FaqSection } from "@/components/faq-section";
import { SupportersTestimonialsSection } from "@/components/home/supporters-testimonials-section";
import { Hero } from "@/components/join/hero";
import { MembershipFormSection } from "@/components/join/membership-form-section";
import { MembershipSection } from "@/components/join/membership-section";
import { TeamApplicationFormSection } from "@/components/join/team-application-form-section";
import { TeamsSection } from "@/components/join/teams-section";
import { VolunteerSection } from "@/components/join/volunteer-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SecondHeader } from "@/components/second-header";
import { SiteFooter } from "@/components/site-footer";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SecondHeader />
      <Hero />
      <MembershipSection />
      <MembershipFormSection />
      <VolunteerSection />
      <TeamsSection />
      <TeamApplicationFormSection />
      <MediaPartnersSection />
      <SupportersTestimonialsSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
