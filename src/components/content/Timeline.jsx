import Image from "next/image";
import Link from "next/link";
import React from "react";

const Timeline = () => {
  return (
    <section className="px-[150px] mt-6">
      <div class="bg-white text-white py-8">
        <div class="container mx-auto flex items-start">
          <div class="bg-primary rounded-2xl flex flex-col w-full sticky top-[15.7em] xl:w-[33.7em] px-4 py-4">
            <h3 class="xl:text-[27px] font-bold md:text-4xl leading-normal md:leading-relaxed mb-4">
              Start Vybing with us!
            </h3>
            <p class="text-sm md:text-base text-gray-50 mb-12">
            &quot;We help influencers make money by monetizing their travel plans,
              merchandise, and digital goods and many more.&quot;
            </p>
            <Link
              href="#"
              class="bg-tertiary font-semibold text-xl text-black mr-auto rounded-xl py-3 px-9"
            >
              Jion Us
            </Link>
          </div>

          {/* timeline parent */}
          <div class=" lg:w-2/3 sticky">
            {/* first timeline */}
            <div class="container mx-auto w-full h-full">
              <div className="relative z-10 wrap overflow-hidden pl-10 h-full">
                <div
                  class="border-2 absolute border-opacity-20 border-gray-500 h-full"
                  style={{ right: "90.5%" }}
                ></div>

                <div class="mb-8 flex gap-10 right-timeline">
                  <div class="z-20 flex items-center order-0 bg-gray-800 shadow-xl h-14 w-16 rounded-md">
                    <h1 class="mx-auto text-4xl text-tertiary">1</h1>
                  </div>
                  <div class="order-1 bg-secondary rounded-2xl w-full px-6 py-4">
                    <div className="py-2 w-full flex flex-col items-start gap-y-6">
                      <h2 className="text-black font-bold text-xl">
                        Sign Up and create your own store hassle-free.
                      </h2>
                      <p className="text-black font-medium">
                        Join us via Google signin and verify your influencer
                        status by entering your social media Id and unlock your
                        store @ zero cost.
                      </p>
                      <div className="w-full flex items-start justify-center">
                        <Image
                          src="/bannerLogo/firstbanner.gif"
                          width={272}
                          height={606}
                          alt="banner"
                          className="border-4 border-gray-300 rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second timeline */}
            <div class="container mx-auto w-full h-full">
              <div className="relative z-10 wrap overflow-hidden pl-10 h-full">
                <div
                  class="border-2 absolute border-opacity-20 border-gray-500 h-full"
                  style={{ right: "90.5%" }}
                ></div>
                <div class="mb-8 flex gap-10 right-timeline">
                  <div class="z-20 flex items-center order-0 bg-gray-800 shadow-xl h-14 w-16 rounded-md">
                    <h1 class="mx-auto text-4xl text-tertiary">2</h1>
                  </div>
                  <div class="order-1 bg-secondary rounded-2xl w-full px-6 py-4">
                    <div className="py-2 w-full flex flex-col items-start gap-y-6">
                      <h2 className="text-black font-bold text-xl">
                        Build & customize your store front.
                      </h2>
                      <p className="text-black font-medium">
                        Simply fill in the details to build your digital store.
                        Once done, start selling your products to your audience.
                      </p>
                      <div className="w-full flex items-start justify-center">
                        <Image
                          src="/bannerLogo/secondbanner.gif"
                          width={272}
                          height={606}
                          alt="banner"
                          className="border-4 border-gray-300 rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* third timeline */}
            <div class="container mx-auto w-full h-full">
              <div className="relative z-10 wrap overflow-hidden pl-10 h-full">
                <div
                  class="border-2 absolute border-opacity-20 border-gray-500 h-full"
                  style={{ right: "90.5%" }}
                ></div>
                <div class="mb-8 flex gap-10 right-timeline">
                  <div class="z-20 flex items-center order-0 bg-gray-800 shadow-xl h-14 w-16 rounded-md">
                    <h1 class="mx-auto text-4xl text-tertiary">3</h1>
                  </div>
                  <div class="order-1 bg-secondary rounded-2xl w-full px-6 py-4">
                    <div className="py-2 w-full flex flex-col items-start gap-y-6">
                      <h2 className="text-black font-bold text-xl">
                        Call the audience to your store. Easily integrate links
                        into content.
                      </h2>
                      <p className="text-black font-medium">
                        After setting up your products, its time to go public.
                        Put your store link in insta bio and lets make first
                        post together !
                      </p>
                      <div className="w-full flex items-start justify-center">
                        <Image
                          src="/bannerLogo/thirdbanner.gif"
                          width={272}
                          height={606}
                          alt="banner"
                          className="border-4 border-gray-300 rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* forth timeline */}
            <div class="container mx-auto w-full h-full">
              <div className="relative z-10 wrap overflow-hidden pl-10 h-full">
                <div
                  class="border-2 absolute border-opacity-20 border-gray-500"
                  style={{ right: "90.5%" }}
                ></div>
                <div class="mb-8 flex gap-10 right-timeline">
                  <div class="z-20 flex items-center order-0 bg-gray-800 shadow-xl h-14 w-16 rounded-md">
                    <h1 class="mx-auto text-4xl text-tertiary">4</h1>
                  </div>
                  <div class="order-1 bg-secondary rounded-2xl w-full px-6 py-4">
                    <div className="py-2 w-full flex flex-col items-start gap-y-6">
                      <h2 className="text-black font-bold text-xl">
                      &quot;Monetize your influencer status: Earn money adding real
                        value to your true followers!&quot;
                      </h2>
                      <p className="text-black font-medium">
                        Let VYB the money now !! It&apos;s here and withdraw it
                        periodically.
                      </p>
                      <div className="w-full flex items-start justify-center">
                        <Image
                          src="/bannerLogo/fourthbanner.gif"
                          width={272}
                          height={606}
                          alt="banner"
                          className="border-4 border-gray-300 rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
