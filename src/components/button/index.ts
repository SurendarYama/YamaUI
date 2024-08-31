import { twMerge } from "tailwind-merge";
import { h } from "@/utils";

const buttonCss = "px-10 py-2";
export const primaryCss = `${buttonCss} bg-black text-white`;

type ButtonConfig = {
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "outline"
    | "custom";
  value: string;
  rounded?: boolean;
  customCss?: string;
};

export const button = ({
  variant = "primary",
  value,
  rounded = false,
  customCss,
}: ButtonConfig) => {
  const ele = h("button", null, value);

  rounded && ele.classList.add("rounded", "rounded-full");
  switch (variant) {
    case "primary":
      customCss
        ? ele.classList.add(...twMerge(primaryCss, customCss).split(" "))
        : ele.classList.add(primaryCss);
      break;
    default:
      if (customCss) {
        Array.isArray(customCss)
          ? ele.classList.add(...customCss)
          : ele.classList.add(customCss);
      }
      break;
  }
  return ele;
};
