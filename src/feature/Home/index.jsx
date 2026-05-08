import MovieCard from './../../shared/components/Card';
import Spinner from './../../shared/components/Spinner';
import styles from './Home.module.css';
import useGlobal from './../../shared/provider/Global/useGlobal'

export default function Home() {
  const { movies, loading, error } = useGlobal();

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.browse}>Browse</p>
        <h1 className={styles.title}>All Movies</h1>
        <p className={styles.count}>Showing {movies.length} films</p>
      </div>

      {loading && (
        <div className={styles.center}>
          <Spinner />
        </div>
      )}

      {error && (
        <div className={styles.center}>
          <p className={styles.error}>Something went wrong. Please try again.</p>
        </div>
      )}

      {!loading && !error && (
        <div className={styles.grid}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              year={Number(movie.Year)}
              genre={movie.Genre?.split(',')[0].trim()}
              rating={Number(movie.imdbRating)}
              isNew={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}