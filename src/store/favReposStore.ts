import create from 'zustand'
import { persist } from 'zustand/middleware'

type FavReposState = {
    favReposIds: number[],
    addFavRepo: (id: number) => void,
    removeFavRepo: (id: number) => void
}

export const useFavReposStore = create(persist<FavReposState>((set) => ({
    favReposIds: [],
    addFavRepo: (id: number) => (
        set(state => ({
           favReposIds: [ ...state.favReposIds, id ] 
        }))
    ),
    removeFavRepo: (id: number) => (
        set(state => ({
            favReposIds: state.favReposIds.filter(repoId => repoId !== id)
        }))
    )
}), {
    name: 'favorite-repos'
}))