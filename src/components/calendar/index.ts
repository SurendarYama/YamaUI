import { createElement, ChevronLeft, ChevronRight } from "lucide";
import { button } from "@/components/button";

export const calendar = () => {
  const calendarWrapper = document.createElement("div");
  calendarWrapper.classList.add(
    "size-64",
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

  const currentDate = new Date();
  let currentMonthName = (currentDate: any) =>
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
  const startOfMonth = (date: any) =>
    new Date(date.getFullYear(), date.getMonth(), 1);

  const dayName = (date: any, locale: any = "default") =>
    date.toLocaleDateString(locale, { weekday: "short" });

  const daysInMonth = (year: number, month: number) =>
    new Date(year, month, 0).getDate();

  const startDay = dayName(startOfMonth(new Date()));
  const totalNumberOfDays = daysInMonth(
    new Date().getFullYear(),
    new Date().getMonth()
  );

  const calendarDaysWrapper = document.createElement("div");
  calendarDaysWrapper.classList.add(
    "grid",
    "grid-cols-7",
    "grid-rows-5",
    "ml-3",
    "gap-2"
  );
  for (let i = 0; i < 35; i++) {
    const daySpan = document.createElement("span");
    daySpan.append((i + 1).toString());
    calendarDaysWrapper.append(daySpan);
  }

  calendarHeader.append(leftIconButton, currentMonthWrapper, rightIconButton);
  calendarWrapper.append(calendarHeader, daysWrapper, calendarDaysWrapper);
  return calendarWrapper;
};
