import { twMerge } from "tailwind-merge";

type CardType = {
  child: HTMLElement;
  customCss?: string;
};
export const Card = ({ child, customCss }: CardType) => {
  const cardWrapper = document.createElement("div");
  const defaultCss =
    "w-96 bg-white border-2 border-gray-300 p-4 rounded shadow-lg";
  customCss
    ? cardWrapper.classList.add(...twMerge(defaultCss, customCss).split(" "))
    : cardWrapper.classList.add(...defaultCss.split(" "));
  cardWrapper.append(child);
  return cardWrapper;
};
