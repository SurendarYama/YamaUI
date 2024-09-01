import "./style.css";
import { button } from "@/components";

const iconTwo = document.createElement("i");
iconTwo.classList.add("fa-brands", "fa-instagram", "fa-xl");

const icon = document.createElement("i");
icon.classList.add("fa-brands", "fa-instagram", "fa-xl");

const span = document.createElement("span");
span.append("Text");
const wrapper = document.createElement("div");
wrapper.append(icon, span);

const app = document.getElementById("app");
app?.classList.add("flex", "space-y-5", "flex-col");
const withIconBtn = button({
  variant: "with-icon",
  value: wrapper,
});
const iconBtn = button({
  variant: "icon",
  value: iconTwo,
});
app?.append(withIconBtn, iconBtn);
