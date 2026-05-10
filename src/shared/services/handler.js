import client from "../helpers/client";

export const getInitialMovies = async () => {
  const keywords = ["war", "space", "comedy", "action"];

  const requests = keywords.map((word) =>
    client.get("", { params: { s: word } }),
  );

  const results = await Promise.all(requests);
  const rawMovies = results.flatMap((res) => res.Search || []);

  const uniqueMovies = Array.from(
    new Map(rawMovies.map((movie) => [movie.imdbID, movie])).values(),
  );

  return uniqueMovies.map((movie) => movie.imdbID);
};

export const getMovieById = async (id) => {
  const res = await client.get("", { params: { i: id, plot: "short" } });

  return {
    id: res.imdbID,
    title: res.Title,
    year: Number(res.Year),
    genre: res.Genre?.split(",")[0].trim(),
    rating: res.imdbRating !== "N/A" ? Number(res.imdbRating) : null,
    poster: res.Poster !== "N/A" ? res.Poster : null,
    plot: res.Plot !== "N/A" ? res.Plot : null,
    director: res.Director !== "N/A" ? res.Director : null,
    actors: res.Actors !== "N/A" ? res.Actors : null,
    runtime: res.Runtime !== "N/A" ? res.Runtime : null, 
    type: res.Type,
  };
};

export const getMoviesDetails = async (ids) => {
  const requests = ids.map((id) => getMovieById(id));
  const results = await Promise.allSettled(requests);

  return results.filter((r) => r.status === "fulfilled").map((r) => r.value);
};
