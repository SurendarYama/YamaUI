import { twMerge } from "tailwind-merge";

import {
  primaryCss,
  secondaryCss,
  destructiveCss,
  outlineCss,
  ghostCss,
  linkCss,
  iconCss,
  withIconCss,
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
  value: string | HTMLElement;
  rounded?: boolean;
  customCss?: string;
};

export const button = ({
  variant = "primary",
  value,
  rounded = false,
  customCss,
}: ButtonConfig) => {
  const ele = document.createElement("button");
  ele.append(value);
  rounded && ele.classList.add("rounded-full");

  function applyCss(
    $ele: HTMLElement,
    $defaultCss: string,
    $customCss?: string
  ) {
    $customCss
      ? $ele.classList.add(...twMerge($defaultCss, $customCss).split(" "))
      : $ele.classList.add(...$defaultCss.split(" "));
  }

  if (variant === "primary") applyCss(ele, primaryCss, customCss);
  else if (variant === "secondary") applyCss(ele, secondaryCss, customCss);
  else if (variant === "destructive") applyCss(ele, destructiveCss, customCss);
  else if (variant === "outline") applyCss(ele, outlineCss, customCss);
  else if (variant === "ghost") applyCss(ele, ghostCss, customCss);
  else if (variant === "link") applyCss(ele, linkCss, customCss);
  else if (variant === "icon") applyCss(ele, iconCss, customCss);
  else if (variant === "with-icon") {
    applyCss(ele, withIconCss, customCss);
    ele.children[0].classList.add(
      "flex",
      "justify-center",
      "items-center",
      "space-x-4"
    );
  } else customCss && ele.classList.add(...customCss.split(" "));

  return ele;
};
