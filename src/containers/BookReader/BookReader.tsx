import AlbergueContent from '@/containers/AlbergueContent/AlbergueContent';
import Layout from '@/layouts/Layout/Layout';
import Progress from '@/containers/Progress/Progress';
import styles from './BookReader.module.scss';
import useBookReader from '@/hooks/useBookReader';

const BookReader = () => {
  const { readerRef, currentPage, readerPosition, totalPages, changePage } =
    useBookReader();

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
      <Layout.Footer sticky>
        <Progress />
      </Layout.Footer>
    </Layout>
  );
};

export default BookReader;
