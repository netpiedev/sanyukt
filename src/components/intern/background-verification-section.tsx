export function BackgroundVerificationSection() {
  return (
    <section className="w-full px-6 py-14 bg-[#F8FAFC] text-center sm:px-8 md:py-16">
      <div className="mx-auto w-full max-w-[960px]">
        <h2 className="inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-[2rem] font-semibold leading-[1.02] tracking-tight text-transparent sm:text-[3rem]">
          <span className="sm:hidden">
            Background
            <br />
            Verification
          </span>
          <span className="hidden sm:inline">Background Verification</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[0.90rem] leading-[1.7] text-[#697586] sm:text-[1rem]">
          Colleges, universities, and companies can directly contact Sanyukt
          Internship team regarding any intern for verification purposes. Our
          team responds promptly, ensuring all academic and professional
          credentials are confirmed efficiently
        </p>
        <div className="mt-8">
          <a
            href="mailto:connect@intern.sanyuktorg.com"
            className="inline-flex w-full max-w-[320px] items-center justify-center rounded-full bg-[#39B54A] px-6 py-2.5 text-[0.95rem] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A] sm:max-w-none sm:w-auto"
          >
            <span className="sm:hidden">Contact us</span>
            <span className="hidden sm:inline">
              Contact us at:&nbsp; connect@intern.sanyuktorg.com
            </span>
          </a>
          <p className="mt-5 text-[0.95rem] font-medium text-[#1f2937] sm:hidden">
            connect@intern.sanyuktorg.com
          </p>
        </div>
      </div>
    </section>
  );
}
