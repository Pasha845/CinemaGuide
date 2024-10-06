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

export interface ITopFilms {
  id: number,
  posterUrl: string
}

export interface Search {
  id: number,
  title: string,
  originalTitle: string;
  language: string;
  releaseYear: number;
}

export interface IMovie {
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