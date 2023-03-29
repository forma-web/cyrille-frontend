import Layout from '@/layouts/Layout/Layout';
import Progress from '@/containers/Progress/Progress';
import styles from './BookReader.module.scss';
import useBookReader from '@/hooks/useBookReader';
import { useParams } from 'react-router-dom';
import CyrLoader from '@/components/ui/CyrLoader/CyrLoader';

const BookReader = () => {
  const { bookId } = useParams();

  const {
    readerRef,
    readerPosition,
    changePage,
    progress,
    totalStep,
    currentPage,
    totalPages,
    readerContent,
    isLoading,
  } = useBookReader(bookId!);

  return (
    <Layout>
      <Layout.Main className={styles.reader}>
        <div
          className={styles.reader__content}
          ref={readerRef}
          onClick={changePage}
        >
          {isLoading && <CyrLoader />}
          <section
            className={styles.embed}
            style={{
              left: readerPosition,
            }}
            dangerouslySetInnerHTML={{ __html: readerContent ?? '' }}
          />
        </div>
      </Layout.Main>
      <Layout.Footer sticky>
        <Progress
          progress={progress}
          totalStep={totalStep}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Layout.Footer>
    </Layout>
  );
};

export default BookReader;
