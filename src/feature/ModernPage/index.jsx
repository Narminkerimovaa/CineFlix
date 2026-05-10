import { useMemo } from "react";
import MovieCard from "./../../shared/components/Card";
import Spinner from "./../../shared/components/Spinner";
import styles from "./ModernPage.module.css";
import useGlobal from "./../../shared/provider/Global/useGlobal";
import { useTitle } from "../../shared/hooks/useTitle";

export default function ModernPage() {
  useTitle("CineFlix | Modern");

  const { movies, loading, error } = useGlobal();

  const modernMovies = useMemo(
    () => movies.filter((m) => m.year >= 2000 && m.year <= 2023),
    [movies],
  );

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.browse}>Browse</p>
        <h1 className={styles.title}>2000 – 2023</h1>
        <p className={styles.count}>Showing {modernMovies.length} films</p>
      </div>

      {loading && (
        <div className={styles.center}>
          <Spinner />
        </div>
      )}

      {error && (
        <div className={styles.center}>
          <p className={styles.error}>
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      {!loading && !error && (
        <div className={styles.grid}>
          {modernMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
}
