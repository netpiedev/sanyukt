import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { Hero } from "@/components/impact/hero";
import { PastProjectsSection } from "@/components/impact/past-projects-section";
import { ProjectDescriptions } from "@/components/impact/project-descriptions";
import { SiteFooter } from "@/components/site-footer";
import { SecondHeader } from "@/components/second-header";

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SecondHeader />
      <Hero />
      <PastProjectsSection />
      <ProjectDescriptions />
      <MediaPartnersSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
