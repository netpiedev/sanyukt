import { BuildingChangeSection } from "@/components/home/building-change-section";
import { DonationImpactSection } from "@/components/home/donation-impact-section";
import { HomeHero } from "@/components/home/home-hero";
import { StoriesUpdateSection } from "@/components/home/stories-update-section";
import { WhatWeDoSection } from "@/components/home/what-we-do-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <HomeHero />
      <BuildingChangeSection />
      <WhatWeDoSection />
      <DonationImpactSection />
      <StoriesUpdateSection />
    </main>
  );
}
