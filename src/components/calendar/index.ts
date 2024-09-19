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
    "p-2",
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

  calendarHeader.append(leftIconButton, currentMonthWrapper, rightIconButton);
  calendarWrapper.append(calendarHeader, daysWrapper);
  return calendarWrapper;
};
