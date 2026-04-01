import { BlogGrid } from "@/components/blog/blog-grid";
import { Hero } from "@/components/blog/hero";
import { TeamSpotlightSection } from "@/components/blog/team-spotlight-section";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SecondHeader } from "@/components/second-header";
import { SiteFooter } from "@/components/site-footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SecondHeader />
      <Hero />
      <BlogGrid />
      <TeamSpotlightSection />
      <MediaPartnersSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
