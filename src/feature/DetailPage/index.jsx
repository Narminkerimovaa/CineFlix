import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "./../../shared/services/handler";
import styles from "./DetailPage.module.css";
import useGlobal from "../../shared/provider/Global/useGlobal";
import { useTitle } from "../../shared/hooks/useTitle";

export default function DetailPage() {
    useTitle("CineFlix | Detail");
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);

  const { toggleWatchlist, isInWatchlist } = useGlobal();
  const inWatchlist = isInWatchlist(id);

  console.log(movie);

  useEffect(() => {
    setLoading(true);
    setVisible(false);
    getMovieById(id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
        setTimeout(() => setVisible(true), 50);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const genres = movie?.genre
    ? movie.genre.split(",").map((g) => g.trim())
    : [];

  if (loading) {
    return (
      <div className={styles.center}>
        <div className={styles.spinner} />
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className={styles.center}>
        <p className={styles.errorText}>Film tapılmadı.</p>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          ← Geri qayıt
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.page} ${visible ? styles.visible : ""}`}>
      <div className={styles.backdrop}>
        {movie.poster && (
          <img src={movie.poster} alt="" className={styles.backdropImg} />
        )}
        <div className={styles.backdropOverlay} />
      </div>

      <div className={styles.content}>
        <button className={styles.back} onClick={() => navigate(-1)}>
          ← Geri
        </button>

        <div className={styles.main}>
          <div className={styles.posterWrap}>
            {movie.poster ? (
              <img
                src={movie.poster}
                alt={movie.title}
                className={styles.poster}
              />
            ) : (
              <div className={styles.posterFallback}>
                <span>🎬</span>
              </div>
            )}
          </div>

          <div className={styles.info}>
            {genres.length > 0 && (
              <p className={styles.genreLabel}>
                {genres.join(" / ").toUpperCase()}
              </p>
            )}

            <h1 className={styles.title}>{movie.title}</h1>

            <div className={styles.meta}>
              {movie.rating && (
                <span className={styles.rating}>
                  <span className={styles.star}>★</span>
                  {movie.rating}
                </span>
              )}
              {movie.year && (
                <span className={styles.metaItem}>{movie.year}</span>
              )}
              {movie.runtime && (
                <span className={styles.metaItem}>{movie.runtime}</span>
              )}
              {movie.type && (
                <span className={styles.badge}>{movie.type.toUpperCase()}</span>
              )}
            </div>

            {movie.plot && <p className={styles.plot}>{movie.plot}</p>}

            {genres.length > 0 && (
              <div className={styles.tags}>
                {genres.map((g) => (
                  <span key={g} className={styles.tag}>
                    {g}
                  </span>
                ))}
                {movie.director && movie.director !== "N/A" && (
                  <span className={styles.tag}>{movie.director}</span>
                )}
                {movie.actors &&
                  movie.actors !== "N/A" &&
                  movie.actors
                    .split(",")
                    .slice(0, 2)
                    .map((a) => (
                      <span key={a} className={styles.tag}>
                        {a.trim()}
                      </span>
                    ))}
              </div>
            )}

            <div className={styles.actions}>
              <button className={styles.playBtn}>▶ Play</button>
              <button
                className={`${styles.watchlistBtn} ${inWatchlist ? styles.watchlistActive : ""}`}
                onClick={() =>
                  toggleWatchlist({
                    id,
                    title: movie.title,
                    poster: movie.poster,
                    year: movie.year,
                  })
                }
              >
                {inWatchlist ? "✓ Watchlist-dədir" : "+ Watch List"}
              </button>
            </div>

            <div className={styles.details}>
              {movie.director && movie.director !== "N/A" && (
                <p className={styles.detailRow}>
                  <span className={styles.detailLabel}>Director</span>
                  <span className={styles.detailValue}>{movie.director}</span>
                </p>
              )}
              {movie.year && (
                <p className={styles.detailRow}>
                  <span className={styles.detailLabel}>Released</span>
                  <span className={styles.detailValue}>{movie.year}</span>
                </p>
              )}
              {movie.runtime && (
                <p className={styles.detailRow}>
                  <span className={styles.detailLabel}>Runtime</span>
                  <span className={styles.detailValue}>{movie.runtime}</span>
                </p>
              )}
              {movie.genre && (
                <p className={styles.detailRow}>
                  <span className={styles.detailLabel}>Genre</span>
                  <span className={styles.detailValue}>{movie.genre}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
