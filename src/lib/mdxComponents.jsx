import CodeBlock from '../components/ui/CodeBlock.jsx';
import Callout from '../components/ui/Callout.jsx';
import Exercise from '../components/modules/Exercise.jsx';
import Solution from '../components/modules/Solution.jsx';
import { Children } from 'react';

function textFromChildren(children) {
  return Array.isArray(children)
    ? children.map(textFromChildren).join('')
    : typeof children === 'string' || typeof children === 'number'
      ? String(children)
      : '';
}

function headingId(children) {
  return textFromChildren(children)
    .toLocaleLowerCase('fr')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export const mdxComponents = {
  h2: ({ children, ...props }) => <h2 id={headingId(children)} {...props}>{children}</h2>,
  pre: ({ children }) => {
    const code = Children.only(children);
    const language = code.props.className?.replace('language-', '') ?? 'text';
    return <CodeBlock language={language}>{code.props.children}</CodeBlock>;
  },
  CodeBlock,
  Callout,
  Exercise,
  Solution,
};
