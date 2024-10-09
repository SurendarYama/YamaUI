import "./style.css";
import {
  $button,
  $accordion,
  $alert,
  $alert_dialog,
  $avatar,
  $badge,
  $breadcrumb,
  $calendar,
  $card,
  $checkbox,
  $collapsible,
  $popover,
  $combobox,
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
  ChevronsUpDown,
} from "lucide";
const MenuIcon = createElement(Menu);

const span = document.createElement("span");
span.append("Login");
const wrapper = document.createElement("div");
wrapper.append(MenuIcon.cloneNode(true), span);

const app = document.getElementById("app");
app?.classList.add("flex", "items-center", "space-y-5", "flex-col");
const withIconBtn = $button({
  variant: "with-icon",
  value: wrapper,
  customStyles: "w-32 p-2",
});
const iconBtn = $button({
  variant: "icon",
  value: MenuIcon,
});

const primaryBtn = $button({
  value: "Login",
});
const secondaryBtn = $button({
  variant: "secondary",
  value: "Login",
});
const destructiveBtn = $button({
  variant: "destructive",
  value: "Login",
});

const outlineBtn = $button({
  variant: "outline",
  value: "Login",
});

const ghostBtn = $button({
  variant: "ghost",
  value: "Login",
});

const linkBtn = $button({
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
const faq = $accordion(items, icons);

primaryBtn.addEventListener("click", function () {
  const saveDialog = $alert_dialog({
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

const calendarIconBtn = $button({
  variant: "icon",
  value: createElement(CalendarIcon),
  customStyles: "relative",
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

const cardChild = document.createElement("div");
cardChild.innerText = "@radix-ui/primitives";

const popoverBtnWrapper = document.createElement("div");
const popoverBtnWrapperText = document.createElement("span");
popoverBtnWrapperText.classList.add("min-w-32", "text-left");
popoverBtnWrapperText.append("Select Frameworks");
popoverBtnWrapperText.setAttribute("id", "combobox-button-content");
const popoverBtnWrapperIcon = createElement(ChevronsUpDown);
popoverBtnWrapperIcon.classList.add("size-4");
popoverBtnWrapper.append(popoverBtnWrapperText, popoverBtnWrapperIcon);

const popoverBtn = $button({
  variant: "with-icon",
  value: popoverBtnWrapper,
  customStyles: "text-sm p-[.4rem] bg-white rounded-md hover:bg-gray-100",
});
const popoverChild = document.createElement("ul");
const listItem = Array(20);
listItem.fill("Item");
for (const [index, item] of listItem.entries()) {
  const itemWrapper = document.createElement("li");
  itemWrapper.classList.add("p-2");
  itemWrapper.append(`${item}-${index + 1}`);
  popoverChild.append(itemWrapper);
}

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
app?.classList.add(
  "flex",
  "items-center",
  "justify-center",
  "gap-10",
  "mb-40",
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
  $alert({
    icon: createElement(TriangleAlert),
    title: "Error",
    des: "Your session has expired. Please log in again",
    customStyles: "border-red-500 text-red-500",
  }),
  $alert({
    icon: createElement(Check),
    title: "Success",
    des: "Log in successfully...",
    customStyles: "border-green-500 text-green-500",
  }),
  $alert({
    icon: createElement(Handshake),
    title: "Greetings",
    des: "Have a awesome day",
    customStyles: "border-black text-black",
  }),

  $avatar({
    src: "https://avatars.githubusercontent.com/u/125799445?v=4",
    fallbackText: "SY",
    customStyles: {
      container: "size-14",
      avatar: "size-14",
    },
  }),
  $badge({
    value: "Badge",
    customStyles: "bg-purple-600 hover:bg-purple-500 rounded-full",
  }),
  $breadcrumb(
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
  $card({
    child: cardChild,
    // customStyles: "text-sm px-6 py-2 shadow-none", // Collapsible Component
  }),
  $checkbox({
    nameAndId: "formCheckbox",
    defaultValue: true,
    checkboxLabelValue: "Accept all terms and conditions.",
    checkboxDisable: false,
    onCheck: (e: InputEvent) =>
      console.log((e.currentTarget as HTMLInputElement)?.checked),
  }),
  $collapsible("@peduarte starred 3 repositories", [
    "@radix-ui/primitives",
    "@radix-ui/colors",
    "@stitches/react",
  ]),
  combobox
);
