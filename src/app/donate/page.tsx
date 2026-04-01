import { DonateHero } from "@/components/donate/donate-hero";
import { WatchVideoSection } from "@/components/donate/watch-video-section";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { StoriesUpdateSection } from "@/components/home/stories-update-section";
import { SupportersTestimonialsSection } from "@/components/home/supporters-testimonials-section";
import { WhySanyuktSection } from "@/components/home/why-sanyukt-section";
import { SiteFooter } from "@/components/site-footer";
import { SecondHeader } from "@/components/second-header";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SecondHeader />
      <DonateHero />
      <WatchVideoSection />
      <StoriesUpdateSection />
      <WhySanyuktSection />
      <MediaPartnersSection />
      <SupportersTestimonialsSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
