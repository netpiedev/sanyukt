import { Heart } from "lucide-react";
import Link from "next/link";

export function SupportButton({ href = "/donate" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex w-[240px] items-center justify-center gap-1 rounded-[48px] bg-[#39B54A] px-5 py-3 text-[16px] leading-[24px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A] md:h-10 md:w-auto md:px-4 md:py-2"
    >
      <span>Support a Cause</span>
      <Heart
        aria-hidden="true"
        className="h-4 w-4 fill-current"
        strokeWidth={2}
      />
    </Link>
  );
}
