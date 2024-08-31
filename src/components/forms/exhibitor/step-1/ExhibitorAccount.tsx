import { FeatureCard } from "./FeatureCard";
import { SelectionField } from "./SelectionField";
import { NavigationButton } from "./NavigationButton";
import { ProgressIndicator } from "./ProgressIndicator";

interface ExhibitorAccountProps { }

export const ExhibitorAccount: React.FC<ExhibitorAccountProps> = () => {
  const features = [
    {
      title: "Showcase your collection offline and online!",
      description:
        "Take the opportunity to show off your newest collections and catch the eye of potential buyers, 365 days a year!",
      bgColor: "bg-white",
      textColor: "text-stone-800",
    },
    {
      title: "Engage in product development and capability building programs",
      description:
        "Innovate and collaborate with product specialists to come up with new designs; and expound your knowledge in business and design thinking.",
      bgColor: "bg-stone-600",
      textColor: "text-white",
    },
    {
      title: "Networking opportunities",
      description:
        "Industry influencers, designers, journalists come together under one roof to experience Manila FAME.",
      bgColor: "bg-white",
      textColor: "text-stone-800",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-stone-800 max-md:max-w-full">
        CR<span className="italic">E</span>ATE YOUR EXHIBITOR <br />
        <span>A</span>CCOUNT
      </h1>

      <section className="flex flex-col justify-center self-start mt-24 max-w-full w-[555px] max-md:mt-10">
        <h2 className="w-full text-4xl font-bold rounded-none text-stone-800 max-md:pr-5">
          Exhibit with FAME+
        </h2>
        <ProgressIndicator current={1} total={7} />
      </section>

      <section className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <button className="flex gap-2.5 justify-center items-center px-6 py-3.5 mt-24 max-w-full text-lg font-bold leading-loose text-white bg-stone-600 min-h-[53px] w-[213px] max-md:px-5 max-md:mt-10">
        REGISTER NOW
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/868a20dade4bb73e44c64c93a617612060fadcd34f513b26aa36c9abb4c7bb80?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      </button>

      <form className="flex flex-col justify-center mt-24 max-w-full text-lg w-[555px] max-md:mt-10">
        <fieldset className="flex flex-col w-full font-medium text-stone-800 text-opacity-70 max-md:max-w-full">
          <legend className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
            Participation Type
            <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
          </legend>
          <SelectionField label="Choose event participating in*" />
          <SelectionField label="Participating as*" />
        </fieldset>

        <div className="flex flex-wrap gap-10 justify-between items-center mt-11 w-full font-bold leading-loose text-white whitespace-nowrap max-md:mt-10">
          <NavigationButton direction="prev" />
          <NavigationButton direction="next" />
        </div>
      </form>
    </main>
  );
};
