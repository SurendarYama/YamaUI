type AccordionItem = {
  title: string;
  content: string;
  isExpand: boolean;
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
    itemTitleWrapper.addEventListener("click", function () {
      if ($item.isExpand) {
        itemContent.classList.remove("flex");
        itemContent.classList.add("hidden");
        itemTitleIcon.classList.remove("fa-minus");
        itemTitleIcon.classList.add("fa-plus");
        $item.isExpand = !$item.isExpand;
      } else {
        itemContent.classList.remove("hidden");
        itemContent.classList.add("flex", "transition", "ease-in-out");
        itemTitleIcon.classList.add("fa-minus");
        itemTitleIcon.classList.remove("fa-plus");
        $item.isExpand = !$item.isExpand;
      }
    });

    const itemTitle = document.createElement("h6");
    itemTitle.classList.add("hover:cursor-pointer");
    const itemTitleIcon = document.createElement("i");
    $item.isExpand
      ? itemTitleIcon.classList.add(...$icons.expand.split(" "))
      : itemTitleIcon.classList.add(...$icons.collapse.split(" "));
    const itemContent = document.createElement("p");
    itemContent.classList.add("py-4", "px-2");
    $item.isExpand
      ? itemContent.classList.add("flex")
      : itemContent.classList.add("hidden");
    itemTitle.innerText = $item.title;
    itemContent.innerText = $item.content;

    itemTitleWrapper.append(itemTitle, itemTitleIcon);
    itemWrapper.append(itemTitleWrapper, itemContent);
    accordionWrapper.append(itemWrapper);
  });
  return accordionWrapper;
};
