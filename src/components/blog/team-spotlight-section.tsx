import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const intro =
  "At Sanyukt, our founder envisions a youth platform where young people can actively contribute to social work—not just as volunteers, but also in senior management roles. Explore exciting opportunities to make a real impact and shape the future of communities. Choose a team that aligns with your passion and skills.";

const spotlights = [
  {
    name: "Chukkala Pavani",
    role: "Volunteer and Fundraising Excellence",
    excerpt:
      "Chukkala Pavani has been a driving force in Sanyukt’s fundraising initiatives. Recognized in 2024 with the Chief Pillar Award for Rath Yatra fundraisers and the Sanyukt Field Force Award, Pavani’s dedication and leadership have inspired countless volunteers to contribute passionately.",
    image: "/images/blog/team1.png",
    textFirst: true,
  },
  {
    name: "Yashmin Behera",
    role: "Constant Supporter",
    excerpt:
      "Since 2020, Yashmin Behera has consistently supported Sanyukt with monthly donations without ever missing a single month. Her unwavering commitment reflects the power of sustained contribution and loyalty towards driving.",
    image: "/images/blog/team2.png",
    textFirst: false,
  },
  {
    name: "Truptimayee Satapathy",
    role: "Team Leadership Excellence",
    excerpt:
      "Truptimayee Satapathy showcased exceptional leadership from 2023 to 2024, guiding her team to remarkable success. Her team led fundraising efforts during Rath Yatra 2024, conducted the highest number of events.",
    image: "/images/blog/team3.png",
    textFirst: true,
  },
  {
    name: "Khirobdi Tanaya Nayak",
    role: "Constant Supporter",
    excerpt:
      "Khirobdi Tanaya Nayak joined the Sanyukt Digital Team as a content writer in 2025 and quickly rose to become Director of Social Media. Her exceptional management skills have ensured smooth team operations.",
    image: "/images/blog/team4.png",
    textFirst: false,
  },
] as const;

export function TeamSpotlightSection() {
  return (
    <section className="mx-auto w-full bg-white px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[1072px]">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="text-[2rem] font-semibold leading-[1.2] tracking-tight text-[#1a2434] sm:text-[2.25rem] md:text-[2.75rem]">
            Join Our Teams – <br />
            <span className="bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_42%,#2a97e8_100%)] bg-clip-text text-transparent">
              Be a Change Maker!
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-[0.95rem] leading-[1.65] text-[#697586] sm:text-[1.05rem]">
            {intro}
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {spotlights.map((entry) => (
            <div
              key={entry.name}
              className={`flex w-full flex-col items-center gap-8 md:items-center md:justify-between md:gap-12 lg:gap-16 ${
                entry.textFirst
                  ? "text-center md:flex-row md:text-left"
                  : "flex-col-reverse text-center md:flex-row-reverse md:text-left"
              }`}
            >
              <div className="flex min-w-0 flex-1 flex-col items-center md:items-start md:text-left">
                <h3 className="text-[1.35rem] font-semibold text-[#39B54A] sm:text-[1.5rem]">
                  {entry.name}
                </h3>
                <p className="mt-1.5 text-[0.9rem] font-medium text-[#9ca3af] sm:text-[0.95rem]">
                  {entry.role}
                </p>
                <p className="mx-auto mt-4 max-w-[650px] text-[0.95rem] leading-[1.65] text-[#333840] md:pr-4 sm:text-[1rem] md:mx-0">
                  {entry.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-1 text-[0.95rem] font-semibold text-[#1a2434] transition-colors hover:text-[#39B54A]"
                >
                  Read more{" "}
                  <ArrowUpRight
                    className="h-[18px] w-[18px]"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>

              <div className="relative h-[400px] w-full max-w-[520px] shrink-0 overflow-hidden rounded-2xl bg-[#eef2f6] md:mx-0">
                <Image
                  src={entry.image}
                  alt={entry.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
