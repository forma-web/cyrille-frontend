import parse, { DOMNode, domToReact } from 'html-react-parser';
import { TComponentReplacementRules } from 'shared/types/replasedComponent';
import { getReplacementOptions } from './getReplacementOptions';

/**
 * Function for create parser for HTML.
 * Return function for converts HTML string to JSX element(s).
 */
const createParserHtml = (
  componentReplacementRules: TComponentReplacementRules,
) => {
  return (html: string) =>
    parse(html, getReplacementOptions(componentReplacementRules));
};

/**
 * Function for create parser for DOMNode.
 * Return function for converts DOMNode to JSX element(s).
 */
const createParserDomNode = (
  componentReplacementRules: TComponentReplacementRules,
) => {
  return (nodes: DOMNode[]) =>
    domToReact(nodes, getReplacementOptions(componentReplacementRules));
};

export const parsingElement = {
  createParserHtml,
  createParserDomNode,
};
