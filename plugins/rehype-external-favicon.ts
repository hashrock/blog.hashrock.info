import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";

export default function rehypeExternalFavicon() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "a") return;
      const href = node.properties?.href as string | undefined;
      if (!href || !href.startsWith("http")) return;

      let domain: string;
      try {
        domain = new URL(href).hostname;
      } catch {
        return;
      }

      const favicon: Element = {
        type: "element",
        tagName: "img",
        properties: {
          src: `https://www.google.com/s2/favicons?domain=${domain}&sz=16`,
          alt: "",
          width: 16,
          height: 16,
          loading: "lazy",
          className: ["external-favicon"],
        },
        children: [],
      };

      node.children.unshift(favicon);
    });
  };
}
