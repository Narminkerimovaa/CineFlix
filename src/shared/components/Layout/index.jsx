import PropTypes from 'prop-types';
import Header from './../Header';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};