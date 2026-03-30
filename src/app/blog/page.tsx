import { BlogGrid } from "@/components/blog/blog-grid";
import { HeroSection } from "@/components/blog/hero-section";
import { TeamSpotlightSection } from "@/components/blog/team-spotlight-section";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/home/media-partners-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs } from "@/data/faqs";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SiteHeader />
      <HeroSection />
      <BlogGrid />
      <TeamSpotlightSection />
      <MediaPartnersSection />
      <FaqSection entries={faqs} title="Frequently asked Questions" />
      <SiteFooter />
    </main>
  );
}
