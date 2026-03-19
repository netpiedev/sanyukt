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
      className={`flex items-center rounded-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)] ${className}`}
      aria-label="Sanyukt organisation home"
    >
      <div className="leading-none">
        <div className="flex items-end gap-0.5 text-[1.9rem] font-black tracking-[-0.08em] text-[var(--color-brand-green)]">
          <span>S</span>
          <span className="text-[#ffb53d]">a</span>
          <span>n</span>
          <span className="relative text-[var(--color-brand-green)]">
            y
            <span className="absolute -right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#ff8f4a]" />
          </span>
          <span>u</span>
          <span className="text-[#ff8f4a]">k</span>
          <span>t</span>
        </div>
        <p className="mt-1 pl-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.45em] text-[var(--color-muted)]">
          Organisation
        </p>
      </div>
    </Link>
  );
}
