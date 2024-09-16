'use client';
import React, { useState } from 'react';
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
    day: 30,
    month: 9,
    year: 2024,
  },
  end: {
    day: 10,
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

  //   const currentDate = new Date();
  //   console.log(currentDate);
  const firstDayOfMonth = startOfMonth(startDate);
  const lastDayOfMonth = endOfMonth(startDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);

  return (
    <div className="container mx-auto p-2">
      <div>
        <h3 className="text-center">{months[getMonth(startDate)]}</h3>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day) => {
          return (
            <div className="text-center font-bold" key={day}>
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
              className={clsx(
                'rounded-md border border-black p-2 text-center',
                {
                  'bg-gray-700': eventInfo.start.day === +format(day, 'd'),
                  'font-bold text-white':
                    eventInfo.start.day === +format(day, 'd'),
                }
              )}
              key={index}
            >
              {format(day, 'd')}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
