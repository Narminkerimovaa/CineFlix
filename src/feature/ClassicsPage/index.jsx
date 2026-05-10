import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useMemo } from "react";
import useGlobal from "./../../shared/provider/Global/useGlobal";
import MovieCard from "../../shared/components/Card";
import Spinner from "../../shared/components/Spinner";
import styles from "./ClassicsPage.module.css";
import { useTitle } from "../../shared/hooks/useTitle";

export default function ClassicsPage() {
    useTitle("CineFlix | Classic");
  
  const { movies, loading, error } = useGlobal();
  const location = useLocation();

  const isIndex = location.pathname === "/classics";

  const early = movies.filter((m) => m.year >= 1950 && m.year <= 1975).length;
  const late = movies.filter((m) => m.year >= 1975 && m.year <= 2000).length;

  const allClassics = useMemo(
    () => movies.filter((m) => m.year >= 1950 && m.year <= 2000),
    [movies],
  );

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.browse}>Classics</p>
        <h1 className={styles.title}>1950 – 2000</h1>
        <p className={styles.headercount}>Showing {allClassics.length} films</p>
      </div>

      <div className={styles.tabs}>
        <NavLink
          to="/classics/1950-1975"
          className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.tabActive : ""}`
          }
        >
          1950 – 1975
          <span className={styles.tabCount}>{early}</span>
        </NavLink>
        <NavLink
          to="/classics/1975-2000"
          className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.tabActive : ""}`
          }
        >
          1975 – 2000
          <span className={styles.tabCount}>{late}</span>
        </NavLink>
      </div>

      {isIndex ? (
        <>
          {loading && (
            <div className={styles.center}>
              <Spinner />
            </div>
          )}
          {error && (
            <div className={styles.center}>
              <p className={styles.stateText}>
                Something went wrong. Please try again.
              </p>
            </div>
          )}
          {!loading && !error && (
            <>
              <div className={styles.grid}>
                {allClassics.map((movie) => (
                  <MovieCard key={movie.id} {...movie} />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
