import { useNavigate } from "react-router-dom";
import useGlobal from "./../../shared/provider/Global/useGlobal";
import MovieCard from "./../../shared/components/Card";
import styles from "./WatchList.module.css";
import { useTitle } from "../../shared/hooks/useTitle";

export default function WatchList() {
  useTitle("CineFlix | Watch List");

  const { watchlist } = useGlobal();
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.browse}>My Collection</p>
        <h1 className={styles.title}>Watch List</h1>
        <p className={styles.count}>
          {watchlist.length > 0
            ? `${watchlist.length} films saved`
            : "No films added yet"}
        </p>
      </div>

      {watchlist.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🎬</span>
          <p className={styles.emptyText}>Your watchlist is empty</p>
          <p className={styles.emptySubtext}>
            Browse films and hit the heart icon to save them
          </p>
          <button className={styles.browseBtn} onClick={() => navigate("/")}>
            Browse Films
          </button>
        </div>
      ) : (
        <div className={styles.grid}>
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              poster={movie.poster}
              genre={movie.genre}
              rating={movie.rating}
              runtime={movie.runtime}
            />
          ))}
        </div>
      )}
    </div>
  );
}
