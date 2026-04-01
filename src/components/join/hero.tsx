import Image from "next/image";
import { SharedHero } from "@/components/shared-hero";

export function Hero() {
  return (
    <SharedHero
      headingLines={[
        [{ text: "Join hands" }],
        [{ text: "with " }, { text: "Sanyukt", gradient: true }],
      ]}
      paragraphParts={[
        "Join our mission to empower youth and build a better society. Your support brings us closer to a future where",
        "unity, compassion, and positive change define our nation.",
      ]}
      showActions
      media={
        <div className="relative w-full overflow-hidden rounded-[40px] bg-[#eef2f6] min-[1100px]:h-[520px]">
          <div className="relative aspect-5/4 w-full sm:aspect-16/11 min-[1100px]:h-full min-[1100px]:aspect-auto">
            <Image
              src="/images/about-hero.png"
              alt="Sanyukt team members together outdoors"
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover"
              priority
            />
          </div>

          <div className="pointer-events-none absolute -left-[4%] bottom-[10%] h-22 w-22 rounded-full bg-[#3dbb48] md:h-26 md:w-26" />
          <div className="pointer-events-none absolute -left-[2%] -bottom-[7%] h-29 w-44 rounded-t-full bg-[#3dbb48] md:h-38 md:w-60" />
          <div className="pointer-events-none absolute -right-[1%] -top-[2%] h-28 w-36 rounded-b-full bg-[#3dbb48] md:h-32 md:w-56" />
        </div>
      }
    />
  );
}
