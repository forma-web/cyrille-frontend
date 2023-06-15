import Layout from '@/layouts/Layout/Layout';
import Progress from '@/containers/Progress/Progress';
import styles from './BookReader.module.scss';
import useBookReader from '@/hooks/useBookReader';
import { Link, useParams } from 'react-router-dom';
import { CyrLoader, CyrButton } from 'shared/ui';
import { ERoutes } from '@/constants/routers';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import cn from 'classnames';

const BookReader = () => {
  const { bookId } = useParams();

  const {
    readerRef,
    readerStyles,
    changePage,
    progress,
    currentPage,
    totalPages,
    readerContent,
    isLoading,
    currentChapter,
    onChangeProgress,
    prevPage,
    nextPage,
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
              className={cn(styles.pagination, styles.pagination_back)}
              onClick={prevPage}
            />
            <div className={styles.reader__content} onClick={changePage}>
              <section
                ref={readerRef}
                className={styles.embed}
                style={readerStyles}
              >
                {readerContent}
              </section>
            </div>
            <div
              className={cn(styles.pagination, styles.pagination_forward)}
              onClick={nextPage}
            />
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
