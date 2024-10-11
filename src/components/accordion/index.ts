type AccordionItem = {
  id: string;
  title: string;
  content: string;
};
type AccordionIcons = {
  collapse: SVGElement;
  expand: SVGElement;
};
export const $accordion = (items: AccordionItem[], icons: AccordionIcons) => {
  const accordionWrapper = document.createElement("div");
  accordionWrapper.classList.add(
    "w-3/5",
    "flex",
    "flex-col",
    "gap-1",
    "items-center"
  );
  for (const icon of [icons.expand, icons.collapse]) {
    icon.classList.add("size-4", "text-gray-700", "stroke-[.19rem]");
  }
  items.map((item) => {
    const itemWrapper = document.createElement("div");
    itemWrapper.setAttribute("id", item.id);
    itemWrapper.dataset.isExpand = "false";
    itemWrapper.classList.add(
      "w-3/5",
      "bg-white-50",
      "p-3",
      "gap-2",
      "border-b-2",
      "border-gray-200"
    );
    const itemTitleWrapper = document.createElement("div");
    itemTitleWrapper.classList.add(
      "flex",
      "justify-between",
      "p-1",
      "text-sm",
      "font-medium",
      "[&>*:first-child]:hover:underline",
      "[&>*:first-child]:hover:decoration-2",
      "cursor-pointer"
    );

    const itemTitle = document.createElement("h6");
    const itemTitleIcon = document.createElement("span");
    itemWrapper.dataset.isExpand === "true"
      ? itemTitleIcon.append(icons.expand.cloneNode(true))
      : itemTitleIcon.append(icons.collapse.cloneNode(true));
    const itemContent = document.createElement("p");

    itemContent.classList.add("py-4", "px-2", "text-gray-600");
    itemWrapper.dataset.isExpand === "true"
      ? itemContent.classList.add("flex")
      : itemContent.classList.add("hidden");
    itemTitle.innerText = item.title;
    itemContent.innerText = item.content;
    itemTitleWrapper.addEventListener("click", function () {
      const openedItems = document.querySelectorAll("[data-is-expand]");
      openedItems.forEach((op) => {
        if (op == itemWrapper) {
          if (itemWrapper.dataset.isExpand === "false") {
            itemContent.classList.remove("hidden");
            itemContent.classList.add("flex");
            itemTitleIcon.children[0].remove();
            itemTitleIcon.append(icons.expand.cloneNode(true));
            itemWrapper.dataset.isExpand = "true";
          } else {
            itemContent.classList.remove("flex");
            itemContent.classList.add("hidden");
            itemTitleIcon.children[0].remove();
            itemTitleIcon.append(icons.collapse.cloneNode(true));
            itemWrapper.dataset.isExpand = "false";
          }
        } else {
          const prevOpenedItem = op.lastElementChild;
          const prevOpenedItemIcon = op?.firstElementChild?.lastElementChild;
          if (prevOpenedItem) {
            prevOpenedItem.classList.remove("flex");
            prevOpenedItem.classList.add("hidden");
            prevOpenedItemIcon?.children[0].remove();
            prevOpenedItemIcon?.append(icons.collapse.cloneNode(true));
          }
          op instanceof HTMLElement && (op.dataset.isExpand = "false");
        }
      });
    });

    itemTitleWrapper.append(itemTitle, itemTitleIcon);
    itemWrapper.append(itemTitleWrapper, itemContent);
    accordionWrapper.append(itemWrapper);
  });
  return accordionWrapper;
};
