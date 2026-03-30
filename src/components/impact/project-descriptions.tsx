import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectItem = {
  title: string;
  description: string;
  imageNumbers: [number, number, number];
  reverse?: boolean;
};

const projectItems: ProjectItem[] = [
  {
    title: "Green Odisha",
    description:
      "Sanyukt has been at the forefront of promoting environmental ustainability across Odisha through various impactful initiatives. From tree plantation drives to recycling programs, the organization is ommitted to creating a greener and cleaner environment.",
    imageNumbers: [1, 2, 3],
  },
  {
    title: "Winter is Coming",
    description:
      '"Winter is Coming" was a dedicated welfare project by Sanyukt focused on providing winter relief to vulnerable communities and ensuring the safety of street animals. The initiative reached over 50,000 individuals across seven key locations in Odisha, including Bhubaneswar, Rourkela and Cuttack.',
    imageNumbers: [4, 5, 6],
    reverse: true,
  },
  {
    title: "The Biggest Ride of India",
    description:
      "Sanyukt actively participated in Rath Yatra celebrations in 2023, 2024, and 2025, serving devotees and pilgrims during this spiritual event. Over 10 lakh devotees across Puri, Kendrapara, Rourkela, and Khordha districts received refreshments and meals.",
    imageNumbers: [7, 8, 9],
  },
  {
    title: "Women Empowerment",
    description:
      "Sanyukt has undertaken significant efforts to support women’s health and wellness through targeted initiatives. By promoting menstrual hygiene, raising breast cancer awareness, and organizing health camps, the organization aims to empower women with essential knowledge and access to healthcare.",
    imageNumbers: [10, 11, 12],
    reverse: true,
  },
  {
    title: "Covid-19 Response",
    description:
      "During the first and second waves of the Covid-19 pandemic, Sanyukt, along with its dedicated volunteers, provided critical support to communities, animals, and vulnerable populations across Odisha.",
    imageNumbers: [13, 14, 15],
  },
  {
    title: "Awareness Initiatives",
    description:
      "Sanyukt actively conducts awareness programs across Odisha, focusing on empowering communities with knowledge and skills. Initiatives include promoting menstrual hygiene, educating women about breast cancer and early detection, raising awareness about plastic pollution and sustainable practices, and providing self-defense training for youth and women. ",
    imageNumbers: [16, 17, 18],
    reverse: true,
  },
];

// background: linear-gradient(90deg, #39B54A 0%, #25AAE1 100%);

function GradientTitle({ title }: { title: string }) {
  return (
    <h3 className="bg-[linear-gradient(90deg,#39B54A_0%,#25AAE1_100%)] bg-clip-text text-[24px] font-semibold leading-[1.2] tracking-[-0.04em] text-transparent sm:text-[40px]">
      {title}
    </h3>
  );
}

function LearnMoreLink() {
  return (
    <Link
      href="#"
      className="inline-flex items-center justify-center gap-2 text-[16px] font-medium text-[#121926] leading-[24px] transition-colors duration-200 hover:text-(--color-button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
    >
      <span>Learn more</span>
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
    </Link>
  );
}

function ProjectImageCluster({
  imageNumbers,
}: {
  imageNumbers: [number, number, number];
}) {
  return (
    <div className="mx-auto w-full md:mx-0 md:w-[516px]">
      <div className="relative h-[192px] w-full overflow-hidden rounded-[16px] md:h-[192px] md:w-[516px]">
        <Image
          src={`/images/impact/${imageNumbers[0]}.png`}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 516px"
          className="object-cover"
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 md:w-[516px] md:gap-[16px]">
        {imageNumbers.slice(1).map((imageNumber) => (
          <div
            key={imageNumber}
            className="relative h-[192px] overflow-hidden rounded-[16px] md:h-[192px] md:w-[250px]"
          >
            <Image
              src={`/images/impact/${imageNumber}.png`}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 250px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectBlock({ item }: { item: ProjectItem }) {
  return (
    <div className="grid justify-center gap-8 px-6 text-center md:grid-cols-[476px_516px] md:items-center md:justify-between md:gap-0 md:text-left">
      <div className={item.reverse ? "md:order-2 md:pl-8" : ""}>
        <GradientTitle title={item.title} />
        <p className="mx-auto mt-4 w-full max-w-[440px] text-[14px] leading-[24px] text-[#333840] md:mx-0 md:text-[16px]">
          {item.description}
        </p>
        <div className="mt-4 flex justify-center md:justify-start">
          <LearnMoreLink />
        </div>
      </div>

      <div className={item.reverse ? "md:order-1" : ""}>
        <ProjectImageCluster imageNumbers={item.imageNumbers} />
      </div>
    </div>
  );
}

export function ProjectDescriptions() {
  return (
    <section className="w-full bg-white py-18 md:py-24">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="space-y-[48px] md:space-y-[80px]">
          {projectItems.map((item) => (
            <ProjectBlock key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
