type PopoverType = {
  parent: HTMLElement;
  child: HTMLElement;
};

export const Popover = ({ parent, child }: PopoverType) => {
  const popoverWrapper = document.createElement("div");
  popoverWrapper.dataset.isOpen = "false";
  parent.classList.add("relative");
  const childWrapper = document.createElement("div");
  childWrapper.classList.add(
    "absolute",
    "min-w-64",
    "p-1",
    "border-2",
    "max-h-64",
    "overflow-auto",
    "bg-white",
    "text-left"
  );
  childWrapper.append(child);

  parent.addEventListener("click", (e) => {
    e.stopPropagation();
    if (popoverWrapper.dataset.isOpen === "false") {
      parent.append(childWrapper);
      const childHeight = childWrapper.getBoundingClientRect().height;
      parent.getBoundingClientRect().bottom + childHeight > window.innerHeight
        ? (childWrapper.style.marginTop = `-${childHeight + 35}px`)
        : (childWrapper.style.top = "2.5rem");

      popoverWrapper.dataset.isOpen = "true";
    } else {
      childWrapper.remove();
      popoverWrapper.dataset.isOpen = "false";
    }
  });
  document.addEventListener("click", () => {
    childWrapper && childWrapper.remove();
  });
  popoverWrapper.append(parent);
  return popoverWrapper;
};
