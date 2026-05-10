import { useMemo } from 'react';
import useGlobal from '../../../shared/provider/Global/useGlobal';
import MovieCard from '../../../shared/components/Card';
import Spinner from '../../../shared/components/Spinner';
import styles from './EarlyEraPage.module.css';

export default function EarlyEraPage() {
  const { movies, loading, error } = useGlobal();

  const filtered = useMemo(
    () => movies.filter((m) => m.year >= 1950 && m.year <= 1975),
    [movies]
  );

  return (
    <>
      {loading && <div className={styles.center}><Spinner /></div>}
      {error && (
        <div className={styles.center}>
          <p className={styles.stateText}>Something went wrong. Please try again.</p>
        </div>
      )}
      {!loading && !error && (
        <>
          <p className={styles.count}>Showing {filtered.length} films</p>
          <div className={styles.grid}>
            {filtered.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </>
      )}
    </>
  );
}