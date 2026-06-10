import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 id={slugify(String(props.children))} {...props} />,
    h2: (props) => <h2 id={slugify(String(props.children))} {...props} />,
    h3: (props) => <h3 id={slugify(String(props.children))} {...props} />,
    ...components,
  };
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}
