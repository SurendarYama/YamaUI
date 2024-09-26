type PopoverType = {
  parent: HTMLElement;
  child: HTMLElement;
};

export const Popover = ({ parent, child }: PopoverType) => {
  const popoverWrapper = document.createElement("div");

  parent.classList.add("relative");
  const childWrapper = document.createElement("div");
  childWrapper.classList.add("absolute", "w-64", "p-4", "border-2", "mt-4");
  childWrapper.dataset.isOpen = "false";
  childWrapper.append(child);
  parent.addEventListener("click", (e) => {
    e.stopPropagation();
    if (childWrapper.dataset.isOpen === "false") {
      parent.append(childWrapper);
      childWrapper.dataset.isOpen = "true";
    } else {
      childWrapper.remove();
      childWrapper.dataset.isOpen = "false";
    }
  });
  document.addEventListener("click", () => {
    childWrapper && childWrapper.remove();
  });
  popoverWrapper.append(parent);
  return popoverWrapper;
};
