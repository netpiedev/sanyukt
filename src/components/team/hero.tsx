import Image from "next/image";

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-[960px] px-6 pb-14 pt-10 sm:px-0 sm:pb-18 md:pt-14">
      <div className="px-0 text-center sm:px-8">
        <h1 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#333840] sm:text-[44px] md:text-[56px]">
          Meet the Youth Driving
          <br />
          <span className="inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent ">
            Change Across Odisha
          </span>
        </h1>

        <div className="mx-auto mt-4 max-w-[460px] text-[14px] leading-[24px] text-[#697586] sm:text-[16px]">
          <p>
            Our passionate team of volunteers, leaders, and interns work
            together to empower communities, uplift women, protect the
            environment, and create lasting impact.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-10 w-full overflow-hidden rounded-[1.9rem] bg-[#eef2f6] md:mt-12 md:rounded-[2.6rem]">
        <div className="relative aspect-5/4 w-full sm:aspect-16/11 md:h-[520px] md:aspect-auto">
          <Image
            src="/images/team.png"
            alt="Sanyukt team members together outdoors"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 960px"
            priority
          />
        </div>

        <div className="pointer-events-none absolute -right-[1%] -top-[2%] h-28 w-36 rounded-b-full bg-[#3dbb48] md:h-32 md:w-56" />
        <div className="pointer-events-none absolute -left-[4%] bottom-[10%] h-22 w-22 rounded-full bg-[#3dbb48] md:h-26 md:w-26" />
        <div className="pointer-events-none absolute -left-[2%] -bottom-[7%] h-29 w-44 rounded-t-full bg-[#3dbb48] md:h-38 md:w-60" />
      </div>
    </section>
  );
}
