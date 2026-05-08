import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const GENRE_CLASS = {
  Drama:     styles.genreDrama,
  Crime:     styles.genreCrime,
  Action:    styles.genreAction,
  'Sci-Fi':  styles.genreScifi,
  Thriller:  styles.genreThriller,
  Biography: styles.genreBiography,
};

export default function MovieCard({ title, year, genre, rating, isNew = false }) {
  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        <div className={styles.rating}>
          <span className={styles.ratingStar}>★</span>
          {rating}
        </div>
        {isNew && <span className={styles.newBadge}>New</span>}
      </div>

      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <div className={styles.meta}>
          <span className={styles.year}>{year}</span>
          <span className={`${styles.genre} ${GENRE_CLASS[genre] ?? ''}`}>
            {genre}
          </span>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title:  PropTypes.string.isRequired,
  year:   PropTypes.number.isRequired,
  genre:  PropTypes.oneOf(['Drama', 'Crime', 'Action', 'Sci-Fi', 'Thriller', 'Biography']).isRequired,
  rating: PropTypes.number.isRequired,
  isNew:  PropTypes.bool,
};