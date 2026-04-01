import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function LearnMoreLink({ href = "/donate" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-1 bg-white px-5 py-3 text-[16px] leading-[24px] font-medium text-[#121926] transition-colors duration-200 hover:text-(--color-button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button) md:p-2"
    >
      <span>Learn more</span>
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
    </Link>
  );
}
