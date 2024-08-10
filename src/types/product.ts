export interface IRandomFilm {
  id: number,
  backdropUrl: string,
  tmdbRating: number,
  releaseYear: number,
  runtime: number,
  title: string,
  plot: string,
  posterUrl: string,
  trailerUrl: string
}

export interface IProduct {
  id: number,
  posterUrl: string
}

export interface IFilm {
  trailerUrl: string,
  posterUrl: string,
  title: string,
  backdropUrl: string,
  tmdbRating: number,
  releaseYear: number,
  runtime: number,
  plot: number,
  language: string,
  budget: string,
  revenue: string,
  director: string,
  production: string,
  awardsSummary: string
}

export interface IGenre {
  id: number,
  title: string
}

export interface IGenreFilms {
  id: number,
  posterUrl: string
}