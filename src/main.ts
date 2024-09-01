import "./style.css";
import { button, accordion } from "@/components";

const iconTwo = document.createElement("i");
iconTwo.classList.add("fa-brands", "fa-instagram", "fa-xl");

const icon = document.createElement("i");
icon.classList.add("fa-brands", "fa-instagram", "fa-xl");

const span = document.createElement("span");
span.append("Login");
const wrapper = document.createElement("div");
wrapper.append(icon, span);

const app = document.getElementById("app");
app?.classList.add("flex", "space-y-5", "flex-col");
const withIconBtn = button({
  variant: "with-icon",
  value: wrapper,
  customCss: "w-32 p-1",
});
const iconBtn = button({
  variant: "icon",
  value: iconTwo,
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
app?.classList.add("flex", "items-center");
app?.append(
  primaryBtn,
  secondaryBtn,
  destructiveBtn,
  outlineBtn,
  ghostBtn,
  withIconBtn,
  linkBtn,
  iconBtn,
  faq
);
