type Alert = {
  icon: string;
  title: string;
  des: string;
  customCss: string;
};

export const alert = ({ icon, title, des, customCss }: Alert) => {
  const alertWrapper = document.createElement("div");
  alertWrapper.classList.add(
    "w-1/4",
    "h-16",
    "border-2",
    "rounded-md",
    "p-4",
    "flex",
    "items-center",
    ...customCss.split(" ")
  );

  const alertContentWrapper = document.createElement("div");
  alertContentWrapper.classList.add("flex", "items-center", "gap-2");
  const alertContentIcon = document.createElement("i");
  alertContentIcon.classList.add(...icon.split(" "));

  const alertContentWrapperTwo = document.createElement("div");
  alertContentWrapperTwo.classList.add("flex", "flex-col");

  const alertTitle = document.createElement("h6");
  alertTitle.classList.add("font-semibold");
  alertTitle.append(title);

  const alertDes = document.createElement("p");
  alertDes.classList.add("text-xs", "font-semibold");
  alertDes.append(des);
  alertContentWrapperTwo.append(alertTitle, alertDes);
  alertContentWrapper.append(alertContentIcon, alertContentWrapperTwo);
  alertWrapper.append(alertContentWrapper);
  return alertWrapper;
};
