import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
  import {useTitle} from './../../shared/hooks/useTitle'

export default function NotFound() {
  useTitle("CineFlix | Not Found");

  return (
    <div className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.title}>Lost in the Cinema</p>
      <p className={styles.subtitle}>This page doesn't exist. Head back to the home screen.</p>
      <Link to="/" className={styles.button}>← Back to Home</Link>
    </div>
  );
}