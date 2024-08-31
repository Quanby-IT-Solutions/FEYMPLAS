import type { FC } from "react";
import MaterialMattersContent from "./stories-material-matters-content";
import Space from "./stories-space";

export type FrameComponentProps = {
  className?: string;
};

const FrameComponent: FC<FrameComponentProps> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch grid flex-row items-start justify-start gap-[28.5px] max-w-full grid-cols-[repeat(3,_minmax(262px,_1fr))] text-center text-13xl text-color-white font-urbanist mq750:grid-cols-[minmax(262px,_1fr)] mq1025:justify-center mq1025:grid-cols-[repeat(2,_minmax(262px,_455px))] ${className}`}
    >
     <MaterialMattersContent
        space1="/assets/stories-touchpoint/category/design.png"
        design="Behind the"
        focus1="Brand"
        maskGroup="/assets/stories-touchpoint/mask.png"
        chevronDown="/assets/stories-touchpoint/stories-svg/arrow.svg"
        propHeight="236px"
        propFlex="unset"
        propMinWidth="unset"
        propHeight1="230px"
        propTop="12.3px"
        propPadding="59px 10px"
        propTop1="11.3px"
        propTop2="181px"
      />
      <MaterialMattersContent
        space1="https://picsum.photos/400/301"
        design="Behind the"
        focus1="Brand"
        maskGroup="/assets/stories-touchpoint/mask.png"
        chevronDown="/assets/stories-touchpoint/stories-svg/arrow.svg"
        propHeight="236px"
        propFlex="unset"
        propMinWidth="unset"
        propHeight1="230px"
        propTop="12.3px"
        propPadding="59px 10px"
        propTop1="11.3px"
        propTop2="181px"
      />
       <MaterialMattersContent
        space1="https://picsum.photos/400/301"
        design="Behind the"
        focus1="Brand"
        maskGroup="/assets/stories-touchpoint/mask.png"
        chevronDown="/assets/stories-touchpoint/stories-svg/arrow.svg"
        propHeight="236px"
        propFlex="unset"
        propMinWidth="unset"
        propHeight1="230px"
        propTop="12.3px"
        propPadding="59px 10px"
        propTop1="11.3px"
        propTop2="181px"
      />
    </div>
  );
};

export default FrameComponent;