# YamaUI

```
  YamaUI is a typescript component library build on top of tailwindcss.
  Package dependencies: Tailwindcss, Tailwindcss merge, Lucide, Animate.css
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
import { createElement, TriangleAlert } from "lucide";

const error = alert({
  icon: createElement(TriangleAlert),
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

```
import { avatar } from "@/components";
const avatarEl =  avatar({
    src: "https://avatars.githubusercontent.com/u/125799445?v=4",
    fallbackText: "SY",
  })

  document.getElementById('app').append(avatarEl)
```

### Badge

```
import { badge } from "@/components";
 document.getElementById('app').append(
  badge({
    value: "Badge",
    customCss: "bg-red-600 hover:bg-red-500 rounded-full",
  })
 )
```
