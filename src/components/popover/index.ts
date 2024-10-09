type PopoverType = {
  parent: HTMLElement;
  child: HTMLElement;
  popoverId: string;
};

export const $popover = ({ parent, child, popoverId }: PopoverType) => {
  const popoverWrapper = document.createElement("div");
  popoverWrapper.setAttribute("id", popoverId);
  popoverWrapper.dataset.isOpen = "false";
  parent.classList.add("popover-parent", "relative");
  const childWrapper = document.createElement("div");

  childWrapper.classList.add(
    "popover-childwrapper",
    "absolute",
    "min-w-64",
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
        : (childWrapper.style.marginTop = ".75rem");

      popoverWrapper.dataset.isOpen = "true";
    } else {
      childWrapper.remove();
      popoverWrapper.dataset.isOpen = "false";
    }
    document.dispatchEvent(new CustomEvent("popoverparentclick"));
  });
  document.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("popoverclickoutside"));
    popoverWrapper.dataset.isOpen = "false";
    childWrapper && childWrapper.remove();
  });
  popoverWrapper.append(parent);
  return popoverWrapper;
};
