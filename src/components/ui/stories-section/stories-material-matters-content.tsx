import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MaterialMattersContentType = {
  className?: string;
  space1?: string;
  design?: string;
  focus1?: string;
  maskGroup?: string;
  chevronDown?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight1?: CSSProperties["height"];
  propTop?: CSSProperties["top"];
  propPadding?: CSSProperties["padding"];
  propTop1?: CSSProperties["top"];
  propTop2?: CSSProperties["top"];
};

const MaterialMattersContent: NextPage<MaterialMattersContentType> = ({
  className = "",
  space1,
  design,
  focus1,
  maskGroup,
  chevronDown,
  propHeight,
  propFlex,
  propMinWidth,
  propHeight1,
  propTop,
  propPadding,
  propTop1,
  propTop2,
}) => {
  const materialMattersContentStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propHeight, propFlex, propMinWidth]);

  const materialMattersTitleStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const creativeDialoguesContentStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      padding: propPadding,
    };
  }, [propTop, propPadding]);

  const maskGroupIconStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const industryNewsTitleStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop2,
    };
  }, [propTop2]);

  return (
    <div
      className={`h-[235px] relative max-w-full text-center text-13xl text-color-white font-urbanist ${className}`}
      style={materialMattersContentStyle}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={materialMattersTitleStyle}
      >
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt=""
          src={space1}
        />
        <div
          className="absolute top-2 left-5 w-72 h-[207px] flex flex-row items-start justify-start py-14 px-2 box-border"
          style={creativeDialoguesContentStyle}
        >
          <div className="h-full w-full absolute m-0 top-0 right-0 bottom-0 left-0 filter blur-lg bg-gray-500 z-[1]" />
          <div className="flex-1 relative font-semibold z-[2] mq450:text-lgi mq1025:text-7xl">
            <p className="m-0">{design}</p>
            <p className="m-0">{focus1}</p>
          </div>
        </div>
        <img
          className="absolute top-2 left-[239px] w-[90px] h-[43.6px] z-[2]"
          loading="lazy"
          alt=""
          src={maskGroup}
          style={maskGroupIconStyle}
        />
      </div>
      {/* Hoverable Dark Olive Green Container with "Explore" Text */}
      <div
        className="group absolute top-[176px] left-0 bg-darkolivegreen flex items-center justify-center py-4 px-3 z-[2] transition-all duration-300 hover:w-48 hover:px-6"
        style={industryNewsTitleStyle}
      >
        {/* "Explore" Text - Hidden by default, shown on hover */}
        <span className="text-white font-urbanist text-lg mr-2 hidden group-hover:inline">
          Explore
        </span>
        {/* Chevron Down Image */}
        <img
          className="w-8 h-6 relative overflow-hidden shrink-0 object-contain"
          alt=""
          src={chevronDown}
        />
      </div>
    </div>
  );
};

export default MaterialMattersContent;
