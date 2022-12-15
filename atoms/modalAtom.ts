import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { FavouriteMovie, Movie } from '../typings'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom<Movie | FavouriteMovie | null>({
  key: 'movieState',
  default: null,
})