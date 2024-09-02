# MyShopFrontent

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
const icon = document.createElement("i");
icon.classList.add("fa-brands", "fa-instagram", "fa-xl");

document.getElementById("app")?.append(
  button({
    variant: "icon",
    value: icon,
  })
);
```

#### with icon button

```

const icon = document.createElement("i");
icon.classList.add("fa-brands", "fa-instagram", "fa-xl");
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

With Icon Button -> icon is not showing when passing same icon instance.

### Accordion

```
import { accordion } from "@/components";

const items = [
  {
    title: "Title 1",
    content:
      " undergo a continuous change whereby, according to theory based on observed red shifts, all the galaxies recede from one another.",
    isExpand: false,
  },
  {
    title: "Title 2",
    content:
      " undergo a continuous change whereby, according to theory based on observed red shifts, all the galaxies recede from one another.",
    isExpand: false,
  },
];

const icons = {
  collapse: "fa-solid fa-plus",
  expand: "fa-solid fa-minus",
};
const faq = accordion(items, icons);

const app = document.getElementById("app");
app?.append(fqa)
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
