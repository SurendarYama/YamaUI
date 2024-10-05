import { twMerge } from "tailwind-merge";

import {
  primaryStyles,
  secondaryStyles,
  destructiveStyles,
  outlineStyles,
  ghostStyles,
  linkStyles,
  iconStyles,
  withIconStyles,
} from "./button.style";

type ButtonConfig = {
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | "icon"
    | "with-icon"
    | "custom";
  value: string | HTMLElement | SVGElement | Node;
  customStyles?: string;
};

export const $button = ({
  variant = "primary",
  value,
  customStyles,
}: ButtonConfig) => {
  const buttonEl = document.createElement("button");
  buttonEl.append(value);

  function applyStyles(
    ele: HTMLElement,
    defaultStyles: string,
    customStyles?: string
  ) {
    customStyles
      ? ele.classList.add(...twMerge(defaultStyles, customStyles).split(" "))
      : ele.classList.add(...defaultStyles.split(" "));
  }

  if (variant === "primary") applyStyles(buttonEl, primaryStyles, customStyles);
  else if (variant === "secondary")
    applyStyles(buttonEl, secondaryStyles, customStyles);
  else if (variant === "destructive")
    applyStyles(buttonEl, destructiveStyles, customStyles);
  else if (variant === "outline")
    applyStyles(buttonEl, outlineStyles, customStyles);
  else if (variant === "ghost")
    applyStyles(buttonEl, ghostStyles, customStyles);
  else if (variant === "link") applyStyles(buttonEl, linkStyles, customStyles);
  else if (variant === "icon") applyStyles(buttonEl, iconStyles, customStyles);
  else if (variant === "with-icon") {
    applyStyles(buttonEl, withIconStyles, customStyles);
    buttonEl.children[0].classList.add(
      "flex",
      "justify-center",
      "items-center",
      "space-x-4"
    );
  } else customStyles && buttonEl.classList.add(...customStyles.split(" "));

  return buttonEl;
};
