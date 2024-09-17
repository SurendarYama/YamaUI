import { button } from "@/components";

type AlertDialog = {
  title: string;
  des: string;
  close: {
    context: string;
    closeCBBtnFn: () => void;
  };
  ok: {
    context: string;
    okCBBtnFn: () => void;
  };
};

export const alert_dialog = ({ title, des, close, ok }: AlertDialog) => {
  const alertDialogWrapper = document.createElement("div");
  alertDialogWrapper.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "fixed",
    "z-50",
    "bg-black",
    "w-screen",
    "h-screen"
  );

  const alertDialogContentWrapper = document.createElement("div");
  alertDialogContentWrapper.classList.add(
    "flex",
    "flex-col",
    "bg-slate-50",
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
  const okBtn = button({
    value: ok.context,
  });
  okBtn.addEventListener("click", () => {
    ok.okCBBtnFn();
    document.body.classList.remove("overflow-hidden");
    alertDialogWrapper.remove();
  });
  const cancleBtn = button({
    variant: "destructive",
    value: close.context,
  });

  for (const ctaBtn of [okBtn, cancleBtn]) {
    ctaBtn.classList.add("w-64");
  }
  cancleBtn.addEventListener("click", () => {
    close.closeCBBtnFn();
    document.body.classList.remove("overflow-hidden");
    alertDialogWrapper.remove();
  });

  content.append(titleElement, desElement);
  btns.append(okBtn, cancleBtn);
  alertDialogContentWrapper.append(content, btns);
  alertDialogWrapper.append(alertDialogContentWrapper);
  return alertDialogWrapper;
};
