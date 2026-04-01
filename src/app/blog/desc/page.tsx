import { BlogDescArticle } from "@/components/blog/blog-desc-article";
import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SiteFooter } from "@/components/site-footer";
import { SecondHeader } from "@/components/second-header";

export default function BlogDescPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SecondHeader />
      <BlogDescArticle />
      <MediaPartnersSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
