import Layout from '@/layouts/Layout/Layout';
import Progress from '@/containers/Progress/Progress';
import styles from './BookReader.module.scss';
import useBookReader from '@/hooks/useBookReader';
import { Link, useParams } from 'react-router-dom';
import CyrLoader from '@/components/ui/CyrLoader/CyrLoader';
import CyrButton from '@/components/ui/CyrButton/CyrButton';
import { ERoutes } from '@/constants/routers';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
// import AlbergueContent from '../AlbergueContent/AlbergueContent';

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
      <Layout.Header sticky>
        <Link to={`../${ERoutes.books}/${bookId}`}>
          <CyrButton className={styles.back}>
            <ChevronLeftIcon />
            back
          </CyrButton>
        </Link>
      </Layout.Header>
      {isLoading ? (
        <CyrLoader />
      ) : (
        <>
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
        </>
      )}
    </Layout>
  );
};

export default BookReader;
