'use client';
import React from 'react';
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  getMonth,
  startOfMonth,
} from 'date-fns';
import clsx from 'clsx';

const eventInfo = {
  start: {
    day: 3,
    month: 10,
    year: 2024,
  },
  end: {
    day: 8,
    month: 10,
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

const Calendar = () => {
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

  const properTitle =
    months[getMonth(startDate)] +
    (getMonth(startDate) !== getMonth(endDate)
      ? ' | ' + months[getMonth(endDate)]
      : '');

  const firstDayOfMonth = startOfMonth(startDate);
  const lastDayOfMonth = endOfMonth(startDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);
  const endingDayIndex = getDay(lastDayOfMonth);

  const eventDurationSet = new Set(
    eachDayOfInterval({
      start: startDate,
      end: endDate,
    }).map((date) => date.getTime())
  );

  console.log(eventDurationSet);

  const renderNextMonthDays = () => {
    return Array.from({ length: 7 - endingDayIndex - 1 }).map((_, index) => {
      const nextMonthDay = new Date(
        eventInfo.end.year,
        eventInfo.end.month - 1,
        index + 1
      );
      const isEventDay = eventDurationSet.has(nextMonthDay.getTime());

      return (
        <div
          key={`next-month-${index}`}
          className={clsx('p-2 text-center text-4xl', {
            'font-bold text-black': isEventDay,
            'text-stroke text-white': !isEventDay,
          })}
        >
          {index + 1}
        </div>
      );
    });
  };

  return (
    <div className="2xl:w-[1180px] w-full mx-auto p-2">
      <div>
        <h3 className="text-customRed mb-9 text-center text-4xl">
          {properTitle}
        </h3>
      </div>
      <div className="grid grid-cols-7 gap-6">
        {daysOfWeek.map((day) => (
          <div
            className="text-customRed text-center text-2xl font-light"
            key={day}
          >
            {day}
          </div>
        ))}

        {Array.from({ length: startingDayIndex }).map((_, index) => (
          <div key={`empty-${index}`}></div>
        ))}

        {daysInMonth.map((day, index) => {
          const isEventDay = eventDurationSet.has(day.getTime());
          return (
            <div
              className={clsx('p-2 text-center text-4xl', {
                'font-bold text-black': isEventDay,
                'text-stroke text-white': !isEventDay,
              })}
              key={index}
            >
              {format(day, 'd')}
            </div>
          );
        })}

        {eventInfo.start.month !== eventInfo.end.month && renderNextMonthDays()}
      </div>
    </div>
  );
};

export default Calendar;
