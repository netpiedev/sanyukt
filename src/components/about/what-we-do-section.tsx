import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FeatureItem = {
  title: string;
  description: string;
  imageNumbers: [number, number, number];
  reverse?: boolean;
};

type CardItem = {
  title: string;
  description: string;
  imageNumber: number;
};

const featureItems: FeatureItem[] = [
  {
    title: "Women Empowerment",
    description:
      "Driving menstrual hygiene awareness programs, distributing sanitary pads, organizing breast cancer awareness campaigns, and creating livelihood opportunities through training and capacity building.",
    imageNumbers: [1, 2, 3],
  },
  {
    title: "Skill Development",
    description:
      "Offering youth-focused programs including skill-based training, workshops, and remote internships that equip young people and communities with practical knowledge for a better future.",
    imageNumbers: [4, 5, 6],
    reverse: true,
  },
  {
    title: "Environment and Sustainability",
    description:
      "Leading initiatives such as tree plantation drives, seed ball making, large-scale plastic waste collection, and promoting eco-friendly practices under our “Green Odisha” campaign.",
    imageNumbers: [7, 8, 9],
  },
];

const cardItems: CardItem[] = [
  {
    title: "Healthcare and Community Camps",
    description:
      "Organizing health initiatives such as general health check-ups, eye camps, and awareness sessions to ensure accessible healthcare for underserved communities.",
    imageNumber: 10,
  },
  {
    title: "Awareness",
    description:
      "Running campaigns on menstrual health, period equity, breast cancer, climate action, and youth participation to break taboos and build informed communities.",
    imageNumber: 11,
  },
  {
    title: "Disaster Relief & Community Welfare",
    description:
      "Mobilizing volunteers swiftly during floods, cyclones, and pandemics to provide ration kits, meals, blankets, and rehabilitation support.",
    imageNumber: 12,
  },
];

function GradientTitle({ title }: { title: string }) {
  return (
    <h3 className="bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_46%,#2a97e8_100%)] bg-clip-text text-[1.85rem] font-semibold leading-[1.07] tracking-[-0.05em] text-transparent sm:text-[2.4rem]">
      {title}
    </h3>
  );
}

function LearnMoreLink() {
  return (
    <Link
      href="#"
      className="inline-flex items-center justify-center gap-2 text-[0.92rem] font-semibold text-[#121926] transition-colors duration-200 hover:text-[var(--color-button)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)] sm:text-[0.98rem]"
    >
      <span>Learn more</span>
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
    </Link>
  );
}

function ImageCluster({
  imageNumbers,
}: {
  imageNumbers: [number, number, number];
}) {
  return (
    <div className="w-full">
      <div className="relative h-[14rem] w-full overflow-hidden rounded-[1.25rem] sm:h-[20rem] lg:h-[13rem]">
        <Image
          src={`/images/whatwedo${imageNumbers[0]}.png`}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          className="object-cover"
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 lg:mt-5 lg:gap-5">
        {imageNumbers.slice(1).map((imageNumber) => (
          <div
            key={imageNumber}
            className="relative h-[13rem] overflow-hidden rounded-[1.5rem] sm:h-[15rem] lg:h-[11.4rem]"
          >
            <Image
              src={`/images/whatwedo${imageNumber}.png`}
              alt=""
              fill
              sizes="(max-width: 1024px) 50vw, 250px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureBlock({ item }: { item: FeatureItem }) {
  return (
    <div
      className={`grid gap-8 lg:items-center lg:gap-12 ${
        item.reverse
          ? "lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)]"
          : "lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]"
      }`}
    >
      <div
        className={`text-center lg:text-left ${item.reverse ? "lg:order-2" : ""}`}
      >
        <GradientTitle title={item.title} />
        <p className="mx-auto mt-5 max-w-[30rem] text-[0.95rem] leading-[1.72] text-[#333840] lg:mx-0 lg:text-[0.99rem]">
          {item.description}
        </p>
        <div className="mt-5">
          <LearnMoreLink />
        </div>
      </div>

      <div className={item.reverse ? "lg:order-1" : ""}>
        <ImageCluster imageNumbers={item.imageNumbers} />
      </div>
    </div>
  );
}

function CompactCard({ item }: { item: CardItem }) {
  return (
    <article>
      <div className="relative h-[15.2rem] overflow-hidden rounded-[1.55rem] sm:h-[18rem] lg:h-[13.25rem]">
        <Image
          src={`/images/whatwedo${item.imageNumber}.png`}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 341px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-5 bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_46%,#2a97e8_100%)] bg-clip-text text-[1.25rem] font-semibold leading-[1.15] tracking-[-0.04em] text-transparent sm:text-[1.8rem] lg:text-[1.1rem]">
        {item.title}
      </h3>
      <p className="mt-3 max-w-[20rem] text-[0.98rem] leading-[1.72] text-[#333840] lg:max-w-none lg:text-[0.96rem]">
        {item.description}
      </p>
    </article>
  );
}

export function WhatWeDoSection() {
  return (
    <section className="w-full bg-white py-18 md:py-24">
      <div className="mx-auto w-full max-w-[1072px] px-6 sm:px-8">
        <h2 className="text-center text-[2.35rem] font-semibold leading-none tracking-[-0.055em] text-[#333840] sm:text-[3rem]">
          What we do?
        </h2>

        <div className="mt-14 space-y-18 md:mt-18 md:space-y-24">
          {featureItems.map((item) => (
            <FeatureBlock key={item.title} item={item} />
          ))}

          <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-3 lg:gap-14">
            {cardItems.map((item) => (
              <CompactCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
