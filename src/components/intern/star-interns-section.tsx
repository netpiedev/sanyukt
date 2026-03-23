import { Mail } from "lucide-react";

const interns = [
  {
    id: "intern-1",
    name: "Name of the person",
    designation: "Designation of the employee",
    email: "emailaddress@sanyukt.com",
  },
  {
    id: "intern-2",
    name: "Name of the person",
    designation: "Designation of the employee",
    email: "emailaddress@sanyukt.com",
  },
  {
    id: "intern-3",
    name: "Name of the person",
    designation: "Designation of the employee",
    email: "emailaddress@sanyukt.com",
  },
  {
    id: "intern-4",
    name: "Name of the person",
    designation: "Designation of the employee",
    email: "emailaddress@sanyukt.com",
  },
  {
    id: "intern-5",
    name: "Name of the person",
    designation: "Designation of the employee",
    email: "emailaddress@sanyukt.com",
  },
  {
    id: "intern-6",
    name: "Name of the person",
    designation: "Designation of the employee",
    email: "emailaddress@sanyukt.com",
  },
] as const;

function InternCard({
  intern,
  ariaHidden,
}: {
  intern: (typeof interns)[number];
  ariaHidden?: boolean;
}) {
  return (
    <article
      className="w-[220px] shrink-0 text-center"
      aria-hidden={ariaHidden}
    >
      <div className="mx-auto h-[120px] w-[120px] rounded-full bg-[#F8FAFC]" />
      <h3 className="mt-5 text-[1.25rem] font-semibold leading-tight text-[#121926]">
        {intern.name}
      </h3>
      <p className="mt-1.5 text-[0.90rem] text-[#697586]">
        {intern.designation}
      </p>
      <p className="mt-1.5 inline-flex items-center gap-1 text-[0.86rem] text-[#A1A9B5]">
        <Mail className="h-4 w-4" />
        {intern.email}
      </p>
    </article>
  );
}

export function StarInternsSection() {
  return (
    <section className="hidden w-full overflow-hidden py-14 md:block">
      <div className="mx-auto w-full max-w-[1120px]">
        <h2 className="text-center text-[1.5rem] font-bold text-[#1a2434]">
          Star Interns <span aria-hidden>⭐️</span>
        </h2>
      </div>

      <div className="mt-9 overflow-hidden">
        <div className="star-interns-track flex w-[200%] gap-8 pr-8">
          <div className="flex w-1/2 items-start justify-around gap-8 pl-6">
            {interns.map((intern) => (
              <InternCard key={`first-${intern.id}`} intern={intern} />
            ))}
          </div>
          <div className="flex w-1/2 items-start justify-around gap-8 pl-6">
            {interns.map((intern) => (
              <InternCard
                key={`second-${intern.id}`}
                intern={intern}
                ariaHidden
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
