import type { FC } from "react";
import MaterialMattersContent from "./stories-material-matters-content";
import Space from "./stories-space";

export type KathaOriginsTitleProps = {
  className?: string;
};

const KathaOriginsTitle: FC<KathaOriginsTitleProps> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[28.5px] mb-14 max-w-full text-center text-13xl text-color-white font-urbanist mq1025:flex-wrap ${className}`}
    >
      <MaterialMattersContent
        space1="https://picsum.photos/400/300"
        design="Material"
        focus1="Matters"
          maskGroup="/assets/stories-touchpoint/mask.png"
        chevronDown="/assets/stories-touchpoint/stories-svg/arrow.svg"
        propHeight="200px"
        propFlex="1"
        propMinWidth="262px"
        propHeight1="230px"
        propTop="12.3px"
        propPadding="59px 10px"
        propTop1="11.3px"
        propTop2="181px"
      />
       <MaterialMattersContent
        space1="https://picsum.photos/400/300"
        design="Material"
        focus1="Matters"
         maskGroup="/assets/stories-touchpoint/mask.png"
        chevronDown="/assets/stories-touchpoint/stories-svg/arrow.svg"
        propHeight="200px"
        propFlex="1"
        propMinWidth="262px"
        propHeight1="230px"
        propTop="12.3px"
        propPadding="59px 10px"
        propTop1="11.3px"
        propTop2="181px"
      />
       <MaterialMattersContent
        space1="https://picsum.photos/400/300"
        design="Material"
        focus1="Matters"
          maskGroup="/assets/stories-touchpoint/mask.png"
        chevronDown="/assets/stories-touchpoint/stories-svg/arrow.svg"
        propHeight="200px"
        propFlex="1"
        propMinWidth="262px"
        propHeight1="230px"
        propTop="12.3px"
        propPadding="59px 10px"
        propTop1="11.3px"
        propTop2="181px"
      />
    </div>
  );
};

export default KathaOriginsTitle;