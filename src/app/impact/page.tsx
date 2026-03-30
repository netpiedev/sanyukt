import { FaqSection } from "@/components/faq-section";
import { MediaPartnersSection } from "@/components/home/media-partners-section";
import { HeroSection } from "@/components/impact/hero-section";
import { PastProjectsSection } from "@/components/impact/past-projects-section";
import { ProjectDescriptions } from "@/components/impact/project-descriptions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-(--color-surface) text-(--color-text)">
      <SiteHeader />
      <HeroSection />
      <PastProjectsSection />
      <ProjectDescriptions />
      <MediaPartnersSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
