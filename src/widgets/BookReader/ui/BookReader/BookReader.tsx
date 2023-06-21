import { Progress } from '../Progress/Progress';
import styles from './BookReader.module.scss';
import { useBookReader } from '../../model/hooks/useBookReader';
import { useParams } from 'react-router-dom';
import { CyrLoader, Layout } from 'shared/ui';
import cn from 'classnames';

export const BookReader = () => {
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
  );
};
