import {create} from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"



export type WishlistItem = {
    id: number
    title: string
    price: number
    initialPrice?: number
    image: string
}

type Actions = {
    addToWishlist: (item: WishlistItem) => void
    removeFromList: (id: number) => void
    clearList: () => void
    
  }

type WishlistState = {
    products: WishlistItem[] 
}

export const useWishListStore = create<WishlistState & Actions>()(
    devtools(persist(immer((set)=> ({
        products: [],
        addToWishlist: (item) => set((state)=> {
            const isExist = state.products.find(prod => prod.id === item.id)
            if(isExist) return
            state.products.push(item)
        }),
        removeFromList: (id) => set((state) => {
            state.products = state.products.filter(prod => prod.id!== id)
        }),
        clearList: () => set((state) => {
            state.products = []
        })
    })),{
        name: "Wishlist",
        version: 1,
        storage: createJSONStorage(() => localStorage),
        partialize: (state => ({
            products: state.products
        }))
    }),{
        enabled: true,
        name: "wishlist"
    })
)