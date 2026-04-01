const timelineData = [
  {
    title: "2020 - The Beginning",
    active: true,
    points: [
      "Founded by Sk. Sahil at the age of 18 as Odisha's first youth-led NGO.",
      "Started with a small group of college friends to channel youth energy into social service.",
    ]
  },
  {
    title: "2021 - Covid-19 Response",
    active: false,
    points: [
      "Distributed ration kits, meals, and masks during the first and second waves of Covid-19.",
      "Launched Sanyukt Academy youth centers to continue slum children's education.",
      "Provided food & care for stray animals affected during lockdowns.",
    ]
  },
  {
    title: "2022 - Expanding Reach",
    active: false,
    points: [
      "Grew into 1,000+ youth members & volunteers.",
      "Organized health & awareness camps across villages and slums of Odisha.",
      "Began the Green Odisha Campaign with tree plantation and plastic collection drives.",
      "Launched Winter is Coming initiative - distributed sweaters, shawls, blankets, and reflective belts for street animals, reaching 50,000 lives.",
    ]
  },
  {
    title: "2023 - Major Impact Year",
    active: false,
    points: [
      "Ollywood Actress Sradha Panigrahi joined as a supporter of Sanyukt.",
      "Launched The Biggest Ride of India - Rath Yatra 2023, serving 6 lakh devotees with meals and refreshments across 4 districts.",
      "Distributed 10 lakh+ sanitary pads through menstrual hygiene programs.",
      "Responded to cyclones & floods with rations, blankets, and rapid volunteer mobilization.",
    ]
  },
  {
    title: "2025 - Reaching New Heights",
    active: false,
    points: [
      "Impact scaled to 5 crore lives.",
      "Distributed 20 lakh+ sanitary pads till date.",
      "Planted 10,000+ saplings and launched large-scale plastic waste collection.",
      "Recognized as a statewide youth movement and symbol of youth-led change.",
    ]
  }
];

export function TimelineSection() {
  return (
    <section id="our-impact" className="w-full bg-[#f8fbfd] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1072px] px-6 lg:px-8">
        <h2 className="mb-4 text-center sm:text-left text-[28px] sm:text-3xl font-bold tracking-tight bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_42%,#2a97e8_100%)] bg-clip-text text-transparent md:text-4xl">
          Timeline & Milestones
        </h2>
        <p className="mb-14 text-center sm:text-left mx-auto sm:mx-0 text-[14.5px] sm:text-[15px] leading-[1.65] text-[#6b7280] max-w-[472px]">
          We focus on voluntary involvement of people in our social work and every person who is associated to the community have their responsibility towards it's development and care.
        </p>

        <div className="relative sm:border-l border-gray-200 sm:-ml-5 md:-ml-6 sm:pl-5 md:pl-6">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-12 relative w-full">
              {/* Timeline Dot */}
              <div
                className={`hidden sm:block absolute top-1.5 sm:h-[8px] sm:w-[8px] rounded-full sm:ring-[6px] ring-[#f8fbfd] sm:-left-5 md:-left-6 -translate-x-1/2 ${
                  item.active
                    ? "bg-[#2cb1e3]"
                    : "bg-[#cbd5e1]"
                }`}
              ></div>
              <h3
                className={`mb-3 text-[17px] font-bold sm:text-[18px] ${
                  item.active ? "text-[#2cb1e3]" : "text-[#1a1f2e]"
                }`}
              >
                {item.title}
              </h3>
              <ul className="list-disc pl-4 flex flex-col gap-1.5 marker:text-black max-w-[620px]">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-[14px] sm:text-[16px] leading-[1.6] text-[#333840]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
