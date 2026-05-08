import styles from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.wrapper} role="status" aria-hidden="true">
      <div className={styles.spinner} />
    </div>
  );
}