import { HeroImagePlaceholder } from "@/components/home/hero-image-placeholder";
import { SharedHero } from "@/components/shared-hero";

export function Hero() {
  return (
    <SharedHero
      headingLines={[
        [{ text: "Youth in Action for" }],
        [{ text: "Better Odisha", gradient: true }],
      ]}
      paragraphParts={[
        "Join Odisha's first fully youth-led NGO,",
        "empowering communities, women, and the environment.",
      ]}
      showActions
      media={<HeroImagePlaceholder />}
    />
  );
}
