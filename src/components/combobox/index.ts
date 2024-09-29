import { createElement, Search } from "lucide";

type Item = {
  label: string;
  value: string;
};

type ComboboxType = {
  items: Item[];
  onChange: (e: Event) => void;
};

export const Combobox = ({ items, onChange }: ComboboxType) => {
  const comboboxWrapper = document.createElement("div");
  comboboxWrapper.classList.add("flex", "flex-col");
  const searchSectionWrapper = document.createElement("div");
  searchSectionWrapper.classList.add("flex", "p-3", "items-center");
  const searchIcon = createElement(Search);
  searchIcon.classList.add("size-[.85rem]", "text-gray-500");
  const searchInput = document.createElement("input");
  searchInput.classList.add("h-4", "border-none", "focus:ring-[0rem]");
  const searchInputAttrs: { attrName: string; value: string }[] = [
    { attrName: "type", value: "text" },
    { attrName: "placeholder", value: "Search frameworks..." },
    { attrName: "name", value: "combobox-search-input" },
    { attrName: "autocomplete", value: "off" },
  ];
  for (const { attrName, value } of searchInputAttrs) {
    searchInput.setAttribute(attrName, value);
  }

  const borderBottomSpan = document.createElement("span");
  borderBottomSpan.classList.add("border-b-2");

  const frameworksListItemsWrapper = document.createElement("ul");
  frameworksListItemsWrapper.setAttribute("id", "frameworksListItemsWrapper");
  frameworksListItemsWrapper.classList.add("text-sm");

  const buildItems = (parent: HTMLUListElement, items: Item[]) => {
    for (const item of items) {
      const frameworkItem = document.createElement("li");
      frameworkItem.addEventListener("click", handleClick);
      frameworkItem.classList.add("p-2", "hover:bg-gray-100");
      frameworkItem.append(item.label);
      parent.append(frameworkItem);
    }
  };
  const handleClick = (e: Event) => {
    onChange(e);
    searchInput.value = "";
    frameworksListItemsWrapper.innerHTML = "";
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

  searchSectionWrapper.append(searchIcon, searchInput);
  comboboxWrapper.append(
    searchSectionWrapper,
    borderBottomSpan,
    frameworksListItemsWrapper
  );
  return comboboxWrapper;
};
