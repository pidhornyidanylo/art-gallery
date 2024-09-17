'use client';
import React, { useState } from 'react';
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  getDaysInMonth,
  startOfMonth,
} from 'date-fns';
import clsx from 'clsx';

const eventInfo = {
  start: {
    day: 30,
    month: 4,
    year: 2024,
  },
  end: {
    day: 8,
    month: 5,
    year: 2024,
  },
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(eventInfo.start.month - 1);
  const [currentYear, setCurrentYear] = useState(eventInfo.start.year);

  const startDate = new Date(
    eventInfo.start.year,
    eventInfo.start.month - 1,
    eventInfo.start.day
  );
  const endDate = new Date(
    eventInfo.end.year,
    eventInfo.end.month - 1,
    eventInfo.end.day
  );

  const eventDurationSet = new Set(
    eachDayOfInterval({
      start: startDate,
      end: endDate,
    }).map((date) => date.getTime())
  );

  const properTitle = `${months[currentMonth]} ${currentYear}`;

  const firstDayOfMonth = startOfMonth(new Date(currentYear, currentMonth));
  const lastDayOfMonth = endOfMonth(new Date(currentYear, currentMonth));

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);
  const endingDayIndex = getDay(lastDayOfMonth);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderPrevMonthDays = () => {
    const daysInPrevMonth = getDaysInMonth(
      new Date(currentYear, currentMonth - 1)
    );
    return Array.from({ length: startingDayIndex }).map((_, index) => {
      const prevMonthDay = new Date(
        currentYear,
        currentMonth - 1,
        daysInPrevMonth - index
      );
      const isEventDay = eventDurationSet.has(prevMonthDay.getTime());
      return (
        <div
          key={`prev-${index}`}
          className={clsx('p-2 text-center text-2xl xl:text-4xl 2xl:text-4xl', {
            'font-bold text-black': isEventDay,
            'text-white text-stroke': !isEventDay,
          })}
        >
          {daysInPrevMonth - index}
        </div>
      );
    });
  };

  const renderNextMonthDays = () => {
    return Array.from({ length: 7 - endingDayIndex - 1 }).map((_, index) => {
      const nextMonthDay = new Date(currentYear, currentMonth + 1, index + 1);
      const isEventDay = eventDurationSet.has(nextMonthDay.getTime());
      return (
        <div
          key={`next-${index}`}
          className={clsx('p-2 text-center text-2xl xl:text-4xl 2xl:text-4xl', {
            'font-bold text-black': isEventDay,
            'text-white text-stroke': !isEventDay,
          })}
        >
          {index + 1}
        </div>
      );
    });
  };

  return (
    <div className="mx-auto w-full p-2 2xl:w-[1180px]">
      <div className="mb-9 flex items-center justify-between gap-4 md:justify-center md:gap-24 lg:justify-center lg:gap-24 xl:justify-center xl:gap-24 2xl:justify-center 2xl:gap-24">
        <button
          className="rounded-md border border-customRed p-2"
          onClick={handlePrevMonth}
        >
          Prev
        </button>
        <h3 className="w-[200px] text-center text-4xl text-customRed md:w-[300px] lg:w-[300px] xl:w-[300px] 2xl:w-[300px]">
          {properTitle}
        </h3>
        <button
          className="rounded-md border border-customRed p-2"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-6">
        {daysOfWeek.map((day) => (
          <div
            className="text-center text-2xl font-light text-customRed xl:text-4xl 2xl:text-4xl"
            key={day}
          >
            {day}
          </div>
        ))}
        {renderPrevMonthDays().reverse()}
        {daysInMonth.map((day, index) => {
          const isEventDay = eventDurationSet.has(day.getTime());
          return (
            <div
              className={clsx(
                'p-2 text-center text-2xl xl:text-4xl 2xl:text-4xl',
                {
                  'font-bold text-black': isEventDay,
                  'text-white text-stroke': !isEventDay,
                }
              )}
              key={index}
            >
              {format(day, 'd')}
            </div>
          );
        })}
        {renderNextMonthDays()}
      </div>
    </div>
  );
};

export default Calendar;
