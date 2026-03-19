import Image from "next/image";
import Link from "next/link";

export function BrandMark({
  className = "",
  href = "#",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)] ${className}`}
      aria-label="Sanyukt organisation home"
    >
      <Image
        src="/images/logo.png"
        alt="Sanyukt organisation"
        width={172}
        height={68}
        className="h-auto w-[8.8rem] max-w-none"
        priority
      />
    </Link>
  );
}
