import { MoreHorizontal, Share, ThumbsDown, ThumbsUp, ListPlus } from "lucide-react";

export function WatchVideoSection() {
  return (
    <section className="w-full bg-[#131722] py-16 md:py-24 md:mt-12">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-6 md:px-8">
        <h2 className="mb-8 text-center text-xl font-semibold tracking-tight text-white md:text-2xl">
          Watch how your support helps?
        </h2>

        <div className="w-full max-w-[640px] flex flex-col gap-4">
          {/* Video Player Container */}
          <div className="relative w-full overflow-hidden rounded-md bg-gray-800 aspect-video shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/LXb3EKWsInQ?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Metadata */}
          <div className="mt-2 flex flex-col gap-3">
            <h3 className="text-[17px] sm:text-lg font-medium text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h3>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[13px] sm:text-sm text-gray-400">
                156,987 views • Nov 25, 2022
              </div>
              
              <div className="flex items-center gap-4 sm:gap-6 text-[13px] sm:text-sm font-medium text-white overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                <button className="flex items-center gap-2 hover:text-gray-300 transition-colors whitespace-nowrap">
                  <ThumbsUp className="h-5 w-5" />
                  <span>2.7 K</span>
                </button>
                <button className="flex items-center gap-2 hover:text-gray-300 transition-colors whitespace-nowrap">
                  <ThumbsDown className="h-5 w-5" />
                  <span>124</span>
                </button>
                <button className="flex items-center gap-2 hover:text-gray-300 transition-colors whitespace-nowrap">
                  <Share className="h-5 w-5" />
                  <span>SHARE</span>
                </button>
                <button className="flex items-center gap-2 hover:text-gray-300 transition-colors whitespace-nowrap">
                  <ListPlus className="h-5 w-5" />
                  <span>SAVE</span>
                </button>
                <button className="flex items-center justify-center hover:text-gray-300 transition-colors">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
