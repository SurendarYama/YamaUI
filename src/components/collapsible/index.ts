import { ChevronsUpDown, createElement } from "lucide";
import { $button, $card } from "@/components";

export const $collapsible = (heading: string, data: string[]) => {
  const collapsiableWrapper = document.createElement("div");
  collapsiableWrapper.classList.add("flex", "flex-col", "w-96", "gap-2");
  collapsiableWrapper.dataset.isExpand = "false";

  const headerWrapper = document.createElement("div");
  headerWrapper.classList.add("flex", "gap-2", "items-center");
  const headingText = document.createElement("span");
  headingText.classList.add("font-bold");
  headingText.append(heading);

  const collapsiableCTABtnIcon = createElement(ChevronsUpDown);
  collapsiableCTABtnIcon.classList.add("size-4");
  const collapsiableCTABtn = $button({
    variant: "icon",
    value: collapsiableCTABtnIcon,
    customStyles: "p-1 bg-transparent border-none hover:bg-slate-100",
  });
  const cardChild = document.createElement("div");
  cardChild.innerText = data[0];
  const firstEl = $card({
    child: cardChild,
    customStyles: "text-sm px-6 py-2 shadow-none", // Collapsible Component
  });

  const collapsiableDisplayItem = document.createElement("div");
  collapsiableDisplayItem.classList.add("hidden");

  const displayData = [...data];
  displayData.shift();
  for (const di of displayData) {
    const cardChild = document.createElement("div");
    cardChild.innerText = di;
    const diEl = $card({
      child: cardChild,
      customStyles: "text-sm px-6 py-2 shadow-none",
    });
    collapsiableDisplayItem.append(diEl);
  }

  collapsiableCTABtn.addEventListener("click", () => {
    if (collapsiableWrapper.dataset.isExpand === "false") {
      collapsiableDisplayItem.classList.remove("hidden");
      collapsiableDisplayItem.classList.add("flex", "flex-col", "gap-2");
      collapsiableWrapper.dataset.isExpand = "true";
    } else {
      collapsiableDisplayItem.classList.remove("flex", "flex-col", "gap-2");
      collapsiableDisplayItem.classList.add("hidden");
      collapsiableWrapper.dataset.isExpand = "false";
    }
  });

  headerWrapper.append(headingText, collapsiableCTABtn);
  collapsiableWrapper.append(headerWrapper, firstEl, collapsiableDisplayItem);
  return collapsiableWrapper;
};
