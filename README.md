# YamaUI

![YamaUI Logo](./src/assets/yamaui-logo.png)

###### [Fuji icons created by Mutualism - Flaticon](https://www.flaticon.com/free-icons/fuji)

```
  YamaUI is a typescript component library build on top of tailwindcss.
  Package dependencies: Tailwindcss, Tailwindcss merge, and Lucide.
```

### Button Component

```ts
import { Button } from "@/components";
Button({
  variant: "primary",
  value: "Login",
  rounded: true,
  customCss: "bg-purple-600",
});
```

#### button option config objects

```
    {
        variants?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'icon' | 'with-icon' | 'custom',
        value: string | HTMLElement,
        rounded?: boolean,
        customCss?: string
    }
```

#### icon button

```ts
import { createElement, Menu } from "lucide";
const icon = createElement(Menu);

document.getElementById("app")?.append(
  Button({
    variant: "icon",
    value: icon,
  })
);
```

#### with icon button

```ts
import { createElement, Menu } from "lucide";
const icon = createElement(Menu);

const span = document.createElement("span");
span.append("Text");
const wrapper = document.createElement("div");
wrapper.append(icon, span);

document.getElementById("app")?.append(
  Button({
    variant: "with-icon",
    value: wrapper,
  })
);
```

### Accordion

```ts
import { Accordion } from "@/components";
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
const faq = Accordion(items, icons);

const app = document.getElementById("app");
app?.append(faq);
```

### Alert

```ts
import { Alert } from "@/components";
import { createElement, TriangleAlert } from "lucide";

const error = Alert({
  icon: createElement(TriangleAlert),
  title: "Error",
  des: "Your session has expired. Please log in again",
  customCss: "border-red-500 text-red-500",
});

const app = document.getElementById("app");
app?.append(error);
```

### Alert Dialog

```ts
import { Button, Alert_Dialog } from "@/components";
const primaryBtn = Button({
  value: "Save",
});

primaryBtn.addEventListener("click", function () {
  const saveDialog = Alert_Dialog({
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
import { Avatar } from "@/components";
const avatarEl = Avatar({
  src: "https://avatars.githubusercontent.com/u/125799445?v=4",
  fallbackText: "SY",
  customCss: {
    container: "size-14",
    avatar: "size-14",
  },
});

document.getElementById("app").append(avatarEl);
```

### Badge

```ts
import { Badge } from "@/components";
document.getElementById("app").append(
  Badge({
    value: "Badge",
    customCss: "bg-red-600 hover:bg-red-500 rounded-full",
  })
);
```

### Breadcrumb

```ts
import { Breadcrumb } from "@/components";
import { ChevronRight } from "lucide";

document.getElementById("app").append(
  Breadcrumb(
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

### Calendar

```ts
import { Button, Calendar } from "@/components";
import { createElement, Calendar as CalendarIcon } from "lucide";
const calendarIconBtn = Button({
  variant: "icon",
  value: createElement(CalendarIcon),
  customCss: "relative z-10",
});

calendarIconBtn.addEventListener("click", () => {
  const calendarElRef = document.getElementById("calendar");
  if (!calendarElRef) {
    const calendarEl = Calendar(function (value) {
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
import { Card } from "@/components";

const cardChild = document.createElement("div");
cardChild.innerText = "Card";

document.getElementBy("app")?.append(
  Card({
    child: cardChild,
    customCss: "text-purple-600 font-extrabold text-center",
  })
);
```

### Checkbox

```ts
import { Checkbox } from "@/components";

document.getElementBy("app")?.append(
  Checkbox({
    nameAndId: "formCheckbox",
    defaultValue: true,
    checkboxLabelValue: "Accept all terms and conditions.",
    checkboxDisable: false,
    onCheck: (e) => console.log(e.currentTarget.checked),
  })
);
```

### Collapsiable

```ts
import { Collapsiable } from "@/components";
document
  .getElementById("app")
  ?.append(
    Collapsible("@peduarte starred 3 repositories", [
      "@radix-ui/primitives",
      "@radix-ui/colors",
      "@stitches/react",
    ])
  );
```

### Popover

```ts
import { Popover } from "@/components";
import { createElement, ChevronsUpDown } from "lucide";

const popoverBtnWrapper = document.createElement("div");
const popoverBtnWrapperText = document.createElement("span");
popoverBtnWrapperText.append("Select Frameworks");
const popoverBtnWrapperIcon = createElement(ChevronsUpDown);
popoverBtnWrapperIcon.classList.add("size-4");
popoverBtnWrapper.append(popoverBtnWrapperText, popoverBtnWrapperIcon);

const popoverBtn = Button({
  variant: "with-icon",
  value: popoverBtnWrapper,
  customCss: "text-sm p-[.4rem] bg-white rounded-md hover:bg-gray-300",
});
const popoverChild = document.createElement("ul");
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
  ?.append(Popover({ parent: popoverBtn, child: popoverChild }));
```
