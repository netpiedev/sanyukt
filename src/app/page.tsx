import { BuildingChangeSection } from "@/components/home/building-change-section";
import { HomeHero } from "@/components/home/home-hero";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <HomeHero />
      <BuildingChangeSection />
    </main>
  );
}
