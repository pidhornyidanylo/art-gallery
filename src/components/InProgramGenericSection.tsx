import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type InProgramGenericSectionProps = {
  type: "reversed" | "basic";
  text: string;
  cover: string | StaticImport;
  eventType: string;
  author: string;
  subTitle: string;
  colorScheme: string;
  arrow: string | StaticImport;
  dateIcon: string | StaticImport;
};

const InProgramGenericSection: React.FC<InProgramGenericSectionProps> = ({
  type,
  text,
  cover,
  eventType,
  author,
  subTitle,
  colorScheme,
  arrow,
  dateIcon,
}) => {
  const isReversed = type === "reversed";
  const subTitleClasses = subTitle.length > 25 ? "text-2xl" : "text-5xl";

  const splitSubtitle = () => {
    const words = subTitle.split(" ");
    const mid = Math.ceil(words.length / 2);
    return (
      <>
        {words.slice(0, mid).join(" ")}
        <br />
        {words.slice(mid).join(" ")}
      </>
    );
  };

  const splitText = () => {
    const words = text.split(" ");
    const mid = Math.ceil(words.length / 2) + 17;
    return <>{words.slice(0, mid).join(" ")}</>;
  };

  return (
    <section
      className={`2xl:h-[750px] w-full flex flex-row justify-center ${
        isReversed ? "2xl:flex-row-reverse" : "2xl:flex-row"
      } flex-col-reverse`}
    >
      <div
        className={`2xl:w-[224px] pt-16 flex flex-col items-start max-h-[726px] gap-10 ${
          isReversed ? "2xl:ml-10" : "2xl:mr-10"
        }`}
      >
        <p>{splitText()}...</p>
        <Image src={dateIcon} alt="date" />
      </div>

      <div className="transition-all flex-1 w-full 2xl:w-[966px] h-[726px] xl:flex flex-col justify-stretch items-stretch">
        <div className="cover-container">
          <Image src={cover} alt="cover1" className="2xl:w-[966px] xl:w-full w-full" />
        </div>
        <div className="bg-black w-full min-h-[240px] rounded-bl-[13px] rounded-br-[13px] cursor-pointer p-6 flex justify-between">
          <div>
            <h4 className="text-5xl uppercase" style={{ color: colorScheme }}>
              {eventType}
            </h4>
            <h3 className="text-5xl text-white pt-6">{author}</h3>
            <p className={`text-white font-light pt-4 ${subTitleClasses}`}>
              {subTitle.length > 25 ? splitSubtitle() : subTitle}
            </p>
          </div>
          <div className="pr-16 pt-6">
            <Image width={150} height={150} src={arrow} alt="vector-arrow" />
          </div>
        </div>
      </div>

      <div
        className={`2xl:flex hidden w-[160px] ${
          isReversed ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <h3
          className="text-6xl"
          style={{
            writingMode: "vertical-lr",
            color: colorScheme,
            transform: isReversed
              ? "rotate(180deg) translateX(10px)"
              : " translateX(8px)",
          }}
        >
          {author}
        </h3>
        <p
          className={`text-black font-light ${subTitleClasses}`}
          style={{
            writingMode: "vertical-rl",
            transform: isReversed ? "rotate(180deg)" : "",
            paddingRight: isReversed ? "10px" : "",
          }}
        >
          {subTitle.length > 25 ? splitSubtitle() : subTitle}
        </p>
      </div>
    </section>
  );
};

export default InProgramGenericSection;