type AccordionItem = {
  id: string;
  title: string;
  content: string;
};
type AccordionIcons = {
  collapse: string;
  expand: string;
};
export const accordion = ($items: AccordionItem[], $icons: AccordionIcons) => {
  const accordionWrapper = document.createElement("div");
  accordionWrapper.classList.add(
    "w-3/4",
    "flex",
    "flex-col",
    "gap-1",
    "items-center"
  );
  $items.map(($item) => {
    const itemWrapper = document.createElement("div");
    itemWrapper.setAttribute("id", $item.id);
    itemWrapper.dataset.isExpand = "false";
    itemWrapper.classList.add(
      "w-3/4",
      "bg-gray-200",
      "p-5",
      "hover:bg-gray-300"
    );
    const itemTitleWrapper = document.createElement("div");
    itemTitleWrapper.classList.add(
      "flex",
      "justify-between",
      "[&>*:first-child]:hover:underline"
    );

    const itemTitle = document.createElement("h6");
    itemTitle.classList.add("hover:cursor-pointer");
    const itemTitleIcon = document.createElement("i");
    itemWrapper.dataset.isExpand === "true"
      ? itemTitleIcon.classList.add(...$icons.expand.split(" "))
      : itemTitleIcon.classList.add(...$icons.collapse.split(" "));
    const itemContent = document.createElement("p");

    itemContent.classList.add("py-4", "px-2");
    itemWrapper.dataset.isExpand === "true"
      ? itemContent.classList.add("flex")
      : itemContent.classList.add("hidden");
    itemTitle.innerText = $item.title;
    itemContent.innerText = $item.content;
    itemTitleWrapper.addEventListener("click", function () {
      // first to check => clicked item = current item
      // auto close previouse item before open the current item
      const openedItems = document.querySelectorAll("[data-is-expand]");
      openedItems.forEach((op) => {
        if (op == itemWrapper) {
          if (itemWrapper.dataset.isExpand === "false") {
            itemContent.classList.remove("hidden");
            itemContent.classList.add("flex");
            itemTitleIcon.classList.remove(...$icons.collapse.split(" "));
            itemTitleIcon.classList.add(...$icons.expand.split(" "));
            itemWrapper.dataset.isExpand = "true";
          } else {
            itemContent.classList.remove("flex");
            itemContent.classList.add("hidden");
            itemTitleIcon.classList.remove(...$icons.expand.split(" "));
            itemTitleIcon.classList.add(...$icons.collapse.split(" "));
            itemWrapper.dataset.isExpand = "false";
          }
        } else {
          const prevOpenedItem = op.lastElementChild;
          const prevOpenedItemIcon = op?.firstElementChild?.lastElementChild;
          if (prevOpenedItem) {
            prevOpenedItem.classList.remove("flex");
            prevOpenedItem.classList.add("hidden");
            prevOpenedItemIcon?.classList.remove(...$icons.expand.split(" "));
            prevOpenedItemIcon?.classList.add(...$icons.collapse.split(" "));
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
