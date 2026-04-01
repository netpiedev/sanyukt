import { BlogGrid } from "@/components/blog/blog-grid";
import { HeroSection } from "@/components/blog/hero-section";
import { TeamSpotlightSection } from "@/components/blog/team-spotlight-section";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SiteFooter } from "@/components/site-footer";
import { SecondHeader } from "@/components/second-header";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SecondHeader />
      <HeroSection />
      <BlogGrid />
      <TeamSpotlightSection />
      <MediaPartnersSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
