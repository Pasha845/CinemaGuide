export interface IRandomFilm {
  title: string,
  posterUrl: string,
  trailerUrl: string
}

export interface IProduct {
  backdropUrl: string,
  tmdbRating: number,
  releaseYear: number,
  runtime: number,
  title: string,
  plot: number,
  id: number
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
  
}