import { createElement, Search } from "lucide";

type Item = {
  label: string;
  value: string;
};

type ComboboxType = {
  items: Item[];
  onChange: (selectedItem: string) => void;
};

export const Combobox = ({ items, onChange }: ComboboxType) => {
  const comboboxWrapper = document.createElement("div");
  comboboxWrapper.classList.add("flex", "flex-col");
  const searchSectionWrapper = document.createElement("div");
  searchSectionWrapper.classList.add("flex", "p-2", "items-center", "gap-2");
  const searchIcon = createElement(Search);
  searchIcon.classList.add("size-[.85rem]", "text-gray-500");
  searchSectionWrapper.append(searchIcon);
  const searchInput = document.createElement("input");
  searchInput.classList.add("h-4", "border-none", "focus:ring-[0rem]");
  const searchInputAttrs: { attrName: string; value: string }[] = [
    { attrName: "type", value: "text" },
    { attrName: "placeholder", value: "Search frameworks..." },
    { attrName: "name", value: "combobox-search-input" },
  ];
  for (const { attrName, value } of searchInputAttrs) {
    searchInput.setAttribute(attrName, value);
  }
  searchInput.addEventListener("click", (e) => e.stopPropagation());

  searchSectionWrapper.append(searchIcon, searchInput);

  comboboxWrapper.append(searchSectionWrapper);
  return comboboxWrapper;
};
