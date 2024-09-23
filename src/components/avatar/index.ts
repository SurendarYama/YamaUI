import { twMerge } from "tailwind-merge";
type AvatarType = {
  src: string;
  fallbackText: string;
  customCss?: {
    container: string;
    avatar: string;
  };
};

export const Avatar = ({ src, fallbackText, customCss }: AvatarType) => {
  const avatarWrapper = document.createElement("div");
  const defaultCss =
    "size-12 rounded-full bg-slate-200 flex items-center justify-center";

  const defaultCssAvatar = "size-12 rounded-full";

  customCss
    ? avatarWrapper.classList.add(
        ...twMerge(defaultCss, customCss.container).split(" ")
      )
    : avatarWrapper.classList.add(...defaultCss.split(" "));
  const ft = document.createElement("h3");
  ft.classList.add("font-bold", "text-purple-500", "text-xl");
  ft.append(fallbackText);
  avatarWrapper.append(ft);
  const img = document.createElement("img");
  customCss
    ? img.classList.add(
        ...twMerge(defaultCssAvatar, customCss.avatar).split(" ")
      )
    : img.classList.add(...defaultCssAvatar.split(" "));
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
