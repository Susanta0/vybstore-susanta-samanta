'use client'
import React, { useEffect } from "react";

const Asked = () => {

  useEffect(() => {
    document.querySelectorAll("details").forEach((detail) => {
      detail.removeAttribute("open");
    });
  }, []);
  return (
    <div className="space-y-4 bg-white px-[150px] py-14">
      <h2 className="text-center font-semibold text-2xl text-primary">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p className="w-fit mx-auto text-primary font-normal text-lg">
        Quick answers to questions you may have. Can&apos;t find what you&apos;re looking
        for? <br />
        Check out our full documentation
      </p>

      <div className="px-[210px] space-y-5 pt-16">
        {/* 1st */}
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
              How does the VYB Store work?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <hr className="border-2-2 border-black mt-3" />

          <p className="mt-4 leading-relaxed text-primary font-normal text-1xl">
            VYB Store is an influencer marketplace. You can monetize your travel
            itinerary, merchandise, digital content, and fashion brand. And much
            more yet to come.
          </p>
        </details>
        {/* 2nd */}
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
            How do I get started with the VYB Store?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <hr className="border-2-2 border-black mt-3" />

          <p className="mt-4 leading-relaxed text-primary font-normal text-1xl">
          Getting started with VYB Store is super easy! Simply sign up for an account, create your store, and start sharing your store link in your Instagram bio with the audience.
          </p>
        </details>
        {/* 3rd */}
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
            What does &quot;Zero Cost&quot; mean?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <hr className="border-2-2 border-black mt-3" />

          <p className="mt-4 leading-relaxed text-primary font-normal text-1xl">
          Zero cost means vybing with us is completely free. You don’t have to pay a single rupee to build your store and monetize your audience.
          </p>
        </details>
        {/* 4th */}
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
            How do I track my earnings on VYB Store?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <hr className="border-2-2 border-black mt-3" />

          <p className="mt-4 leading-relaxed text-primary font-normal text-1xl">
          We provide you with detailed analytics to track your earnings and performance. You can see how many purchases your links have generated, as well as your total earnings.
          </p>
        </details>
        {/* 5th */}
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
            What kind of products can I sell on VYB Store?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <hr className="border-2-2 border-black mt-3" />

          <p className="mt-4 leading-relaxed text-primary font-normal text-1xl">
          You can sell a variety of products on VYB Store, including physical merchandise, digital downloads, and even services like travel itineraries and plenty more.
          </p>
        </details>
        {/* 6th */}
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
            How do I withdraw my earnings?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <hr className="border-2-2 border-black mt-3" />

          <p className="mt-4 leading-relaxed text-primary font-normal text-1xl">
          We offer various payout options, including bank transfers. In the earning section under your profile click the withdraw button to withdraw your earnings. Withdrawal will be available every 14 days.
          </p>
        </details>
        {/* 7th */}
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
            How can I get support if I have any questions or issues?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <hr className="border-2-2 border-black mt-3" />

          <p className="mt-4 leading-relaxed text-primary font-normal text-1xl">
          If you have any questions or issues, you can reach out to VYB Store&apos;s customer support team via email at support@vybstore.com. We're here to help you succeed!
          </p>
        </details>
        {/* 8th */}
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
            Do I need technical skills to use the platform?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <hr className="border-2-2 border-black mt-3" />

          <p className="mt-4 leading-relaxed text-primary font-normal text-1xl">
          No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&apos;s as simple as a few clicks to get started!

          </p>
        </details>
        {/* 9th */}
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
            We didn't find any account with those login credentials?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <hr className="border-2-2 border-black mt-3" />

          <p className="mt-4 leading-relaxed text-primary font-normal text-1xl">
            
You did google Sign in for the first time, so now &quot;Reset Password&quot; on login page. You will receive magic link on the email. Use that link to change your password. Happy Vybing! 
          </p>
        </details>
        {/* 10th */}
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
            This email is already in use?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <hr className="border-2-2 border-black mt-3" />

          <p className="mt-4 leading-relaxed text-primary font-normal text-1xl">
          You did email login first time. So, you probably need to connect Google. You can do email login and go to profile section and press &quot;Connect Google&quot;. Next time you should be able to do Google login seamlessly. in case you've forgotten the password, press &quot;Reset Password&quot;

          </p>
        </details>

      </div>
    </div>
  );
};

export default Asked;
