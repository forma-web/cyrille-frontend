import parse from 'html-react-parser';
import { REPLACED_COMPONENT_OPTIONS } from '@/constants/replased';

type TBookCoverProps = {
  thumbnailImage: string;
  thumbnailComponent?: string | null;
};

export const BookCover = ({
  thumbnailImage,
  thumbnailComponent,
}: TBookCoverProps) => {
  if (thumbnailComponent) {
    const coverComponent = parse(
      thumbnailComponent,
      REPLACED_COMPONENT_OPTIONS,
    );
    return <>{coverComponent}</>;
  }

  return <img src={thumbnailImage} />;
};
