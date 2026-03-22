import { SupportersTestimonialsSection } from "@/components/home/supporters-testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/home/media-partners-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs } from "@/data/faqs";
import { HeroSection } from "@/components/join/hero-section";
import { MembershipSection } from "@/components/join/membership-section";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <HeroSection />
      <MembershipSection />
      <MediaPartnersSection />
      <SupportersTestimonialsSection />
      <FaqSection entries={faqs} title="Frequently asked Questions" />
      <SiteFooter />
    </main>
  );
}
