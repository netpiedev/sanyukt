import { DonateHero } from "@/components/donate/donate-hero";
import { WatchVideoSection } from "@/components/donate/watch-video-section";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/home/media-partners-section";
import { StoriesUpdateSection } from "@/components/home/stories-update-section";
import { SupportersTestimonialsSection } from "@/components/home/supporters-testimonials-section";
import { WhySanyuktSection } from "@/components/home/why-sanyukt-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs } from "@/data/faqs";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <DonateHero />
      <WatchVideoSection />
      <StoriesUpdateSection />
      <WhySanyuktSection />
      <MediaPartnersSection />
      <SupportersTestimonialsSection />
      <FaqSection entries={faqs} title="Frequently asked Questions" />
      <SiteFooter />
    </main>
  );
}
