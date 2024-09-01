# MyShopFrontent

### Button Component

```
    import {button} from "@/components";
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
