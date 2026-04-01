import { BlogDescArticle } from "@/components/blog/blog-desc-article";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function BlogDescPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SiteHeader />
      <BlogDescArticle />
      <MediaPartnersSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
