type Ele = ReturnType<typeof document.createElement>;

type Attr = {
  [key: string]: string;
};

export const h = (
  $ele: string,
  $attrs: Attr[] | null,
  $child: Ele | Text | string
): Ele => {
  const element = document.createElement($ele);
  $attrs?.forEach(($attr: Attr) => {
    for (const [$attrName, $attrValue] of Object.entries($attr)) {
      element.setAttribute($attrName, $attrValue);
    }
  });
  typeof $child === "string"
    ? element.append(document.createTextNode($child))
    : element.append($child);
  return element;
};
