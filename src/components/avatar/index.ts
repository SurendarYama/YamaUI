type Avatar = {
  src: string;
  fallbackText: string;
};

export const avatar = ({ src, fallbackText }: Avatar) => {
  const avatarWrapper = document.createElement("div");
  avatarWrapper.classList.add(
    "size-12",
    "rounded-full",
    "bg-slate-200",
    "flex",
    "items-center",
    "justify-center"
  );
  const ft = document.createElement("h3");
  ft.classList.add("font-bold", "text-purple-500", "text-xl");
  ft.append(fallbackText);
  avatarWrapper.append(ft);
  const img = document.createElement("img");
  img.classList.add("size-12", "rounded-full");
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
