import { twMerge } from "tailwind-merge";

type CardType = {
  child: HTMLElement;
  customStyles?: string;
};
export const $card = ({ child, customStyles }: CardType) => {
  const cardWrapper = document.createElement("div");
  const defaultStyles =
    "w-96 bg-white border-2 border-gray-300 p-4 rounded shadow-lg";
  customStyles
    ? cardWrapper.classList.add(
        ...twMerge(defaultStyles, customStyles).split(" ")
      )
    : cardWrapper.classList.add(...defaultStyles.split(" "));
  cardWrapper.append(child);
  return cardWrapper;
};
