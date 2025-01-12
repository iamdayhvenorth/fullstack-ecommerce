import {create} from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"



export type WishlistItem = {
    id: number
    title: string
    price: number
    quantity: number
    initialPrice: number
    image: string
}

type Actions = {
    // addToList: (item: WishlistItem) => void
    // removeFromList: (id: number) => void
    // clearList: () => void
    
  }

type WishlistState = {
    products: WishlistItem[]
}

export const useWishListStore = create(
    immer((set)=> ({
        products: [],
    }))
)