import type { IRandomFilm, IProduct, IFilm, IGenre, IGenreFilms } from "@/types/product";

export const getRandomFilm = async (): Promise<IRandomFilm[]> => {
  try {
    const fetchResponse = await fetch('https://cinemaguide.skillbox.cc/movie/random');
    const response = await fetchResponse.json();
    const randoms: IRandomFilm[] = response;

    return randoms;
  } catch(err) {
    throw new Error('Random films response was not ok');
  }
}

export const getTopFilms = async (): Promise<IProduct[]> => {
  try {
    const fetchResponse = await fetch('https://cinemaguide.skillbox.cc/movie/top10');
    const response = await fetchResponse.json();
    const products: IProduct[] = response;

    return products;
  } catch(err) {
    throw new Error('Top films response was not ok');
  }
}

export const getFilm = async (): Promise<IFilm[]> => {
  try {
    const filmId = 79;
    const fetchResponse = await fetch(`https://cinemaguide.skillbox.cc/movie/${filmId}`);
    const response = await fetchResponse.json();
    const film: IFilm[] = response;

    return film;
  } catch(err) {
    throw new Error('Film response was not ok');
  }
}

export const getGenres = async (): Promise<IGenre[]> => {
  try {
    const fetchResponse = await fetch('https://cinemaguide.skillbox.cc/movie/genres');
    const response = await fetchResponse.json();
    const genres: IGenre[] = response;

    return genres;
  } catch(err) {
    throw new Error('Film genres response was not ok');
  }
}

export const getGenreFilms = async (): Promise<IGenreFilms[]> => {
  try {
    const fetchResponse = await fetch('https://cinemaguide.skillbox.cc/movie?count=10&genre=history');
    const response = await fetchResponse.json();
    const films: IGenreFilms[] = response;

    return films;
  } catch(err) {
    throw new Error('Films response was not ok');
  }
}