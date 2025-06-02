// MDXContent.tsx
// Renders MDX content using next-mdx-remote, with custom code highlighting and support for custom components.

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { JSX } from "react";
import { highlight } from "sugar-high";
import Counter from "./Counter";

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children); // Syntax highlight code blocks
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  code: Code, // Custom code renderer
  Counter,    // Custom Counter component
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps,
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }} // Merge custom components
    />
  );
}
