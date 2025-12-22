// lib/serializeLexical.tsx
import React from 'react';

interface TextNode {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
}

interface LexicalNode {
  type: string;
  version?: number;
  children?: (LexicalNode | TextNode)[];
  tag?: string;
  value?: number;
  listType?: 'bullet' | 'number';
  url?: string;
  [key: string]: any;
}

interface LexicalContent {
  root: LexicalNode;
}

const isTextNode = (node: any): node is TextNode => {
  return typeof node === 'object' && 'text' in node;
};

const isElementNode = (node: any): node is LexicalNode => {
  return typeof node === 'object' && 'type' in node;
};

export const serializeLexical = (
  content: LexicalContent | null | undefined
): React.ReactNode => {
  if (!content?.root?.children) {
    return null;
  }

  return serializeNodes(content.root.children);
};

const serializeNodes = (nodes: (LexicalNode | TextNode)[]): React.ReactNode => {
  return nodes.map((node, index) => serializeNode(node, index));
};

const serializeNode = (
  node: LexicalNode | TextNode,
  index: number
): React.ReactNode => {
  // Text node
  if (isTextNode(node)) {
    let text: React.ReactNode = node.text;

    if (node.bold) {
      text = <strong key={index}>{text}</strong>;
    }
    if (node.italic) {
      text = <em key={index}>{text}</em>;
    }
    if (node.underline) {
      text = <u key={index}>{text}</u>;
    }
    if (node.code) {
      text = (
        <code key={index} className="rounded bg-slate-100 px-1 py-0.5 text-sm">
          {text}
        </code>
      );
    }

    return <React.Fragment key={index}>{text}</React.Fragment>;
  }

  // Element node
  if (!isElementNode(node)) {
    return null;
  }

  const children = node.children ? serializeNodes(node.children) : null;

  switch (node.type) {
    case 'paragraph':
      return (
        <p key={index} className="mb-4">
          {children}
        </p>
      );

    case 'heading': {
      const HeadingTag = `h${node.tag || '2'}` as keyof JSX.IntrinsicElements;
      const headingClass =
        node.tag === 'h1'
          ? 'mb-4 mt-8 text-3xl font-bold text-slate-800'
          : node.tag === 'h2'
            ? 'mb-3 mt-6 text-2xl font-bold text-slate-800'
            : 'mb-3 mt-6 text-xl font-bold text-slate-800';

      return (
        <HeadingTag key={index} className={headingClass}>
          {children}
        </HeadingTag>
      );
    }

    case 'list': {
      const ListTag = node.listType === 'number' ? 'ol' : 'ul';
      const listClass =
        node.listType === 'number'
          ? 'mb-4 ml-6 list-decimal space-y-2'
          : 'mb-4 ml-6 list-disc space-y-2';

      return (
        <ListTag key={index} className={listClass}>
          {children}
        </ListTag>
      );
    }

    case 'listitem':
      return <li key={index}>{children}</li>;

    case 'quote':
      return (
        <blockquote
          key={index}
          className="my-4 border-l-4 border-slate-300 pl-4 italic text-slate-600"
        >
          {children}
        </blockquote>
      );

    case 'link':
      return (
        <a
          key={index}
          href={node.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-700"
        >
          {children}
        </a>
      );

    case 'linebreak':
      return <br key={index} />;

    default:
      return <React.Fragment key={index}>{children}</React.Fragment>;
  }
};