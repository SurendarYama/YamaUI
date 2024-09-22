import { twMerge } from "tailwind-merge";

type BadgeType = {
  value: string;
  customCss?: string;
};
export const Badge = ({ value, customCss }: BadgeType) => {
  const badgeWrapper = document.createElement("span");
  const defaultCss = `bg-black text-xs text-slate-50 py-[.125rem] px-4 rounded hover:bg-gray-800`;
  customCss
    ? badgeWrapper.classList.add(...twMerge(defaultCss, customCss).split(" "))
    : badgeWrapper.classList.add(...defaultCss.split(" "));
  badgeWrapper.append(value);
  return badgeWrapper;
};
