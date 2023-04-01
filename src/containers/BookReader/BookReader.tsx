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
    currentPage,
    totalPages,
    readerContent,
    isLoading,
    currentChapter,
    onChangeProgress,
  } = useBookReader(bookId!);

  if (isLoading) return <CyrLoader />;

  return (
    <Layout>
      <Layout.Main className={styles.reader}>
        <div
          className={styles.reader__content}
          ref={readerRef}
          onClick={changePage}
        >
          <section
            className={styles.embed}
            style={{
              left: readerPosition,
            }}
          >
            {readerContent}
          </section>
        </div>
      </Layout.Main>
      <Layout.Footer sticky>
        <Progress
          progress={progress}
          currentPage={currentPage}
          totalPages={totalPages}
          nameChapter={currentChapter?.name}
          progressChange={onChangeProgress}
        />
      </Layout.Footer>
    </Layout>
  );
};

export default BookReader;
