"use client";
import React, { useEffect } from "react";

const Policies = () => {
  useEffect(() => {
    document.querySelectorAll("details").forEach((detail) => {
      detail.removeAttribute("open");
    });
  }, []);
  return (
    <div className="border h-screen pt-24 bg-white px-[150px]">
      <h1 className="m-auto w-fit font-bold text-4xl">Refund</h1>

      <ul>
        <li>We appreciate your purchase at Createnary.</li>
        <li>
          We encourage users to carefully review their selections before
          completing a purchase. In case of technical issues or discrepancies
          with the purchased content, please reach out to our customer support
          team at [support@vybstore.com] for assistance.
        </li>
        <li>
          Createnary reserves the right to make exceptions to this policy on a
          case-by-case basis, at our sole discretion. We appreciate your
          understanding and cooperation.
        </li>
        <li>
          By using our services, you agree to abide by this no refund policy. If
          you have any questions or concerns, please contact us at
          [support@vybstore.com].
        </li>
      </ul>

      <div className=" mt-4 space-y-4">
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
              Refund Policy for Digital
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
            You did email login first time. So, you probably need to connect
            Google. You can do email login and go to profile section and press
            &quot;Connect Google&quot;. Next time you should be able to do
            Google login seamlessly. in case you&apos;ve forgotten the password,
            press &quot;Reset Password&quot;
          </p>
        </details>
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
              Refund Policy for Itinerary
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
            You did email login first time. So, you probably need to connect
            Google. You can do email login and go to profile section and press
            &quot;Connect Google&quot;. Next time you should be able to do
            Google login seamlessly. in case you&apos;ve forgotten the password,
            press &quot;Reset Password&quot;
          </p>
        </details>
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">
              Refund Policy for Merchandise
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
            You did email login first time. So, you probably need to connect
            Google. You can do email login and go to profile section and press
            &quot;Connect Google&quot;. Next time you should be able to do
            Google login seamlessly. in case you&apos;ve forgotten the password,
            press &quot;Reset Password&quot;
          </p>
        </details>
        <details
          className="group rounded-2xl bg-secondary py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-bold text-primary">Refund Policy for Brand</h2>

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
            You did email login first time. So, you probably need to connect
            Google. You can do email login and go to profile section and press
            &quot;Connect Google&quot;. Next time you should be able to do
            Google login seamlessly. in case you&apos;ve forgotten the password,
            press &quot;Reset Password&quot;
          </p>
        </details>
      </div>
      <div className=" mt-4">
        <h1 className="m-auto w-fit font-bold text-4xl">Privacy Policy</h1>
        <br />
        <p>
          This privacy policy relates to the manner BNERD TECH LLP in which we
          use, handle and process the data that you provide us in connection
          with using the products or services we offer. By using this website or
          by availing goods or services offered by us, you agree to the terms
          and conditions of this Policy, and consent to our use, storage,
          disclosure, and transfer of your information or data in the manner
          described in this Policy.
        </p>
        <br />
        <p>
          We are committed to ensuring that your privacy is protected in
          accordance with applicable laws and regulations. We urge you to
          acquaint yourself with this Policy to familiarize yourself with the
          manner in which your data is being handled by us.
        </p>
        <br />
        <p>
          BNERD TECH LLP may change this Policy periodically and we urge you to
          check this page for the latest version of the Policy in order to keep
          yourself updated.
        </p>
      </div>
    </div>
  );
};

export default Policies;
