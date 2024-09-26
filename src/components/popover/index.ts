import { Button } from "@/components";

type PopoverType = {
  popoverBtnText: string;
  child: HTMLElement;
};

export const Popover = ({ popoverBtnText, child }: PopoverType) => {
  const popoverWrapper = document.createElement("div");
  const popoverBtn = Button({ variant: "secondary", value: popoverBtnText });
  popoverBtn.classList.add("relative");
  const childWrapper = document.createElement("div");
  childWrapper.classList.add("absolute", "w-64", "p-4", "border-2", "mt-4");
  childWrapper.dataset.isOpen = "false";
  childWrapper.append(child);
  popoverBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (childWrapper.dataset.isOpen === "false") {
      popoverBtn.append(childWrapper);
      childWrapper.dataset.isOpen = "true";
    } else {
      childWrapper.remove();
      childWrapper.dataset.isOpen = "false";
    }
  });
  document.addEventListener("click", () => {
    childWrapper && childWrapper.remove();
  });
  popoverWrapper.append(popoverBtn);
  return popoverWrapper;
};
