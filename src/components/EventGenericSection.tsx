import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type EventGenericSectionProps = {
  type: 'reversed' | 'basic';
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
  const isReversed = type === 'reversed';

  const splitSubtitle = () => {
    const words = subTitle.split(' ');
    const mid = Math.ceil(words.length / 2);
    return (
      <>
        {words.slice(0, mid).join(' ')}
        <br />
        {words.slice(mid).join(' ')}
      </>
    );
  };

  const splitText = () => {
    const words = text.split(' ');
    const mid = Math.ceil(words.length / 2) + 17;
    return <>{words.slice(0, mid).join(' ')}</>;
  };

  return (
    <section
      className={clsx(
        'flex w-full flex-col-reverse justify-center 2xl:h-[750px] 2xl:flex-row',
        {
          '2xl:flex-row-reverse': isReversed,
        }
      )}
    >
      <div
        className={clsx(
          'flex max-h-[726px] flex-col items-start gap-10 pt-16 2xl:w-[224px]',
          {
            '2xl:ml-10': isReversed,
            '2xl:mr-10': !isReversed,
          }
        )}
      >
        <p>{splitText()}...</p>
        <Image src={dateIcon} alt="date" />
      </div>

      <div className="h-[726px] w-full flex-1 flex-col items-stretch justify-stretch transition-all xl:flex 2xl:w-[966px]">
        <div className="cover-container">
          <Image src={cover} alt="cover" className="w-full 2xl:w-[966px]" />
        </div>
        <div className="flex min-h-[140px] w-full cursor-pointer justify-between rounded-bl-[13px] rounded-br-[13px] bg-black p-6 lg:min-h-[240px] xl:min-h-[240px] 2xl:min-h-[240px]">
          <div className="flex flex-col justify-end lg:block xl:block 2xl:block">
            <h4
              className="text-4xl uppercase md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl"
              style={{ color: colorScheme }}
            >
              {eventType}
            </h4>
            <h3 className="pt-0 text-4xl text-white md:text-4xl lg:pt-6 lg:text-5xl xl:pt-6 xl:text-5xl 2xl:pt-6 2xl:text-5xl">
              {author}
            </h3>
            <p
              className={clsx(
                'pt-0 font-light text-white lg:pt-4 xl:pt-4 2xl:pt-4',
                {
                  'text-2xl': subTitle.length > 25,
                  'text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl':
                    subTitle.length < 25,
                }
              )}
            >
              {subTitle.length > 25 ? splitSubtitle() : subTitle}
            </p>
          </div>
          <div className="hidden pr-16 pt-6 md:block lg:block xl:block 2xl:block">
            <Image
              width={150}
              height={150}
              src={arrow}
              alt="vector-arrow"
              className=""
            />
          </div>
        </div>
      </div>

      <div
        className={clsx('hidden w-[160px] 2xl:flex', {
          'flex-row': isReversed,
          'flex-row-reverse': !isReversed,
        })}
      >
        <h3
          className="text-6xl"
          style={{
            writingMode: 'vertical-lr',
            color: colorScheme,
            transform: isReversed
              ? 'rotate(180deg) translateX(10px)'
              : 'translateX(8px)',
          }}
        >
          {author}
        </h3>
        <p
          className={clsx('font-light', {
            'text-2xl': subTitle.length > 25,
            'text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl':
              subTitle.length < 25,
          })}
          style={{
            writingMode: 'vertical-rl',
            transform: isReversed ? 'rotate(180deg)' : '',
            paddingRight: isReversed ? '10px' : '',
          }}
        >
          {subTitle.length > 25 ? splitSubtitle() : subTitle}
        </p>
      </div>
    </section>
  );
};

export default EventGenericSection;
