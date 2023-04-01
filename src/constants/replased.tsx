import { Element, domToReact, HTMLReactParserOptions } from 'html-react-parser';

import AlbergueRainAnimation from '@/components/Albergue/AlbergueRainAnimation/AlbergueRainAnimation';
import AlbergueAudio from '@/components/Albergue/AlbergueAudio/AlbergueAudio';
import AlbergueSwitchImage from '@/components/Albergue/AlbergueSwitchImage/AlbergueSwitchImage';
import AlbergueModalPhoto from '@/components/Albergue/AlbergueModalPhoto/AlbergueModalPhoto';

type TReplacedComponent = Record<string, (domNode: Element) => JSX.Element>;

export const REPLACED_COMPONENT_OPTIONS: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (!(domNode instanceof Element)) {
      return;
    }

    const componentRender = REPLACED_COMPONENT[domNode.attribs['data-element']];

    if (!componentRender) {
      return;
    }

    return componentRender(domNode);
  },
};

export const REPLACED_COMPONENT: TReplacedComponent = {
  'albergue-rain-animation': ({ children }) => {
    return (
      <AlbergueRainAnimation>
        {domToReact(children, REPLACED_COMPONENT_OPTIONS)}
      </AlbergueRainAnimation>
    );
  },

  'albergue-switch-image': () => {
    return <AlbergueSwitchImage />;
  },
  'albergue-audio': ({ children }) => {
    return (
      <AlbergueAudio>
        {domToReact(children, REPLACED_COMPONENT_OPTIONS)}
      </AlbergueAudio>
    );
  },
  'albergue-modal-photo': ({ children }) => {
    return (
      <AlbergueModalPhoto>
        {domToReact(children, REPLACED_COMPONENT_OPTIONS)}
      </AlbergueModalPhoto>
    );
  },
};
