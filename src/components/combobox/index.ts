import { createElement, Search, Check } from "lucide";

type Item = {
  label: string;
  value: string;
};

type ComboboxType = {
  items: Item[];
  onChange: (e: Event) => void;
};

export const $combobox = ({ items, onChange }: ComboboxType) => {
  const comboboxWrapper = document.createElement("div");
  comboboxWrapper.classList.add("flex", "flex-col");
  const searchSectionWrapper = document.createElement("div");
  searchSectionWrapper.classList.add("flex", "p-3", "items-center", "gap-3");
  let selectedItem: null | string = null;

  const searchIcon = createElement(Search);
  searchIcon.classList.add("size-[.85rem]", "text-gray-500");
  const searchInput = document.createElement("input");
  searchInput.classList.add(
    "h-4",
    "border-none",
    "focus:ring-[0rem]",
    "outline-none"
  );

  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Search frameworks...");
  searchInput.setAttribute("autocomplete", "off");

  const borderBottomSpan = document.createElement("span");
  borderBottomSpan.classList.add("border-b-2");

  const frameworksListItemsWrapper = document.createElement("ul");
  frameworksListItemsWrapper.setAttribute("id", "frameworksListItemsWrapper");
  frameworksListItemsWrapper.classList.add("text-sm");

  const buildItems = (parent: HTMLUListElement, items: Item[]) => {
    for (const item of items) {
      const frameworkItem = document.createElement("li");
      frameworkItem.addEventListener("click", handleClick);
      frameworkItem.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "p-2",
        "hover:bg-gray-100"
      );
      const checkIcon = createElement(Check);
      checkIcon.classList.add("size-4", "text-gray-700");
      item.value === selectedItem
        ? frameworkItem.append(item.value, checkIcon)
        : frameworkItem.append(item.value);
      parent.append(frameworkItem);
    }
  };
  const handleClick = (e: Event) => {
    onChange(e);
    searchInput.value = "";
    frameworksListItemsWrapper.innerHTML = "";
    selectedItem = (e.target as HTMLSpanElement).textContent;
    buildItems(frameworksListItemsWrapper, items);
  };
  buildItems(frameworksListItemsWrapper, items);

  searchInput.addEventListener("click", (e) => e.stopPropagation());
  searchInput.addEventListener("input", (e) => {
    const inputValue = (e.target as HTMLInputElement).value;
    if (!inputValue) {
      frameworksListItemsWrapper.innerHTML = "";
      buildItems(frameworksListItemsWrapper, items);
    } else {
      const newItems = items.filter((item) =>
        item.value.toLowerCase().includes(inputValue.toLowerCase())
      );
      frameworksListItemsWrapper.innerHTML = "";
      buildItems(frameworksListItemsWrapper, newItems);
      const childWrapper = document.getElementsByClassName(
        "popover-childwrapper"
      )[0] as HTMLElement;
      const parent = document.getElementsByClassName("popover-parent")[0];
      const childHeight = childWrapper.getBoundingClientRect().height;
      parent.getBoundingClientRect().bottom + childHeight > window.innerHeight
        ? (childWrapper.style.marginTop = `-${childHeight + 35}px`)
        : (childWrapper.style.marginTop = ".75rem");
    }
  });

  document.addEventListener("popoverParentClick", () => {
    searchInput.focus();
  });
  searchSectionWrapper.append(searchIcon, searchInput);
  comboboxWrapper.append(
    searchSectionWrapper,
    borderBottomSpan,
    frameworksListItemsWrapper
  );
  return comboboxWrapper;
};
