import { AboutHeroSection } from "@/components/about/about-hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <AboutHeroSection />
      <SiteFooter />
    </main>
  );
}
