import {
  AlbergueRainAnimation,
  AlbergueAudio,
  AlbergueSwitchImage,
  AlbergueModalPhoto,
  AlbergueModalVideo,
  AlbergueCover,
} from 'widgets/books/Albergue';
import { Footnote } from 'widgets/Footnote';
import { parsingElement } from 'shared/lib/insertingDynamicComponent';
import { TComponentReplacementRules } from 'shared/types/replasedComponent';

// TODO: make lazy load
// TODO: separate to several files (one file - one book)
// TODO: remove cyclical dependencies

export const ALBERGUE_REPLACEMENT_RULES_REMOVE_THIS_CONFIG: TComponentReplacementRules =
  {
    'albergue-rain-animation': ({ children }) => {
      return (
        <AlbergueRainAnimation>
          {convertDomNodeToComponent(children)}
        </AlbergueRainAnimation>
      );
    },

    'albergue-switch-image': () => {
      return <AlbergueSwitchImage />;
    },

    'albergue-audio': ({ children }) => {
      return (
        <AlbergueAudio>{convertDomNodeToComponent(children)}</AlbergueAudio>
      );
    },
    'albergue-modal-photo': ({ children }) => {
      return (
        <AlbergueModalPhoto>
          {convertDomNodeToComponent(children)}
        </AlbergueModalPhoto>
      );
    },
    'albergue-modal-video': ({ children }) => {
      return (
        <AlbergueModalVideo>
          {convertDomNodeToComponent(children)}
        </AlbergueModalVideo>
      );
    },
    'albergue-cover': () => <AlbergueCover />,
    footnote: ({ children, attribs }) => {
      const title = attribs['data-title'];
      const content = attribs['data-body'];

      return (
        <Footnote title={title} description={convertHtmlToComponent(content)}>
          {convertDomNodeToComponent(children)}
        </Footnote>
      );
    },
  };

export const convertDomNodeToComponent = parsingElement.createParserDomNode(
  ALBERGUE_REPLACEMENT_RULES_REMOVE_THIS_CONFIG,
);

export const convertHtmlToComponent = parsingElement.createParserHtml(
  ALBERGUE_REPLACEMENT_RULES_REMOVE_THIS_CONFIG,
);
