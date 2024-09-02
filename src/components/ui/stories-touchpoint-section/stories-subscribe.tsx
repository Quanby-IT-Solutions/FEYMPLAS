'use client';

import type { FC } from "react";
import { useState, useCallback } from "react";
import EmailNewsletterSubscriptio from "./stories-email-newsletter-subscriptio";
import PortalPopup from "./stories-portal-popup";

export type SubscribeProps = {
  className?: string;
};

const Subscribe: FC<SubscribeProps> = ({ className = "" }) => {
  const [isEmailNewsletterSubscriptioOpen, setEmailNewsletterSubscriptioOpen] =
    useState(false);

  const openEmailNewsletterSubscriptio = useCallback(() => {
    setEmailNewsletterSubscriptioOpen(true);
  }, []);

  const closeEmailNewsletterSubscriptio = useCallback(() => {
    setEmailNewsletterSubscriptioOpen(false);
  }, []);

  return (
    <>
      <section
        className={`self-stretch bg-gray-300 flex flex-row items-start justify-center pt-11 px-5 pb-0 box-border gap-[18px] max-w-full text-left text-xl text-color-gray-3 font-urbanist mq750:pt-[29px] mq750:box-border mq1100:flex-wrap mq1100:justify-center ${className}`}
      >
        <div className="h-[524px] w-[1440px] relative bg-gray-300 hidden max-w-full" />
        <div className="w-[645px] flex flex-col items-start justify-start pt-[47px] px-0 pb-0 box-border min-w-[645px] max-w-full mq450:pt-[31px] mq450:box-border mq750:min-w-full mq1100:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="w-[445px] flex flex-col items-start justify-start gap-2 max-w-full text-color-gray-4">
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <div className="relative leading-[30px] font-medium inline-block min-w-[88px] z-[1] mq450:text-base mq450:leading-[24px]">
                  Subscribe
                </div>
                <div className="w-[73px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
                  <div className="self-stretch h-0.5 relative bg-color-gray-4 z-[1]" />
                </div>
              </div>
              <b className="self-stretch relative text-21xl text-color-white z-[1] mq450:text-5xl mq1025:text-13xl">
                Ca get enough of Fame+?
              </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full">
              <div className="flex-1 relative leading-[30px] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[24px]">
                Our free email newsletter is bursting at the seams with the
                latest in high quality design-oriented home, fashion, holiday
                and interior products.
              </div>
            </div>
            <div className="w-[555px] flex flex-col items-start justify-start gap-[9px] max-w-full text-smi">
              <div className="self-stretch flex flex-row items-start justify-start gap-4 max-w-full mq750:flex-wrap">
                <div className="flex-1 border-antiquewhite border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[11px] px-6 pb-2.5 min-w-[84px] max-w-full z-[1]">
                  <input
                    className="w-[84px] [border:none] [outline:none] font-medium font-urbanist text-lg bg-[transparent] h-7 relative leading-[28px] text-antiquewhite text-left inline-block p-0"
                    placeholder="Your Email"
                    type="text"
                  />
                </div>
                <button
                  className="cursor-pointer [border:none] py-[12.5px] px-[47px] bg-darkolivegreen flex flex-row items-start justify-start z-[1] hover:bg-gray-100"
                  onClick={openEmailNewsletterSubscriptio}
                >
                  <b className="relative text-lg leading-[28px] inline-block font-urbanist text-color-white text-left min-w-[67px]">
                    SUBMIT
                  </b>
                </button>
              </div>
              <div className="self-stretch relative leading-[16px] z-[1]">
                <p className="m-0">
                  Your data is safe with us and you can unsubscribe at any time.
                </p>
                <p className="m-0">
                  For more information see our{" "}
                  <a
                    className="text-[inherit]"
                    href="https://fameplus.com/#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="[text-decoration:underline]">
                      Privacy Policy
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[480px] w-[447px] relative min-w-[447px] max-w-full mq750:min-w-full mq1100:flex-1">
          <img
            className="absolute top-[222.8px] left-[0px] w-[262px] h-[257.2px] z-[1]"
            alt="Sample 1"
            src="https://picsum.photos/262/257?random=1"
          />
          <img
            className="absolute top-[0px] left-[111px] w-[262px] h-[257.2px] z-[2]"
            alt="Sample 2"
            src="https://picsum.photos/262/257?random=2"
          />
          <img
            className="absolute top-[46px] left-[37px] w-[410px] h-[344px] object-cover z-[3]"
            alt="Sample 3"
            src="https://picsum.photos/410/344?random=3"
          />
        </div>
      </section>
      {isEmailNewsletterSubscriptioOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEmailNewsletterSubscriptio}
        >
          <EmailNewsletterSubscriptio
            onClose={closeEmailNewsletterSubscriptio}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default Subscribe;
