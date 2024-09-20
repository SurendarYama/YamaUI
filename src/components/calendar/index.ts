import { createElement, ChevronLeft, ChevronRight } from "lucide";
import { button } from "@/components/button";

export const calendar = (onClick: (value: any) => void) => {
  const calendarWrapper = document.createElement("div");
  calendarWrapper.classList.add(
    "w-64",
    "border-4",
    "rounded",
    "flex",
    "flex-col",
    "py-4",
    "px-2",
    "gap-2"
  );
  const calendarHeader = document.createElement("div");
  calendarHeader.classList.add("flex", "items-center", "justify-between");
  const leftIconButton = button({
    variant: "icon",
    value: createElement(ChevronLeft),
    customCss: "p-0 text-gray-500",
  });
  const rightIconButton = button({
    variant: "icon",
    value: createElement(ChevronRight),
    customCss: "p-0 text-gray-500",
  });

  const currentMonthWrapper = document.createElement("span");
  currentMonthWrapper.classList.add("flex", "gap-2", "font-bold", "text-sm");

  let currentDate = new Date();
  let currentMonthName = (currentDate: Date) =>
    currentDate.toLocaleString("default", {
      month: "long",
    });

  const month = document.createElement("span");
  month.append(currentMonthName(currentDate));
  const year = document.createElement("span");
  year.append(currentDate.getFullYear().toString());
  currentMonthWrapper.append(month, year);
  const daysWrapper = document.createElement("div");
  daysWrapper.classList.add(
    "grid",
    "grid-cols-7",
    "grid-rows-1",
    "ml-3",
    "text-gray-500"
  );
  for (const day of ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]) {
    const dayWrapper = document.createElement("span");
    dayWrapper.append(day);
    daysWrapper.append(dayWrapper);
  }

  const calendarDaysWrapper = document.createElement("div");
  calendarDaysWrapper.classList.add(
    "grid",
    "grid-cols-7",
    "grid-rows-5",
    "ml-3",
    "gap-2"
  );

  const createDatesArray = (date: Date) => {
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const getDaysArray = function (start: Date, end: Date) {
      const arr = [];
      for (
        const dt = new Date(start);
        dt <= new Date(end);
        dt.setDate(dt.getDate() + 1)
      ) {
        arr.push(new Date(dt));
      }
      return arr;
    };
    return getDaysArray(firstDay, lastDay);
  };

  const datesArray = createDatesArray(currentDate);

  const getDisplayDatesArray = (dates: Date[]) => {
    const dayName = (date: Date, locale: string = "default") =>
      date.toLocaleDateString(locale, { weekday: "short" });
    if (dayName(dates[0]) === "Sun") {
      return [...dates];
    } else if (dayName(dates[0]) === "Mon") {
      return ["", ...dates];
    } else if (dayName(dates[0]) === "Tue") {
      return ["", "", ...dates];
    } else if (dayName(dates[0]) === "Wed") {
      return ["", "", "", ...dates];
    } else if (dayName(dates[0]) === "Thu") {
      return ["", "", "", "", ...dates];
    } else if (dayName(dates[0]) === "Fri") {
      return ["", "", "", "", "", ...dates];
    } else {
      return ["", "", "", "", "", "", ...dates];
    }
  };

  const resultDates = getDisplayDatesArray(datesArray);
  const appendDates = (rds: any) => {
    for (const rd of rds) {
      const resultDateSpan = document.createElement("span");
      resultDateSpan.classList.add("text-center", "hover:cursor-pointer");
      resultDateSpan.dataset.date = rd;
      const r = typeof rd === "string" ? rd : rd.getDate();
      resultDateSpan.append(r);
      resultDateSpan.addEventListener("click", function () {
        if (resultDateSpan.innerText !== "") {
          resultDateSpan.classList.toggle("selected-date");
          onClick(rd);
        }
      });
      calendarDaysWrapper.append(resultDateSpan);
    }
  };
  appendDates(resultDates);

  leftIconButton.addEventListener("click", () => {
    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    month.innerText = "";
    month.append(currentMonthName(currentDate));
    year.innerText = "";
    year.append(currentDate.getFullYear().toString());
    const prevDatesArray = createDatesArray(currentDate);
    const prevResultDates = getDisplayDatesArray(prevDatesArray);
    calendarDaysWrapper.innerHTML = "";
    appendDates(prevResultDates);
  });
  rightIconButton.addEventListener("click", () => {
    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    month.innerText = "";
    month.append(currentMonthName(currentDate));
    year.innerText = "";
    year.append(currentDate.getFullYear().toString());
    const nextDatesArray = createDatesArray(currentDate);
    const nextResultDates = getDisplayDatesArray(nextDatesArray);
    calendarDaysWrapper.innerHTML = "";
    appendDates(nextResultDates);
  });

  calendarHeader.append(leftIconButton, currentMonthWrapper, rightIconButton);
  calendarWrapper.append(calendarHeader, daysWrapper, calendarDaysWrapper);
  return calendarWrapper;
};
