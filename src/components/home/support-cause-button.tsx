import { Heart } from "lucide-react";
import Link from "next/link";

export function SupportCauseButton({
  href = "/donate",
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#39B54A] text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A] ${className}`}
    >
      <span>Support a Cause</span>
      <Heart
        aria-hidden="true"
        className="h-3.5 w-3.5 fill-current"
        strokeWidth={2}
      />
    </Link>
  );
}
