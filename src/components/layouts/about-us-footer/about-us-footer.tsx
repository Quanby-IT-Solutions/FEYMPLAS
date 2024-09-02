/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import EmailNewsletterSubscriptio from "@/components/ui/stories-touchpoint-section/stories-email-newsletter-subscriptio";
import PortalPopup from "@/components/ui/stories-touchpoint-section/stories-portal-popup";

export default function Footer() {
  const [isEmailNewsletterSubscriptioOpen, setEmailNewsletterSubscriptioOpen] = useState(false);

  const openEmailNewsletterSubscriptio = useCallback(() => {
    setEmailNewsletterSubscriptioOpen(true);
  }, []);

  const closeEmailNewsletterSubscriptio = useCallback(() => {
    setEmailNewsletterSubscriptioOpen(false);
  }, []);

  return (
    <>
      <div className="w-full h-fit bg-primary-2 text-timeless-white overflow-hidden">
        <div className="w-full h-full flex flex-row gap-12 py-20 max-w-[80%] mx-auto">
          <div className="w-full h-full flex flex-col">
            <div className="flex flex-row gap-2 justify-start items-center">
              <p>Subscribe</p>
              <hr className="w-16 border border-timeless-white" />
            </div>
            <FooterContentLeft openEmailNewsletterSubscriptio={openEmailNewsletterSubscriptio} />
          </div>
          <FooterContentRight />
        </div>
      </div>

      {isEmailNewsletterSubscriptioOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEmailNewsletterSubscriptio}
        >
          <EmailNewsletterSubscriptio onClose={closeEmailNewsletterSubscriptio} />
        </PortalPopup>
      )}
    </>
  );
}

const FooterContentLeft = ({ openEmailNewsletterSubscriptio }: { openEmailNewsletterSubscriptio: () => void }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-6 tracking-wide font-[300]">
      <h1 className="text-18xl font-bold w-full max-w-sm mt-2 leading-snug">
        Can’t get enough of Fame+?
      </h1>
      <p>
        Our free email newsletter is bursting at the seams with the latest in
        high quality design-oriented home, fashion, holiday, and interior
        products.
      </p>
      <div className="w-full flex flex-col gap-2.5">
        <div className="w-full flex flex-row gap-4">
          <input
            type="text"
            className="w-full p-3 pl-6 border border-timeless-white bg-primary-2 placeholder:text-timeless-white outline-none"
            placeholder="Your email"
          />
          <button
            className="uppercase p-3 w-44 bg-secondary-5 text-timeless-white"
            onClick={openEmailNewsletterSubscriptio}
          >
            Submit
          </button>
        </div>
        <p className="text-xs font-[200] max-w-md">
          Your data is safe with us and you can unsubscribe at any time. For
          more information see our 
          <a
            className="text-timeless-white underline"
            href="https://fameplus.com/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
};

const FooterContentRight = () => {
  return (
    <div className="h-full w-full flex justify-center items-center relative">
      <img className="z-10" src="assets/about-us/4.png" alt="" />
      <img className="absolute -bottom-24 left-6" src="assets/about-us/mask.png" alt="" />
      <img className="absolute -top-24 right-6" src="assets/about-us/mask.png" alt="" />
    </div>
  );
};
