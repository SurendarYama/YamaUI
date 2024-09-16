# YamaUI

```
  YamaUI is a typescript component library build on top of tailwindcss.
```

### Button Component

```
    import { button } from "@/components";
        button({
            variant: "primary",
            value: "Login",
            rounded: true,
            customCss: "bg-purple-600"
        })
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

```
import { createElement, Menu} from "lucide";
const icon = createElement(Menu)

document.getElementById("app")?.append(
  button({
    variant: "icon",
    value: icon,
  })
);
```

#### with icon button

```
import { createElement, Menu} from "lucide";
const icon = createElement(Menu);

const span = document.createElement("span");
span.append("Text");
const wrapper = document.createElement("div");
wrapper.append(icon, span);

document.getElementById("app")?.append(
  button({
    variant: "with-icon",
    value: wrapper,
  })
);
```

### Known Issues

With Icon Button -> icon is not showing when passing same icon instance. // To fix use clone the element.

### Accordion

```
import { accordion } from "@/components";
import { createElement, Plus, Minus } from "lucide";

const items = [
  {
    id:window.crypto.randomUUID(),
    title: "Title 1",
    content:
      " undergo a continuous change whereby, according to theory based on observed red shifts, all the galaxies recede from one another.",
  },
  {
    id:window.crypto.randomUUID(),
    title: "Title 2",
    content:
      " undergo a continuous change whereby, according to theory based on observed red shifts, all the galaxies recede from one another.",
  },
];

const icons = {
  collapse: createElement(Plus),
  expand: createElement(Minus),
};
const faq = accordion(items, icons);

const app = document.getElementById("app");
app?.append(faq)
```

### Alert

```
import { alert } from "@/components";

const error = alert({
  icon: "fa-solid fa-triangle-exclamation fa-lg",
  title: "Error",
  des: "Your session has expired. Please log in again",
  customCss: "border-red-500 text-red-500",
}),

const app = document.getElementById("app");
app?.append(error)
```

### Alert Dialog

```
import { button, alertDialog } from "@/components";
const primaryBtn = button({
  value: "Save",
});

primaryBtn.addEventListener("click", function(){
  const saveDialog = alertDialog({
    title: "Heading 1",
    des: " undergo a continuous change whereby, according to theory based on observed red shifts, all the galaxies recede from one another.",
    close: {
      context: "Close",
      closeCBBtnFn() {
        // do some redirect...

      },
    },
    ok: {
      context: "Save",
      okCBBtnFn() {
        // do some redirect...
      },
    },
  });
  document.body.prepend(saveDialog);
```
