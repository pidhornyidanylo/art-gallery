'use client';
import React from 'react';
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  getMonth,
  isEqual,
  isSameMonth,
  startOfMonth,
} from 'date-fns';
import clsx from 'clsx';

const eventInfo = {
  start: {
    day: 28,
    month: 8,
    year: 2024,
  },
  end: {
    day: 10,
    month: 9,
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
    eventInfo.start.month !== eventInfo.end.month
      ? months[getMonth(startDate)] + ' | ' + months[getMonth(endDate)]
      : months[getMonth(startDate)];

  const firstDayOfMonth = startOfMonth(startDate);
  const lastDayOfMonth = endOfMonth(startDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });
  const startingDayIndex = getDay(firstDayOfMonth);
  const endingDayIndex = getDay(lastDayOfMonth);

  const eventDuration = eachDayOfInterval({
    start: new Date(
      eventInfo.start.year,
      eventInfo.start.month - 1,
      eventInfo.start.day
    ),
    end: new Date(
      eventInfo.end.year,
      eventInfo.end.month - 1,
      eventInfo.end.day
    ),
  });

  return (
    <div className="container mx-auto p-2">
      <div>
        <h3 className="text-customRed mb-9 text-center text-4xl">
          {properTitle}
        </h3>
      </div>
      <div className="grid grid-cols-7 gap-6">
        {daysOfWeek.map((day) => {
          return (
            <div
              className="text-customRed text-center text-2xl font-light"
              key={day}
            >
              {day}
            </div>
          );
        })}
        {Array.from({ length: startingDayIndex }).map((_, index) => {
          return <div key={`empty-${index}`}></div>;
        })}
        {daysInMonth.map((day, index) => {
          return (
            <div
              className={clsx('p-2 text-center text-4xl', {
                'font-bold text-black': eventDuration.find((date) =>
                  isEqual(date, day)
                ),
                'text-stroke text-white': !eventDuration.find((date) =>
                  isEqual(date, day)
                ),
              })}
              key={index}
            >
              {format(day, 'd')}
            </div>
          );
        })}
        {eventInfo.start.month !== eventInfo.end.month &&
          Array.from({ length: 7 - endingDayIndex - 1 }).map((_, index) => {
            return (
              <div
                key={`empty-${index}`}
                className={clsx('p-2 text-center text-4xl', {
                  'font-bold text-black': eventDuration.find((date) =>
                    isEqual(
                      date,
                      new Date(
                        eventInfo.end.year,
                        eventInfo.end.month - 1,
                        index + 1
                      )
                    )
                  ),
                  'text-stroke-opacity-5 text-white': !eventDuration.find(
                    (date) =>
                      isEqual(
                        date,
                        new Date(
                          eventInfo.end.year,
                          eventInfo.end.month - 1,
                          index + 1
                        )
                      )
                  ),
                })}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Calendar;
