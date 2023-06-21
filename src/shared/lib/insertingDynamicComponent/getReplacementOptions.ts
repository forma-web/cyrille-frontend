import { DOMNode, Element } from 'html-react-parser';
import { TComponentReplacementRules } from 'shared/types/replasedComponent';

/**
 * Return function for replace DOMNode to component.
 */
const replaceDomNodeToComponent = (
  componentReplacementRules: TComponentReplacementRules,
) => {
  return (domNode: DOMNode) => {
    // Only transform Element nodes
    if (!(domNode instanceof Element)) return;

    // Get function for render component
    const componentName = domNode.attribs['data-element'];
    const renderComponent = componentReplacementRules[componentName];

    if (!renderComponent) return;
    return renderComponent(domNode);
  };
};

/**
 * Return options for replace DOMNode to component.
 */
export const getReplacementOptions = (
  componentReplacementRules: TComponentReplacementRules,
) => ({
  replace: replaceDomNodeToComponent(componentReplacementRules),
});
