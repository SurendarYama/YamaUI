import { twMerge } from "tailwind-merge";

type BadgeType = {
  value: string;
  customStyles?: string;
};
export const $badge = ({ value, customStyles }: BadgeType) => {
  const badgeWrapper = document.createElement("span");
  const defaultStyles = `bg-black text-xs text-slate-50 py-[.125rem] px-4 rounded hover:bg-gray-800`;
  customStyles
    ? badgeWrapper.classList.add(
        ...twMerge(defaultStyles, customStyles).split(" ")
      )
    : badgeWrapper.classList.add(...defaultStyles.split(" "));
  badgeWrapper.append(value);
  return badgeWrapper;
};
