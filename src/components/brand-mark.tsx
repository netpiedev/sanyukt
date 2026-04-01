import Image from "next/image";
import Link from "next/link";

export function BrandMark({
  className = "",
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button) ${className}`}
      aria-label="Sanyukt organisation home"
    >
      <Image
        src="/images/logo.png"
        alt="Sanyukt organisation"
        width={172}
        height={68}
        className="h-auto w-24 max-w-none min-[1100px]:w-[108px]"
        priority
      />
    </Link>
  );
}
