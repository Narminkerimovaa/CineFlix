import { createContext, useState, useEffect, useMemo, useCallback } from "react";
import { getInitialMovies, getMoviesDetails } from "./../../services/handler";
import { useFetch } from "./../../hooks/useFetch";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const {
    fetchData: fetchIds,
    loading: loadingIds,
    error: errorIds,
  } = useFetch(getInitialMovies);
  const {
    fetchData: fetchDetails,
    loading: loadingDetails,
    error: errorDetails,
  } = useFetch(getMoviesDetails);
  
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = useCallback((movie) => {
    setWatchlist((prev) =>
      prev.find((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie],
    );
  }, []);

  const isInWatchlist = useCallback(
    (id) => {
      return watchlist.some((m) => m.id === id);
    },
    [watchlist],
  );


  useEffect(() => {
    const loadData = async () => {
      const ids = await fetchIds();
      if (!ids) return;

      const details = await fetchDetails(ids);
      if (details) setMovies(details);
    };

    loadData();
  }, [fetchIds, fetchDetails]);

const value = useMemo(() => ({
  movies,
  setMovies,
  loading: loadingIds || loadingDetails,
  error: errorIds || errorDetails,
  watchlist,
  toggleWatchlist,
  isInWatchlist,
}), [movies, loadingIds, loadingDetails, errorIds, errorDetails, watchlist, toggleWatchlist, isInWatchlist]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
