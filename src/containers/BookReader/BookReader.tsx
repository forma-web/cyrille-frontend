import AlbergueContent from '@/containers/AlbergueContent/AlbergueContent';
import Layout from '@/layouts/Layout/Layout';
import Progress from '@/containers/Progress/Progress';
import styles from './BookReader.module.scss';
import useBookReader from '@/hooks/useBookReader';
import { useParams } from 'react-router-dom';

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
  } = useBookReader(bookId!);

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
            <AlbergueContent />
          </section>
        </div>
      </Layout.Main>
      {progress !== null && (
        <Layout.Footer sticky>
          <Progress
            progress={progress}
            totalStep={totalStep}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </Layout.Footer>
      )}
    </Layout>
  );
};

export default BookReader;
