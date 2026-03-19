import { Image as ImageIcon } from "lucide-react";

const impactStats = [
  {
    value: "5,00,00,000+",
    mobileValue: "50mn+",
    label: "Lives Impacted",
  },
  {
    value: "20+",
    mobileValue: "20+",
    label: "Districts Covered",
  },
  {
    value: "3,000+",
    mobileValue: "3,000+",
    label: "Volunteers & Members",
  },
  {
    value: "3,000+",
    mobileValue: "3,000+",
    label: "Villages Reached",
  },
];

export function HeroImagePlaceholder() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#dfe6ee] bg-white shadow-[0_18px_35px_rgba(32,54,84,0.05)] md:rounded-[2.6rem]">
      <div className="relative flex h-[18rem] items-center justify-center overflow-hidden bg-[#d8dde3] sm:h-[22rem] md:h-[32rem]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.36),transparent_34%),linear-gradient(315deg,rgba(255,255,255,0.24),transparent_32%)]" />
        <ImageIcon
          aria-hidden="true"
          className="h-14 w-14 text-[#9aa6b4]"
          strokeWidth={1.8}
        />
      </div>

      <div className="grid grid-cols-2 gap-y-6 border-t border-[#dfe6ee] bg-[#f6f8fb] px-4 py-6 text-center sm:px-6 md:grid-cols-4 md:gap-4 md:px-10 md:py-7">
        {impactStats.map((stat) => (
          <div
            key={stat.label}
            className="font-[family-name:var(--font-geist-sans)]"
          >
            <p className="text-[2rem] font-extrabold tracking-[-0.035em] text-[#2ba2e6] md:hidden">
              {stat.mobileValue}
            </p>
            <p className="hidden text-[2.05rem] font-extrabold tracking-[-0.035em] text-[#2ba2e6] md:block">
              {stat.value}
            </p>
            <p className="mt-1 text-[0.9rem] font-medium tracking-[-0.02em] text-[var(--color-text)] sm:text-[1rem]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
