import { Layout } from 'shared/ui';
import { PropsWithChildren } from 'react';
import { RedirectToBookDetailsButton } from 'features/RedirectToBookDetailsButton';

export const BookReaderLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <Layout.Header sticky>
        <RedirectToBookDetailsButton />
      </Layout.Header>
      {children}
    </Layout>
  );
};
