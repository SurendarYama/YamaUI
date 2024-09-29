type CheckboxType = {
  nameAndId: string;
  defaultValue: boolean;
  checkboxDisable: boolean;
  checkboxLabelValue: string;
  onCheck: (e: any) => void;
};

export const Checkbox = ({
  nameAndId,
  defaultValue,
  checkboxLabelValue,
  checkboxDisable,
  onCheck,
}: CheckboxType) => {
  const checkboxWrapper = document.createElement("div");
  checkboxWrapper.classList.add("flex", "gap-2", "items-center");
  const checkboxInput = document.createElement("input");
  checkboxInput.classList.add(
    "size-4",
    "accent-black",
    "ouline-none",
    checkboxDisable ? "cursor-not-allowed" : "pointer"
  );
  checkboxInput.setAttribute("name", nameAndId);
  checkboxInput.setAttribute("id", nameAndId);
  checkboxInput.setAttribute("type", "checkbox");
  checkboxInput.checked = defaultValue;
  checkboxInput.disabled = checkboxDisable;
  checkboxInput.addEventListener("change", onCheck);

  const checkboxLabel = document.createElement("label");
  checkboxLabel.classList.add(checkboxDisable ? "text-gray-400" : "text-black");
  checkboxLabel.setAttribute("for", nameAndId);
  checkboxLabel.append(checkboxLabelValue);

  checkboxWrapper.append(checkboxInput, checkboxLabel);
  return checkboxWrapper;
};
