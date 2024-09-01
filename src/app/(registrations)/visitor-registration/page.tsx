import GridItem from "@/components/ui/GridItem";

const gridItems = [
  {
    title: "Invited Guests",
    subtitle: "(with invite code)",
    imageSrc: "/assets/auction/candles.png",
    goto: "/invited-guests",
  },
  {
    title: "Government",
    subtitle: "(Employees, Officers, Officials)",
    imageSrc: "/assets/auction/earings.png",
    goto: "/government",
  },
  {
    title: "Media",
    subtitle: "",
    imageSrc: "/assets/auction/alda.png",
    goto: "/media",
  },
  {
    title: "General Public",
    subtitle: "(Paying Visitors)",
    imageSrc: "/assets/auction/pumpkin.png",
    goto: "/general-public",
  },
];

export default function Register() {
  return (
    <div className="flex flex-col items-center text-gray-900 bg-white">
      <div className="shadow-lg rounded-lg p-10">
        <h1 className="text-17xl font-semibold text-center">
          VISIT<span className="italic font-serif font-medium">O</span>R REGISTR
          <span className="font-serif">A</span>TION
        </h1>
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              imageSrc={item.imageSrc}
              goto={item.goto}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
