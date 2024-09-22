import { createElement, Ellipsis } from "lucide";
import { Button } from "@/components/button";

type BreadcrumbItem = {
  title: string;
  href: string;
};

export const Breadcrumb = (
  $breadcrumbItems: BreadcrumbItem[],
  $breadcrumbIcon: SVGElement
) => {
  const breadcrumbWrapper = document.createElement("div");
  breadcrumbWrapper.classList.add("flex", "items-center");
  const ellipsisIcon = createElement(Ellipsis);
  $breadcrumbIcon.classList.add("size-4");

  if ($breadcrumbItems.length >= 4) {
    const displayItems = [
      ...[...$breadcrumbItems].splice(0, 1),
      { title: ellipsisIcon, href: "dropdown" },
      ...[...$breadcrumbItems].splice(-2, 2),
    ];
    const dropdownItems = [...$breadcrumbItems];
    const remainingDropdownItems = [
      ...[...dropdownItems].splice(1, dropdownItems.length - 3),
    ];

    for (const [$dpItemIndex, $dpItem] of displayItems.entries()) {
      const breadcrumbDisplayItemWrapper = document.createElement("div");
      breadcrumbDisplayItemWrapper.classList.add("flex", "items-center");
      const breadcrumbDisplayItemLink = Button({
        variant: "link",
        value: $dpItem.title,
        customCss: "p-2 text-sm",
      });

      breadcrumbDisplayItemLink.addEventListener("click", (event) => {
        if ($dpItem.href === "dropdown") {
          event.stopPropagation();
          const breadcrumbDropdownRef =
            document.getElementById("breadcrumbDropdown");

          if (breadcrumbDropdownRef) {
            breadcrumbDropdownRef && breadcrumbDropdownRef.remove();
          } else {
            const dropdownWrapper = document.createElement("div");
            dropdownWrapper.setAttribute("id", "breadcrumbDropdown");
            dropdownWrapper.classList.add(
              "flex",
              "flex-col",
              "bg-slate-50",
              "border-2",
              "p-4",
              "gap-2",
              "absolute",
              "z-50"
            );
            for (const rdpItem of remainingDropdownItems) {
              const dropdownWrapperItem = document.createElement("span");
              dropdownWrapperItem.classList.add(
                "text-left",
                "hover:underline",
                "z-50"
              );
              dropdownWrapperItem.append(rdpItem.title);
              // redirect here....
              dropdownWrapperItem.addEventListener("click", () => {
                alert(rdpItem.href);
              });
              dropdownWrapper.append(dropdownWrapperItem);
            }
            breadcrumbDisplayItemLink.append(dropdownWrapper);
          }
        } else {
          // redirect here....
          alert($dpItem.href);
        }
      });
      document.addEventListener("click", () => {
        document.getElementById("breadcrumbDropdown")?.remove();
      });
      if (displayItems.length === $dpItemIndex + 1) {
        breadcrumbDisplayItemWrapper.append(breadcrumbDisplayItemLink);
      } else {
        breadcrumbDisplayItemWrapper.append(
          breadcrumbDisplayItemLink,
          $breadcrumbIcon.cloneNode(true)
        );
      }
      breadcrumbWrapper.append(breadcrumbDisplayItemWrapper);
    }
  } else {
    for (const [$index, $breadcrumbItem] of $breadcrumbItems.entries()) {
      const breadcrumbItemWrapper = document.createElement("div");
      breadcrumbItemWrapper.classList.add("flex");
      const breadcrumbItemLink = Button({
        variant: "link",
        value: $breadcrumbItem.title,
        customCss: "p-2 text-sm",
      });

      if ($breadcrumbItems.length === $index + 1) {
        breadcrumbWrapper.append(breadcrumbItemLink);
      } else {
        breadcrumbWrapper.append(
          breadcrumbItemLink,
          $breadcrumbIcon.cloneNode(true)
        );
      }
      breadcrumbItemLink.addEventListener("click", () => {
        alert($breadcrumbItem.href);
      });
    }
  }

  return breadcrumbWrapper;
};
