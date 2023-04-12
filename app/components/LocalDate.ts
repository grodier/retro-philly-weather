import { useState, useEffect } from "react";

const MONTH_ARR = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const DAY_ARR = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export function useLocalDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(intervalTimer);
    };
  }, []);

  const dayOfMonth = date.getDate();
  const dayOfWeek = DAY_ARR[date.getDay()];
  const month = MONTH_ARR[date.getMonth()];

  return {
    time: date.toLocaleTimeString(),
    dateObj: date,
    abbreviatedDate: `${dayOfWeek} ${month} ${dayOfMonth}`,
  };
}
