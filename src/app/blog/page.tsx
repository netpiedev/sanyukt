import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/home/media-partners-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/blog/hero-section";
import { BlogGrid } from "@/components/blog/blog-grid";
import { faqs } from "@/data/faqs";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <HeroSection />
      <BlogGrid />
      <MediaPartnersSection />
      <FaqSection entries={faqs} title="Frequently asked Questions" />
      <SiteFooter />
    </main>
  );
}
