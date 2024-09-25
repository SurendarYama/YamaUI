import "./style.css";
import {
  Button,
  Accordion,
  Alert,
  Alert_Dialog,
  Avatar,
  Badge,
  Breadcrumb,
  Calendar,
  Card,
  Checkbox,
  Collapsible,
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
  Calendar as CalendarIcon,
} from "lucide";
const MenuIcon = createElement(Menu);

const span = document.createElement("span");
span.append("Login");
const wrapper = document.createElement("div");
wrapper.append(MenuIcon.cloneNode(true), span);

const app = document.getElementById("app");
app?.classList.add("flex", "items-center", "space-y-5", "flex-col");
const withIconBtn = Button({
  variant: "with-icon",
  value: wrapper,
  customCss: "w-32 p-2",
});
const iconBtn = Button({
  variant: "icon",
  value: MenuIcon,
});

const primaryBtn = Button({
  value: "Login",
});
const secondaryBtn = Button({
  variant: "secondary",
  value: "Login",
});
const destructiveBtn = Button({
  variant: "destructive",
  value: "Login",
});

const outlineBtn = Button({
  variant: "outline",
  value: "Login",
});

const ghostBtn = Button({
  variant: "ghost",
  value: "Login",
});

const linkBtn = Button({
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
const faq = Accordion(items, icons);

primaryBtn.addEventListener("click", function () {
  const saveDialog = Alert_Dialog({
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

const calendarIconBtn = Button({
  variant: "icon",
  value: createElement(CalendarIcon),
  customCss: "relative",
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

const cardChild = document.createElement("div");
cardChild.innerText = "@radix-ui/primitives";
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

  Avatar({
    src: "https://avatars.githubusercontent.com/u/125799445?v=4",
    fallbackText: "SY",
    customCss: {
      container: "size-14",
      avatar: "size-14",
    },
  }),
  Badge({
    value: "Badge",
    customCss: "bg-red-600 hover:bg-red-500 rounded-full",
  }),
  Breadcrumb(
    [
      { title: "Home", href: "/home" },
      { title: "About", href: "/about" },
      { title: "Contact Us", href: "/contact" },
      { title: "Projects", href: "/projects" },
      { title: "Testimonial", href: "/testimonial" },
    ],
    createElement(ChevronRight)
  ),
  calendarIconBtn,
  Card({
    child: cardChild,
    // customCss: "text-sm px-6 py-2 shadow-none", // Collapsible Component
  }),
  Checkbox({
    nameAndId: "formCheckbox",
    defaultValue: true,
    checkboxLabelValue: "Accept all terms and conditions.",
    checkboxDisable: false,
    onCheck: (e) => console.log(e.currentTarget.checked),
  }),
  Collapsible("@peduarte starred 3 repositories", [
    "@radix-ui/primitives",
    "@radix-ui/colors",
    "@stitches/react",
  ])
);
