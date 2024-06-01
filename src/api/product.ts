import type { IProduct } from "@/types/product"

export const getRandomFilm = async (): Promise<IProduct[]> => {
  try {
    const fetchResponse = await fetch('https://cinemaguide.skillbox.cc/movie/random')
    const response = await fetchResponse.json()
    const random: IProduct[] = response

    return random
  } catch(err) {
    throw new Error('products response was not ok')
  }
}

export const getTopFilms = async (): Promise<IProduct[]> => {
  try {
    const fetchResponse = await fetch('https://cinemaguide.skillbox.cc/movie/top10')
    const response = await fetchResponse.json()
    const products: IProduct[] = response

    return products
  } catch(err) {
    throw new Error('products response was not ok')
  }
}

export const getGenreFilms = async (): Promise<IProduct[]> => {
  try {
    const fetchResponse = await fetch('https://cinemaguide.skillbox.cc/movie/genres')
    const response = await fetchResponse.json()
    const genres: IProduct[] = response

    return genres
  } catch(err) {
    throw new Error('products response was not ok')
  }
}