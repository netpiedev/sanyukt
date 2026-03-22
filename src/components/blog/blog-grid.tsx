import Image from "next/image";
import Link from "next/link";

const categories = [
  "All Categories",
  "Youth Leadership",
  "Volunteer Stories",
  "Member Stories",
  "Community Impact",
  "Environment Initiatives",
  "Health & Hygiene",
  "Events & Campaigns",
];

const blogs = Array(6).fill({
  title: "Title of the blog goes here",
  date: "26 March",
  category: "Youth Leadership",
  excerpt:
    "Running campaigns on menstrual health, period equity, breast cancer, climate action, and youth participation to break taboos.",
  image: "/images/blog/blog.png",
});

export function BlogGrid() {
  return (
    <section className="w-full bg-[#f8fafc] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="text-center">
          <h2 className="text-[2rem] font-bold inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent md:text-[2.25rem]">
            Read our Blogs
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-[0.85rem] leading-[1.7] text-[#697586] sm:text-[0.95rem]">
            We focus on voluntary involvement of people in our social work and
            every person who is associated to the community have their
            responsibility towards it&apos;s development and care.
          </p>
        </div>

        <div className="-mx-6 mt-8 px-6 sm:mx-0 sm:mt-12 sm:px-0">
          <div className="mx-auto flex max-w-[880px] items-center gap-3 overflow-x-auto pb-4 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((category) => (
              <button
                key={category}
                className="flex-none whitespace-nowrap rounded-full border border-[#CDD5DF] bg-white text-[#333840] px-5 py-2 text-[.95rem] font-medium transition-colors hover:border-[#39B54A] hover:text-[#39B54A]"
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex w-full max-w-[350px] flex-col overflow-hidden rounded-[1.2rem] bg-white p-4"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-[0.8rem]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="mt-4 flex flex-1 flex-col px-1">
                <h3 className="text-[1.1rem] font-bold text-[#333840]">
                  {blog.title}
                </h3>
                <div className="mt-1.5 text-[0.80rem] font-medium text-[#9ca3af]">
                  {blog.date} | {blog.category}
                </div>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-[#333840]">
                  {blog.excerpt}
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/blog/desc"
                    className="text-[0.85rem] font-semibold text-[#333840] transition-colors hover:text-[#39B54A]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
