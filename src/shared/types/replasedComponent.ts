import { Element } from 'html-react-parser';

export type TComponentReplacementRules = Record<
  string,
  (domNode: Element) => JSX.Element
>;
