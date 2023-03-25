import AlbergueContent from '@/containers/AlbergueContent/AlbergueContent';
import Layout from '@/layouts/Layout/Layout';
import Progress from '@/containers/Progress/Progress';
import styles from './BookReader.module.scss';

const BookReader = () => {
  return (
    <Layout>
      <Layout.Main className={styles.reader}>
        <div className={styles.reader__content}>
          <AlbergueContent />
        </div>
      </Layout.Main>
      <Layout.Footer sticky>
        <Progress />
      </Layout.Footer>
    </Layout>
  );
};

export default BookReader;
