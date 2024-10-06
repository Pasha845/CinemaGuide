import type { IRandomFilm, ITopFilms, Search, IMovie, IGenre, IGenreFilms } from "@/types/product";
import { useRoute } from "vue-router";

export const getRandomFilm = async (): Promise<IRandomFilm[]> => {
  try {
    const fetchResponse = await fetch('https://cinemaguide.skillbox.cc/movie/random');
    const randoms: IRandomFilm[] = await fetchResponse.json();

    return randoms;
  } catch(err) {
    throw new Error('Random film loading error');
  };
};

export const getTopFilms = async (): Promise<ITopFilms[]> => {
  try {
    const fetchResponse = await fetch('https://cinemaguide.skillbox.cc/movie/top10');
    const tops: ITopFilms[] = await fetchResponse.json();

    return tops;
  } catch(err) {
    throw new Error('Top films loading error');
  };
};

export const getSearchFilms = async (inputText: string): Promise<Search[]> => {
  try {
    const query = new URLSearchParams({
      count: String(5),
      title: String(inputText)
    });
    const fetchResponse = await fetch(`https://cinemaguide.skillbox.cc/movie?${query}`);
    const search: Search[] = await fetchResponse.json();

    return search;
  } catch(err) {
    throw new Error('Search films loading error');
  };
};

export const getMovie = async (): Promise<IMovie[]> => {
  try {
    const route = useRoute();
    const filmId = route.params.id;
    const fetchResponse = await fetch(`https://cinemaguide.skillbox.cc/movie/${filmId}`);
    const movie: IMovie[] = await fetchResponse.json();

    return movie;
  } catch(err) {
    throw new Error('Film loading error');
  };
};

export const getGenres = async (): Promise<IGenre[]> => {
  try {
    const fetchResponse = await fetch('https://cinemaguide.skillbox.cc/movie/genres');
    const genres: IGenre[] = await fetchResponse.json();

    return genres;
  } catch(err) {
    throw new Error('Film genres loading error');
  };
};

export const getGenreFilms = async (genre: string, numberFilms: number): Promise<IGenreFilms[]> => {
  try {
    const query = new URLSearchParams({
      count: String(numberFilms),
      genre: genre
    });
    const fetchResponse = await fetch(`https://cinemaguide.skillbox.cc/movie?${query}`);
    const films: IGenreFilms[] = await fetchResponse.json();

    return films;
  } catch(err) {
    throw new Error('Error loading films by genre');
  };
};