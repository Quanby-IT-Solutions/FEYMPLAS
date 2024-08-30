import React from 'react';

const StoriesNewsletter: React.FC = () => {
  return (
    <section className="flex flex-col mt-32 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center px-16 py-24 w-full bg-stone-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-end max-md:max-w-full">
          <div className="flex flex-col items-start min-w-[240px] w-[645px] max-md:max-w-full">
            <div className="flex overflow-hidden gap-4 items-center text-xl font-medium whitespace-nowrap text-stone-50">
              <h2 className="self-stretch my-auto">Subscribe</h2>
              <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-50 w-[73px]" />
            </div>
            <h3 className="mt-2 text-4xl font-bold text-white w-[445px]">Can't get enough of Fame+?</h3>
            <p className="self-stretch mt-6 text-xl leading-8 text-neutral-200 max-md:max-w-full">
              Our free email newsletter is bursting at the seams with the latest in high quality design-oriented home, fashion, holiday and interior products.
            </p>
            <form className="flex flex-wrap gap-4 mt-8 max-w-full text-lg leading-loose w-[555px]">
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                type="email"
                id="email"
                className="overflow-hidden grow px-6 py-3.5 font-medium border border-solid border-stone-200 text-stone-200 w-fit max-md:px-5"
                placeholder="Your Email"
              />
              <button type="submit" className="gap-2.5 self-stretch px-12 py-3.5 font-bold text-white whitespace-nowrap bg-stone-600 min-h-[53px] max-md:px-5">
                SUBMIT
              </button>
            </form>
            <p className="mt-2.5 text-sm leading-4 underline text-neutral-200">
              Your data is safe with us and you can unsubscribe at any time.
              <br />
              For more information see our <a href="https://fameplus.com/#" className="underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </p>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/62da5ee5f7b70dda84e43b0bb93d7b6a6ab669b52b5bdffc675e0d4723f26911?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" alt="" className="object-contain aspect-[0.93] min-w-[240px] w-[410px] max-md:max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default StoriesNewsletter;