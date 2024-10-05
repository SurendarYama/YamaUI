import { twMerge } from "tailwind-merge";
type AvatarType = {
  src: string;
  fallbackText: string;
  customStyles?: {
    container: string;
    avatar: string;
  };
};

export const $avatar = ({ src, fallbackText, customStyles }: AvatarType) => {
  const avatarWrapper = document.createElement("div");
  const defaultStyles =
    "size-12 rounded-full bg-slate-200 flex items-center justify-center";

  const defaultStylesAvatar = "size-12 rounded-full";

  customStyles
    ? avatarWrapper.classList.add(
        ...twMerge(defaultStyles, customStyles.container).split(" ")
      )
    : avatarWrapper.classList.add(...defaultStyles.split(" "));
  const ft = document.createElement("h3");
  ft.classList.add("font-bold", "text-purple-500", "text-xl");
  ft.append(fallbackText);
  avatarWrapper.append(ft);
  const img = document.createElement("img");
  customStyles
    ? img.classList.add(
        ...twMerge(defaultStylesAvatar, customStyles.avatar).split(" ")
      )
    : img.classList.add(...defaultStylesAvatar.split(" "));
  img.setAttribute("src", src);
  img.addEventListener("load", function () {
    ft.remove();
    avatarWrapper.append(img);
  });

  img.addEventListener("error", function () {
    img.remove();
    ft.remove();
    avatarWrapper.append(ft);
  });

  img.setAttribute("alt", "avatar");
  return avatarWrapper;
};
