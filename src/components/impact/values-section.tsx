import { Eye, Lightbulb, Star } from "lucide-react";

const values = [
  {
    title: "Vision",
    icon: <Eye className="h-8 w-8 text-[#2cb1e3]" strokeWidth={2.5} />,
    description:
      "Sanyukt envisions a society where women are empowered, communities are skilled, and environmental sustainability is prioritized.",
  },
  {
    title: "Mission",
    icon: <Lightbulb className="h-8 w-8 text-[#2cb1e3]" strokeWidth={2.5} />,
    description:
      "To create sustainable change through women empowerment initiatives, skill development programs, and environmental conservation.",
  },
  {
    title: "Philosophy",
    icon: (
      <Star
        className="h-8 w-8 text-[#2cb1e3]"
        fill="currentColor"
        strokeWidth={0}
      />
    ),
    description:
      "We believe real social change begins at the grassroots. By empowering youth to lead initiatives and collaborating with communities.",
  },
];

export function ValuesSection() {
  return (
    <section className="w-full bg-[#f8fbfd] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center justify-start rounded-[20px] bg-white px-6 py-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-7 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#e8f6fc]">
                {value.icon}
              </div>
              <h3 className="mb-4 text-[22px] font-semibold text-[#0f172a]">
                {value.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-[#64748b]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
