import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="border pt-28 bg-secondary px-[150px] pb-4 space-y-6">
      <div>
        <h1 className="m-auto w-fit font-bold text-4xl">
          Hey! We Are VYB Store
        </h1>
        <div className="flex items-center justify-around mt-4">
          <div className="flex flex-col items-center gap-y-6 w-1/2">
            <h2 className="text-3xl font-bold">Our Objective</h2>
            <p className="font-medium text-lg">
              Join us exclusively as we revolutionize content{" "}
              <span className="font-bold">monetization for Influencers !</span>{" "}
              We want to excel in offering meticulously crafted itineraries and
              premium digital content, merchandise and listing of clothing
              brands. Our upcoming features will empower creators and
              influencers to kickstart their businesses effortlessly, without
              the need for their own websites. Say goodbye to the hassle of
              dealing with developers and hello to unleashing your creativity!
              Partner with us now and unlock the full potential to monetize your
              content.
            </p>
          </div>
          <div className="">
            <Image
              src="/contact/img1.jpeg"
              width={400}
              height={400}
              alt="image"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="m-auto w-fit font-bold text-4xl">Our Team</h2>
        <div className=" flex items-center justify-center mt-8">
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full"
              src="/contact/image 42.svg"
              height={150}
              width={150}
              alt="logo"
            />
            <h3 className="font-bold text-base">Yatharth Gupta</h3>
            <p className="w-44 text-center text-base font-medium">
              Engineer, Ex-Coinswitch , Ex Mylo Founder
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              className="rounded-full"
              src="/contact/image 46.svg"
              height={150}
              width={150}
              alt="logo"
            />
            <h3 className="font-bold text-base">Devanshi</h3>
            <p className="w-44 text-center text-base font-medium">
              Designer, NIT J Founding Team Member
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="m-auto w-fit font-bold text-4xl">Contact Us</h1>
        <div className="flex gap-x-14 justify-center mt-4">
          <div className=" w-[20em] space-y-4">
            <div className="pl-6 flex gap-x-4 items-center border-2 rounded-md border-primary py-3">
              <Phone className="h-10 w-10 rounded-full bg-primary text-white border px-2" />
              <div>
                <p className="font-extrabold">Phone number</p>
                <p className="font-semibold">8383877065</p>
              </div>
            </div>
            <div className="pl-6 flex gap-x-4 items-center border-2 rounded-md border-primary py-3">
              <Mail className="h-10 w-10 rounded-full bg-primary text-white border px-2" />
              <div>
                <p className="font-extrabold">Email address</p>
                <p className="font-semibold">support@vybstore.com</p>
              </div>
            </div>
            <div className="pl-6 flex gap-x-4 items-center border-2 rounded-md border-primary py-3">
              <MapPin className="h-10 w-10 rounded-full bg-primary text-white border px-2" />
              <div>
                <p className="font-extrabold">Location</p>
                <p className="font-semibold">Delhi</p>
              </div>
            </div>
            <div className="pl-6 flex gap-x-4 items-center border-2 rounded-md border-primary py-4">
              <Instagram className="h-10 w-10 rounded-full bg-primary text-white border px-2" />
              <div>
                <p className="font-extrabold">Social media</p>
                <div className="flex items-center gap-x-2">
                  <Image
                    src="/contact/insta.png"
                    height={25}
                    width={25}
                    alt="insta logo"
                  />
                  <Image
                    src="/contact/linkdine.png"
                    height={25}
                    width={25}
                    alt="linkedin logo"
                  />
                  <Image
                    src="/contact/youtube.svg"
                    height={25}
                    width={25}
                    alt="youtube logo"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-primary w-[22em] p-2 pb-5 rounded-lg">
            <p className="m-auto w-fit font-bold text-2xl">Send Message</p>
            <div className="grid grid-cols-2 mx-auto gap-4 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-black py-3 px-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Email"
                className="border border-black py-3 px-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-black py-3 px-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Insta ID/ YT ID"
                className="border border-black py-3 px-2 rounded-lg"
              />
              <textarea
                placeholder="Message"
                className="border border-black p-2 rounded-lg col-span-2"
              ></textarea>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button className="font-semibold text-white bg-primary px-6 py-4 rounded-xl">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-x-14 justify-center text-center mt-4">
          <div className=" w-[20em] border space-y-4 flex flex-col justify-center items-center">
            <p className="font-base text-xl">Are you also a creator?</p>
            <p className="font-bold text-2xl">Your audience wants links</p>
            <p>
              Make it easy for them by linking products to every post and video
            </p>
            <button className="font-medium text-2xl text-white bg-primary px-9 py-3 rounded-2xl hover:shadow-lg">
              Join Us
            </button>
          </div>

          <div className="border-2 border-primary w-[22em] rounded-lg">
            <Image
              src="/contact/img2.png"
              width={350}
              height={422.39}
              alt="image"
              className=" rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
