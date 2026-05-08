import { createContext, useState, useEffect, useMemo } from 'react';
import { getInitialMovies } from '../services/handler';
import { useFetch } from '../hooks/useFetch';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const { fetchData, loading, error } = useFetch(getInitialMovies);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      if (result) setMovies(result);
    };
    loadData();
  }, [fetchData]);

  const value = useMemo(() => ({
    movies,
    setMovies,
    loading,
    error
  }), [movies, loading, error]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};