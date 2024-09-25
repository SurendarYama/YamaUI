import { Button } from "@/components";

type AlertDialogType = {
  title: string;
  des: string;
  close: {
    context: string;
    closeBtnCBFn: () => void;
  };
  ok: {
    context: string;
    okBtnCBFn: () => void;
  };
};

export const Alert_Dialog = ({ title, des, close, ok }: AlertDialogType) => {
  const alertDialogWrapper = document.createElement("div");
  alertDialogWrapper.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "fixed",
    "z-50",
    "w-screen",
    "h-screen"
  );
  alertDialogWrapper.style.backgroundColor = "rgb(51 51 51 / 85%)";
  const alertDialogContentWrapper = document.createElement("div");
  alertDialogContentWrapper.classList.add(
    "flex",
    "flex-col",
    "bg-white",
    "p-10",
    "gap-10",
    "w-96",
    "rounded-md"
  );
  const content = document.createElement("div");
  content.classList.add("space-y-5");
  const titleElement = document.createElement("h3");
  titleElement.classList.add("text-2xl", "font-bold");
  titleElement.append(title);
  const desElement = document.createElement("p");
  desElement.append(des);

  const btns = document.createElement("div");
  btns.classList.add("flex", "gap-1");
  const okBtn = Button({
    value: ok.context,
  });
  okBtn.addEventListener("click", () => {
    ok.okBtnCBFn();
    document.body.classList.remove("overflow-hidden");
    alertDialogWrapper.remove();
  });
  const cancleBtn = Button({
    variant: "destructive",
    value: close.context,
  });

  for (const ctaBtn of [okBtn, cancleBtn]) {
    ctaBtn.classList.add("w-64");
  }
  cancleBtn.addEventListener("click", () => {
    close.closeBtnCBFn();
    document.body.classList.remove("overflow-hidden");
    alertDialogWrapper.remove();
  });

  content.append(titleElement, desElement);
  btns.append(okBtn, cancleBtn);
  alertDialogContentWrapper.append(content, btns);
  alertDialogWrapper.append(alertDialogContentWrapper);
  return alertDialogWrapper;
};
