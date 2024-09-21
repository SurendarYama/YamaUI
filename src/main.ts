import "./style.css";
import "animate.css";
import {
  button,
  accordion,
  alert as Alert,
  alert_dialog,
  avatar,
  badge,
  breadcrumb,
  calendar,
} from "@/components";
import {
  createElement,
  Menu,
  Plus,
  Minus,
  Check,
  Handshake,
  TriangleAlert,
  ChevronRight,
  Calendar,
} from "lucide";
const MenuIcon = createElement(Menu);

const span = document.createElement("span");
span.append("Login");
const wrapper = document.createElement("div");
wrapper.append(MenuIcon.cloneNode(true), span);

const app = document.getElementById("app");
app?.classList.add("flex", "items-center", "space-y-5", "flex-col");
const withIconBtn = button({
  variant: "with-icon",
  value: wrapper,
  customCss: "w-32 p-2",
});
const iconBtn = button({
  variant: "icon",
  value: MenuIcon,
});

const primaryBtn = button({
  value: "Login",
});
const secondaryBtn = button({
  variant: "secondary",
  value: "Login",
});
const destructiveBtn = button({
  variant: "destructive",
  value: "Login",
});

const outlineBtn = button({
  variant: "outline",
  value: "Login",
});

const ghostBtn = button({
  variant: "ghost",
  value: "Login",
});

const linkBtn = button({
  variant: "link",
  value: "Login",
});

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
  {
    id: window.crypto.randomUUID(),
    title: "Title 3",
    content:
      " undergo a continuous change whereby, according to theory based on observed red shifts, all the galaxies recede from one another.",
  },
];

const icons = {
  collapse: createElement(Plus),
  expand: createElement(Minus),
};
const faq = accordion(items, icons);

primaryBtn.addEventListener("click", function () {
  const saveDialog = alert_dialog({
    title: "Heading 1",
    des: " undergo a continuous change whereby, according to theory based on observed red shifts, all the galaxies recede from one another.",
    close: {
      context: "Close",
      closeBtnCBFn() {},
    },
    ok: {
      context: "Save",
      okBtnCBFn() {},
    },
  });

  document.body.prepend(saveDialog);
  document.body.classList.add("overflow-hidden");
});

const calendarIconBtn = button({
  variant: "icon",
  value: createElement(Calendar),
  customCss: "relative z-10",
});

calendarIconBtn.addEventListener("click", () => {
  if (!document.getElementById("calendar")) {
    const calendarEl = calendar(function (value) {
      alert(value);
    });
    calendarEl.setAttribute("id", "calendar");
    calendarEl.classList.add("absolute", "z-10");
    calendarIconBtn.append(calendarEl);
  } else {
    document.getElementById("calendar")?.remove();
  }
});

app?.classList.add(
  "flex",
  "items-center",
  "justify-center",
  "gap-10",
  "mb-10",
  "z-0"
);

app?.append(
  primaryBtn,
  secondaryBtn,
  destructiveBtn,
  outlineBtn,
  ghostBtn,
  withIconBtn,
  linkBtn,
  iconBtn,
  faq,
  Alert({
    icon: createElement(TriangleAlert),
    title: "Error",
    des: "Your session has expired. Please log in again",
    customCss: "border-red-500 text-red-500",
  }),
  Alert({
    icon: createElement(Check),
    title: "Success",
    des: "Log in successfully...",
    customCss: "border-green-500 text-green-500",
  }),
  Alert({
    icon: createElement(Handshake),
    title: "Greetings",
    des: "Have a awesome day",
    customCss: "border-black text-black",
  }),
  avatar({
    src: "https://avatars.githubusercontent.com/u/125799445?v=4",
    fallbackText: "SY",
  }),
  badge({
    value: "Badge",
    customCss: "bg-red-600 hover:bg-red-500 rounded-full",
  }),
  breadcrumb(
    [
      { title: "Home", href: "/home" },
      { title: "About", href: "/about" },
      { title: "Contact Us", href: "/contact" },
      { title: "Projects", href: "/projects" },
      { title: "Testimonial", href: "/testimonial" },
    ],
    createElement(ChevronRight)
  ),
  calendarIconBtn
);
