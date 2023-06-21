import { parsingElement } from 'shared/lib/insertingDynamicComponent';
import { ALBERGUE_REPLACEMENT_RULES_REMOVE_THIS_CONFIG } from 'widgets/books/Albergue';

type TBookCoverProps = {
  thumbnailImage: string;
  thumbnailComponent?: string | null;
};

const convertHtmlToComponent = parsingElement.createParserHtml(
  ALBERGUE_REPLACEMENT_RULES_REMOVE_THIS_CONFIG,
);

export const BookCover = ({
  thumbnailImage,
  thumbnailComponent,
}: TBookCoverProps) => {
  if (thumbnailComponent) {
    const coverComponent = convertHtmlToComponent(thumbnailComponent);
    return <>{coverComponent}</>;
  }

  return <img src={thumbnailImage} />;
};
