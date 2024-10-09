# YamaUI

![YamaUI Logo](./src/assets/yamaui-logo.png)

###### [Fuji icons created by Mutualism - Flaticon](https://www.flaticon.com/free-icons/fuji)

```
  YamaUI is a typescript component library build on top of tailwindcss.
  Package dependencies: Tailwindcss, Tailwindcss merge, and Lucide.
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Accordion](#accordion)
- [Alert](#alert)
- [Alert Dialog](#alert-dialog)
- [Avatar](#avatar)
- [Badge](#badge)
- [Breadcrumb](#breadcrumb)
- [Button Component](#button-component)
  - [button option config objects](#button-option-config-objects)
  - [icon button](#icon-button)
  - [with icon button](#with-icon-button)
- [Calendar](#calendar)
- [Card](#card)
- [Checkbox](#checkbox)
- [Collapsiable](#collapsiable)
- [Combobox](#combobox)
- [Popover](#popover)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Accordion

```ts
import { $accordion } from "@/components";
import { createElement, Plus, Minus } from "lucide";

const items = [
  {
    id: window.crypto.randomUUID(),
    title: "Title 1",
    content:
      " undergo a continuous change whereby, according to theory based on observed red shifts, all the galaxies recede from one another.",
  },
  {
    id: window.crypto.randomUUID(),
    title: "Title 2",
    content:
      " undergo a continuous change whereby, according to theory based on observed red shifts, all the galaxies recede from one another.",
  },
];

const icons = {
  collapse: createElement(Plus),
  expand: createElement(Minus),
};
const faq = $accordion(items, icons);

const app = document.getElementById("app");
app?.append(faq);
```

### Alert

```ts
import { $alert } from "@/components";
import { createElement, TriangleAlert } from "lucide";

const error = $alert({
  icon: createElement(TriangleAlert),
  title: "Error",
  des: "Your session has expired. Please log in again",
  customStyles: "border-red-500 text-red-500",
});

const app = document.getElementById("app");
app?.append(error);
```

### Alert Dialog

```ts
import { $button, $alert_dialog } from "@/components";
const primaryBtn = $button({
  value: "Save",
});

primaryBtn.addEventListener("click", function () {
  const saveDialog = $alert_dialog({
    title: "Heading 1",
    des: " undergo a continuous change whereby, according to theory based on observed red shifts, all the galaxies recede from one another.",
    close: {
      context: "Close",
      closeBtnCBFn() {
        // do some redirect...
      },
    },
    ok: {
      context: "Save",
      okBtnCBFn() {
        // do some redirect...
      },
    },
  });
  document.body.prepend(saveDialog);
});
```

### Avatar

```ts
import { $avatar } from "@/components";
const avatarEl = $avatar({
  src: "https://avatars.githubusercontent.com/u/125799445?v=4",
  fallbackText: "SY",
  customStyles: {
    container: "size-14",
    avatar: "size-14",
  },
});

document.getElementById("app").append(avatarEl);
```

### Badge

```ts
import { $badge } from "@/components";
document.getElementById("app").append(
  $badge({
    value: "Badge",
    customStyles: "bg-red-600 hover:bg-red-500 rounded-full",
  })
);
```

### Breadcrumb

```ts
import { $breadcrumb } from "@/components";
import { createElement, ChevronRight } from "lucide";

document.getElementById("app").append(
  $breadcrumb(
    [
      { title: "Home", href: "/home" },
      { title: "About", href: "/about" },
      { title: "Contact Us", href: "/contact" },
      { title: "Projects", href: "/projects" },
      { title: "Testimonial", href: "/testimonial" },
    ],
    createElement(ChevronRight)
  )
);
```

### Button Component

```ts
import { $button } from "@/components";
$button({
  variant: "primary",
  value: "Login",
  customStyles: "bg-purple-600",
});
```

#### button option config objects

```
    {
        variants?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'icon' | 'with-icon' | 'custom',
        value: string | HTMLElement,
        customStyles?: string
    }
```

#### icon button

```ts
import { $button } from "@/components";
import { createElement, Menu } from "lucide";
const icon = createElement(Menu);

document.getElementById("app")?.append(
  $button({
    variant: "icon",
    value: icon,
  })
);
```

#### with icon button

```ts
import { $button } from "@/components";
import { createElement, Menu } from "lucide";
const icon = createElement(Menu);

const span = document.createElement("span");
span.append("Text");
const wrapper = document.createElement("div");
wrapper.append(icon, span);

document.getElementById("app")?.append(
  $button({
    variant: "with-icon",
    value: wrapper,
  })
);
```

### Calendar

```ts
import { $button, $calendar } from "@/components";
import { createElement, Calendar as CalendarIcon } from "lucide";
const calendarIconBtn = $button({
  variant: "icon",
  value: createElement(CalendarIcon),
  customStyles: "relative z-10",
});

calendarIconBtn.addEventListener("click", () => {
  const calendarElRef = document.getElementById("calendar");
  if (!calendarElRef) {
    const calendarEl = $calendar(function (value) {
      alert(value);
      calendarEl?.remove();
    });
    calendarEl.setAttribute("id", "calendar");
    calendarEl.classList.add("absolute", "z-10");
    calendarIconBtn.append(calendarEl);
  } else {
    calendarElRef?.remove();
  }
});

document.getElementById("app").append(calendarIconBtn);
```

### Card

```ts
import { $card } from "@/components";

const cardChild = document.createElement("div");
cardChild.innerText = "Card";

document.getElementBy("app")?.append(
  $card({
    child: cardChild,
    customStyles: "text-purple-600 font-extrabold text-center",
  })
);
```

### Checkbox

```ts
import { $checkbox } from "@/components";

document.getElementBy("app")?.append(
  $checkbox({
    nameAndId: "formCheckbox",
    defaultValue: true,
    checkboxLabelValue: "Accept all terms and conditions.",
    checkboxDisable: false,
    onCheck: (e: InputEvent) =>
      console.log((e.currentTarget as HTMLInputElement).checked),
  })
);
```

### Collapsiable

```ts
import { $collapsiable } from "@/components";
document
  .getElementById("app")
  ?.append(
    $collapsible("@peduarte starred 3 repositories", [
      "@radix-ui/primitives",
      "@radix-ui/colors",
      "@stitches/react",
    ])
  );
```

### Combobox

```ts
import { $button, $popover, $combobox } from "@/components";
import { createElement, ChevronsUpDown } from "lucide";

const popoverBtnWrapper = document.createElement("div");
const popoverBtnWrapperText = document.createElement("span");
popoverBtnWrapperText.classList.add("min-w-32", "text-left");
popoverBtnWrapperText.append("Select Frameworks");
const popoverBtnWrapperIcon = createElement(ChevronsUpDown);
popoverBtnWrapperIcon.classList.add("size-4");
popoverBtnWrapper.append(popoverBtnWrapperText, popoverBtnWrapperIcon);

const popoverBtn = $button({
  variant: "with-icon",
  value: popoverBtnWrapper,
  customStyles: "text-sm p-[.4rem] bg-white rounded-md hover:bg-gray-100",
});

const combobox = $popover({
  popoverId: "popover-for-combobox",
  parent: popoverBtn,
  child: $combobox({
    items: [
      {
        label: "Remix.js",
        value: "Remix.js",
      },
      {
        label: "Next.js",
        value: "Next.js",
      },
      {
        label: "Angular",
        value: "Angular",
      },
      {
        label: "Nuxt.js",
        value: "Nuxt.js",
      },
    ],
    onChange: (selectedItem) => {
      const comboboxButtonContent = document.getElementById(
        "combobox-button-content"
      );
      if (comboboxButtonContent) {
        comboboxButtonContent.textContent = selectedItem;
      }
    },
  }),
});

document.getElementById("app")?.append(combobox);
```

### Popover

```ts
import { $popover, $button } from "@/components";
import { createElement, ChevronsUpDown } from "lucide";

const popoverBtnWrapper = document.createElement("div");
const popoverBtnWrapperText = document.createElement("span");
popoverBtnWrapperText.append("Select Frameworks");
const popoverBtnWrapperIcon = createElement(ChevronsUpDown);
popoverBtnWrapperIcon.classList.add("size-4");
popoverBtnWrapper.append(popoverBtnWrapperText, popoverBtnWrapperIcon);

const popoverBtn = $button({
  variant: "with-icon",
  value: popoverBtnWrapper,
  customStyles: "text-sm p-[.4rem] bg-white rounded-md hover:bg-gray-300",
});
const popoverChild = document.createElement("li");
const listItem = Array(20);
listItem.fill("Item");
for (const [index, item] of listItem.entries()) {
  const itemWrapper = document.createElement("ul");
  itemWrapper.classList.add("p-2");
  itemWrapper.append(`${item}-${index + 1}`);
  popoverChild.append(itemWrapper);
}

document
  .getElementById("app")
  ?.append($popover({ parent: popoverBtn, child: popoverChild }));
```
