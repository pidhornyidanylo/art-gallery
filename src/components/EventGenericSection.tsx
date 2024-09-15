import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type EventGenericSectionProps = {
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

const EventGenericSection: React.FC<EventGenericSectionProps> = ({
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
  const subTitleClasses = subTitle.length > 25 ? "text-2xl" : "2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-4xl";

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
      className={`flex flex-col-reverse 2xl:flex-row ${
        isReversed ? "2xl:flex-row-reverse" : ""
      } justify-center w-full 2xl:h-[750px]`}
    >
      <div
        className={`flex flex-col gap-10 items-start pt-16 max-h-[726px] ${
          isReversed ? "2xl:ml-10" : "2xl:mr-10"
        } 2xl:w-[224px]`}
      >
        <p>{splitText()}...</p>
        <Image src={dateIcon} alt="date" />
      </div>

      <div className="flex-1 transition-all h-[726px] w-full 2xl:w-[966px] xl:flex flex-col justify-stretch items-stretch">
        <div className="cover-container">
          <Image
            src={cover}
            alt="cover"
            className="w-full 2xl:w-[966px]"
          />
        </div>
        <div className="bg-black w-full 2xl:min-h-[240px] xl:min-h-[240px] lg:min-h-[240px] min-h-[140px] rounded-bl-[13px] rounded-br-[13px] cursor-pointer p-6 flex justify-between">
          <div className="flex flex-col justify-end lg:block xl:block 2xl:block">
            <h4 className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-4xl uppercase" style={{ color: colorScheme }}>
              {eventType}
            </h4>
            <h3 className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-4xl text-white pt-0 lg:pt-6 xl:pt-6 2xl:pt-6">{author}</h3>
            <p className={`text-white font-light pt-0 lg:pt-4 xl:pt-4 2xl:pt-4 ${subTitleClasses}`}>
              {subTitle.length > 25 ? splitSubtitle() : subTitle}
            </p>
          </div>
          <div className="pr-16 pt-6 hidden md:block lg:block xl:block 2xl:block">
            <Image width={150} height={150} src={arrow} alt="vector-arrow" className="" />
          </div>
        </div>
      </div>

      <div
        className={`hidden 2xl:flex w-[160px] ${
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
              : "translateX(8px)",
          }}
        >
          {author}
        </h3>
        <p
          className={`font-light ${subTitleClasses}`}
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

export default EventGenericSection;
