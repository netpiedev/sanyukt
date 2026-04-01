import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/impact/hero";
import { PastProjectsSection } from "@/components/impact/past-projects-section";
import { ProjectDescriptions } from "@/components/impact/project-descriptions";
import { MediaPartnersSection } from "@/components/media-partners-section";
import { SecondHeader } from "@/components/second-header";
import { SiteFooter } from "@/components/site-footer";

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
