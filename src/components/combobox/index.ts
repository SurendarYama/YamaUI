import { createElement, Search, Check } from "lucide";

type Item = {
  label: string;
  value: string;
};

type ComboboxType = {
  items: Item[];
  onChange: (selectedItem: string | null) => void;
};

export const $combobox = ({ items, onChange }: ComboboxType) => {
  let selectedItemIndex = 0;
  // let previousSelectedItemIndex = 0;
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
  searchInput.setAttribute("placeholder", "Search Frameworks...");
  searchInput.setAttribute("autocomplete", "off");

  const borderBottomSpan = document.createElement("span");
  borderBottomSpan.classList.add("border-b-2");

  const comboboxListItemsWrapper = document.createElement("ul");
  comboboxListItemsWrapper.classList.add("text-sm");
  const checkIcon = createElement(Check);
  checkIcon.classList.add("size-4", "text-gray-700");

  const buildItems = (parent: HTMLUListElement, items: Item[]) => {
    for (const [itemIndex, item] of items.entries()) {
      const comboboxItem = document.createElement("li");
      comboboxItem.addEventListener("click", handleClick);
      itemIndex === 0 && comboboxItem.classList.add("bg-zinc-200");

      comboboxItem.addEventListener("mouseover", () => {
        comboboxListItemsWrapper.children[selectedItemIndex].classList.remove(
          "bg-zinc-200"
        );
        comboboxListItemsWrapper.children[itemIndex].classList.add(
          "bg-zinc-200"
        );
        selectedItemIndex = itemIndex;
      });
      comboboxItem.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "p-2"
      );

      item.value === selectedItem
        ? comboboxItem.append(item.value, checkIcon)
        : comboboxItem.append(item.value);
      parent.append(comboboxItem);
    }
  };
  const handleClick = (e: Event) => {
    onChange((e.target as HTMLSpanElement)!.textContent);
    searchInput.value = "";
    comboboxListItemsWrapper.innerHTML = "";
    selectedItem = (e.target as HTMLSpanElement).textContent;
    buildItems(comboboxListItemsWrapper, items);
  };
  buildItems(comboboxListItemsWrapper, items);

  searchInput.addEventListener("click", (e) => e.stopPropagation());
  searchInput.addEventListener("input", (e) => {
    const inputValue = (e.target as HTMLInputElement).value;
    if (!inputValue) {
      comboboxListItemsWrapper.innerHTML = "";
      buildItems(comboboxListItemsWrapper, items);
    } else {
      const newItems = items.filter((item) =>
        item.value.toLowerCase().includes(inputValue.toLowerCase())
      );
      comboboxListItemsWrapper.innerHTML = "";
      buildItems(comboboxListItemsWrapper, newItems);
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

  document.addEventListener("popoverparentclick", () => {
    searchInput.focus();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const selectedComboboxListItem =
        comboboxListItemsWrapper.children[selectedItemIndex];
      onChange(selectedComboboxListItem.textContent);

      const popoverForCombobox = document.getElementById(
        "popover-for-combobox"
      );
      selectedComboboxListItem.append(checkIcon);
      popoverForCombobox!.dataset.isOpen = "false";
      popoverForCombobox?.click();
      selectedItemIndex = 0;
    }

    if (e.key === "ArrowDown") {
      if (selectedItemIndex < comboboxListItemsWrapper.children.length - 1) {
        comboboxListItemsWrapper.children[selectedItemIndex].classList.remove(
          "bg-zinc-200"
        );
        comboboxListItemsWrapper.children[selectedItemIndex + 1].classList.add(
          "bg-zinc-200"
        );

        selectedItemIndex = selectedItemIndex + 1;
      }
    }

    if (e.key === "ArrowUp") {
      if (selectedItemIndex > 0) {
        comboboxListItemsWrapper.children[selectedItemIndex].classList.remove(
          "bg-zinc-200"
        );
        comboboxListItemsWrapper.children[selectedItemIndex - 1].classList.add(
          "bg-zinc-200"
        );
        selectedItemIndex = selectedItemIndex - 1;
      }
    }
  });

  document.addEventListener("popoverclickoutside", () => {
    comboboxListItemsWrapper.children[selectedItemIndex].classList.remove(
      "bg-zinc-200"
    );
    comboboxListItemsWrapper.children[0].classList.add("bg-zinc-200");
    selectedItemIndex = 0;
  });
  searchSectionWrapper.append(searchIcon, searchInput);
  comboboxWrapper.append(
    searchSectionWrapper,
    borderBottomSpan,
    comboboxListItemsWrapper
  );
  return comboboxWrapper;
};
