import { HeroImagePlaceholder } from "@/components/impact/hero-image-placeholder";
import { SharedHero } from "@/components/shared-hero";

export function Hero() {
  return (
    <SharedHero
      headingLines={[
        [{ text: "5+ Years, 16+ Districts,", gradient: true }],
        [{ text: "5 Crore Lives Touched.", gradient: true }],
      ]}
      paragraphParts={[
        "Together with our volunteers, partners, and supporters, Sanyukt is creating real impact across Odisha—empowering youth, uplifting communities, and building a brighter tomorrow.",
      ]}
      gradientVariant="full"
      media={<HeroImagePlaceholder />}
    />
  );
}
