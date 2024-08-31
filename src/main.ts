import "./style.css";
import { button } from "@/components";

document.getElementById("app")?.append(
  button({
    variant: "primary",
    value: "Login Text",
    rounded: true,
    customCss: "bg-red-500",
  })
);
