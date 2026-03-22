"use client";

import { Bookmark, Share2 } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";

const tocItems = [
  { id: "pmnrf", label: "Prime Minister's National Relief Fund (PMNRF)" },
  { id: "hmdg", label: "Health Minister's Discretionary Grant (HMDG)" },
  { id: "ran", label: "Rashtriya Arogya Nidhi (RAN)" },
  {
    id: "hmcpf",
    label: "RAN - Health Minister's Cancer Patient Fund (HMCPF)",
  },
  { id: "related-sources", label: "Related Sources" },
] as const;

export function BlogDescArticle() {
  const handleShare = useCallback(() => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      void navigator.share({ title: document.title, url });
    } else {
      void navigator.clipboard.writeText(url);
    }
  }, []);

  return (
    <article className="w-full bg-white pb-12 pt-6 sm:pb-20 md:pt-10">
      <div className="mx-auto w-full max-w-[1072px] px-6 sm:px-8 lg:px-6">
        <header className="mx-auto max-w-[650px] lg:mx-0 lg:max-w-none">
          <h1 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-[#333840] sm:text-[2rem] md:text-[2.75rem]">
            Financial assistance to poor
          </h1>
          <div className="mt-5 flex flex-row flex-nowrap items-center gap-3 sm:gap-4 lg:justify-start">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#eef2f6] ring-2 ring-white">
              <Image
                src="/images/blog/team1.png"
                alt="Rakesh Sharma"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <p className="text-[0.9rem] leading-snug text-[#697586] sm:text-[0.95rem] lg:text-left">
              <span>Rakesh Sharma</span>
              <span className="mx-2 text-[#cbd5e1]">|</span>
              Updated on: 23 December 2025
              <span className="mx-2 text-[#cbd5e1]">|</span>
              Read time: 12 mins
            </p>
          </div>
        </header>

        <div className="relative mx-auto mt-8 h-[400px] w-full overflow-hidden rounded-xl bg-[#eef2f6] lg:mx-0">
          <Image
            src="/images/blog/blog-cover.png"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1072px) 100vw, 1072px"
          />
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:mt-12 lg:flex-row lg:gap-12 lg:items-start">
          <div className="min-w-0 flex-1 text-center lg:text-left">
            <div className="mx-auto max-w-[650px] rounded-xl bg-[#EFF8FF] px-5 py-4 text-left sm:px-6 sm:py-5 lg:mx-0 lg:max-w-none">
              <p className="mt-2 text-[0.95rem] leading-[1.7] text-[#333840] sm:text-[1rem]">
                Summary: Financial assistance is provided under HMDG to the poor
                patients with family income less than Rs.1,25,000/- annually and
                suffering from major illness and undergoing treatment in
                Government Hospitals/Institutions, to defray a part of the
                expenditure on hospitalization/treatment, in cases where free
                medical facilities are not available.
              </p>
            </div>

            <div className="mt-10 space-y-8 text-left">
              <section id="pmnrf" className="scroll-mt-24">
                <h2 className="text-[1.15rem] font-semibold text-[#121926] sm:text-[1.25rem]">
                  Prime Minister&apos;s National Relief Fund (PMNRF)
                </h2>
                <p className="mt-3 text-[0.95rem] leading-[1.75] text-[#333840] sm:text-[1rem]">
                  The Prime Minister’s National Relief Fund PMNRF) are utilized
                  primarily to render immediate relief to families of those
                  killed in natural calamities like floods, cyclones and
                  earthquakes, etc. and to the victims of the major accidents
                  and riots. In addition to this, the PMNRF provides financial
                  assistance to indigent patients for treatment of major
                  diseases at Government/ PMNRF empanelled hospitals to
                  partially defray the expenses. Disbursements are made with the
                  approval of the Prime Minister. Applicants can apply for grant
                  of financial assistance through an application form addressed
                  to the Prime Minister.
                </p>
                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#333840] sm:text-[1rem]">
                  Applicants, applying for grant of financial assistance for
                  medical treatment, are required to enclose two passport size
                  photographs of patient (one pasted on application, another
                  stapled with application), copy of residence proof, original
                  medical certificate incorporating the type of disease and
                  estimated cost of expenditure and copy of his/her income
                  certificate. After receipt of application, the same is
                  considered and disbursements are made at the sole discretion
                  of the Prime Minister, keeping in view availability of funds
                  and prior commitments of the PMNRF.
                </p>
              </section>

              <section id="hmdg" className="scroll-mt-24">
                <h2 className="text-[1.15rem] font-semibold text-[#121926] sm:text-[1.25rem]">
                  Health Minister&apos;s Discretionary Grant (HMDG)
                </h2>
                <p className="mt-3 text-[0.95rem] leading-[1.75] text-[#333840] sm:text-[1rem]">
                  The Health Minister&apos;s Discretionary Grant (HMDG) is
                  available to poor patients with an annual family income of
                  less than Rs. 1,25,000/- who are undergoing treatment for
                  major illnesses in Government hospitals.
                </p>
                <h3 className="mt-6 text-[1rem] font-semibold text-[#1a2434] sm:text-[1.05rem]">
                  Criteria laid down for sanctioning grants:
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.75] text-[#333840] sm:text-[1rem]">
                  The broad criteria laid down for sanctioning such grants are:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem] leading-[1.75] text-[#333840] sm:text-[1rem]">
                  <li>
                    Reimbursement of expenditure already incurred is not
                    permissible.
                  </li>
                  <li>
                    Prolonged treatment involving recurring expenditure is not
                    permissible.
                  </li>
                  <li>
                    Financial assistance is not admissible for diseases of a
                    common nature where treatment is not expensive.
                  </li>
                  <li>
                    Financial assistance is not admissible for T.B. cases for
                    which free treatment is available under the National T.B.
                    Control Programme.
                  </li>
                  <li>
                    Central as well as State Government employees are not
                    eligible for grant under the rules.
                  </li>
                  <li>
                    Only those having annual family income up to Rs. 1,25,000/-
                    and below are eligible for financial assistance from Health
                    Minister&apos;s Discretionary Grant (HMDG).
                  </li>
                </ul>

                <h3 className="mt-8 text-[1rem] font-semibold text-[#121926] sm:text-[1.05rem]">
                  Financial assistance limits are as follows:
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem] leading-[1.75] text-[#333840] sm:text-[1rem]">
                  <li>
                    Rs. 75,000/-, if the estimated cost of treatment is upto Rs.
                    1,25,000/-;
                  </li>
                  <li>
                    Rs. 1,00,000/- if the estimated cost of treatment is above
                    Rs. 1,25,000/- and upto Rs. 1,75,000/-; and
                  </li>
                  <li>
                    Rs. 1,25,000/- if the estimated cost of treatment is above
                    Rs. 1,75,000/-.
                  </li>
                </ul>

                <h3 className="mt-8 text-[1rem] font-semibold text-[#1a2434] sm:text-[1.05rem]">
                  Application and disbursement
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.75] text-[#333840] sm:text-[1rem]">
                  Patients can apply for financial assistance under the Umbrella
                  Scheme of RAN through either offline or online modes. Offline
                  submission of applications can be made through any Government
                  hospital by patients belonging to those States/UTs, the NFSA
                  data of which is not integrated on National Health Authority
                  (NHA)&apos;s IT platform. For online mode (for States/UTs
                  which are integrated on NHA&apos;s IT platform), the
                  Government hospital generates RAN ID of the eligible patient
                  and, subsequently, the application is processed further
                  through the Transaction Management System (TMS).
                </p>
                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#333840] sm:text-[1rem]">
                  Upon approval, confirmation is sent to the bank for reserving
                  the fund for the patient and treatment commences. Antyodaya
                  beneficiaries from States/UTs where National Food Security Act
                  (NFSA) data has been integrated with the National Health
                  Authority&apos;s (NHA) IT platform, as well as PM-JAY
                  beneficiaries requiring treatment not covered under PM-JAY,
                  are eligible to avail benefits under the Umbrella Scheme of
                  Rashtriya Arogya Nidhi (RAN) through the online mode.
                  Financial assistance for eligible patients is released to the
                  treating hospitals/institutes.
                </p>
              </section>

              <section id="ran" className="scroll-mt-24">
                <h2 className="text-[1.15rem] font-semibold text-[#121926] sm:text-[1.25rem]">
                  Rashtriya Arogya Nidhi (RAN)
                </h2>
                <p className="mt-3 text-[0.95rem] leading-[1.75] text-[#333840] sm:text-[1rem]">
                  Rashtriya Arogya Nidhi (RAN) operates as an umbrella framework
                  through which health-related financial assistance is
                  channelled to eligible patients, including routes under HMDG
                  and related components. Hospitals and State/UT authorities
                  coordinate verification, documentation, and disbursement in
                  line with scheme guidelines.
                </p>
              </section>

              <section id="hmcpf" className="scroll-mt-24">
                <h2 className="text-[1.15rem] font-bold text-[#1a2434] sm:text-[1.25rem]">
                  RAN - Health Minister&apos;s Cancer Patient Fund (HMCPF)
                </h2>
                <p className="mt-3 text-[0.95rem] leading-[1.75] text-[#333840] sm:text-[1rem]">
                  The Health Minister&apos;s Cancer Patient Fund (HMCPF) under
                  RAN focuses on supporting cancer patients who meet the
                  eligibility conditions prescribed under the scheme. Assistance
                  is subject to the same broad principles of need, income, and
                  treatment setting as applicable to the umbrella RAN framework.
                </p>
              </section>
            </div>
          </div>

          <aside className="mx-auto w-full max-w-[650px] shrink-0 text-center lg:mx-0 lg:w-[360px] lg:max-w-none lg:text-left">
            <nav className="rounded-xl pl-5 lg:sticky lg:top-24">
              <p className="text-[0.85rem] font-bold uppercase tracking-wider text-[text-[0.85rem] font-bold uppercase tracking-wider text-[#64748b]]">
                Table of contents
              </p>
              <ul className="mt-4 space-y-3 leading-snug">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={
                        i === 0
                          ? "text-[#1a2434]"
                          : "text-[#A1A9B5] transition-colors hover:text-[#1a2434]"
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-[#e5e7eb] pt-6">
                <div className="flex flex-row flex-nowrap items-center justify-center gap-4 lg:justify-start">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-2 py-2 text-[0.85rem] font-semibold text-[#27AAE1] transition-colors hover:bg-[#eff6ff] hover:text-[#1d4ed8] sm:text-[0.95rem]"
                  >
                    <Share2 className="h-4 w-4 shrink-0" aria-hidden />
                    Share
                  </button>
                  <button
                    type="button"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-2 py-2 text-[0.85rem] font-semibold text-[#27AAE1] transition-colors hover:bg-[#eff6ff] hover:text-[#1d4ed8] sm:text-[0.95rem]"
                  >
                    <Bookmark className="h-4 w-4 shrink-0" aria-hidden />
                    Save for later
                  </button>
                </div>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </article>
  );
}
