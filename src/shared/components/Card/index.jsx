import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieCard.module.css";
import useGlobal from "../../provider/Global/useGlobal";

export default function MovieCard({
  id,
  title,
  year,
  genre,
  rating,
  runtime,
  poster,
  isNew = false,
}) {
  const navigate = useNavigate();
  const { toggleWatchlist, isInWatchlist } = useGlobal();
  const isFav = isInWatchlist(id);

  const handleFav = (e) => {
    e.stopPropagation();
    toggleWatchlist({ id, title, poster, year });
  };

  const handlePlay = (e) => {
    e.stopPropagation();
    navigate(`/movies/${id}`);
  };

  return (
    <div className={styles.card} onClick={() => navigate(`/movies/${id}`)}>
      <div className={styles.poster}>
        {poster ? (
          <img src={poster} alt={title} className={styles.posterImg} />
        ) : (
          <div className={styles.posterFallback} />
        )}

        <div className={styles.topRow}>
          {rating != null && (
            <div className={styles.rating}>
              <span className={styles.ratingStar}>★</span>
              {rating}
            </div>
          )}
          {isNew && <span className={styles.newBadge}>New</span>}
        </div>

        <div className={styles.overlay}>
          <div className={styles.overlayInfo}>
            <p className={styles.overlayTitle}>{title}</p>
            <p className={styles.overlayMeta}>
              {year}
              {runtime && <span> • {runtime}</span>}
              {genre && <span> • {genre}</span>}
            </p>
          </div>

          <div className={styles.overlayActions}>
            <div className={styles.actionsLeft}>
              <button
                className={styles.playBtn}
                onClick={handlePlay}
                aria-label="Play"
              >
                ▶
              </button>
              <button
                className={`${styles.iconBtn} ${isFav ? styles.iconBtnActive : ""}`}
                onClick={handleFav}
                aria-label="Add to favourites"
              >
                ♥
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string,
  rating: PropTypes.number,
  runtime: PropTypes.string,
  poster: PropTypes.string,
  isNew: PropTypes.bool,
};
