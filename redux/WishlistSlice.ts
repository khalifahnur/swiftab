import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WishlistItems {
    id: number;
    image: any;
    restaurantName: string;
    location: string;
    rate: number;
    about: {
        id: number;
        cuisine: string;
        location: string;
        averageprice: number;
        hrsofoperation: string;
    }[];
    menu: {
        breakfast: {
            id: number;
            image: string;
            name: string;
            description: string;
            cost: number;
            rate: number;
        }[];
        lunch: {
            id: number;
            image: string;
            name: string;
            description: string;
        cost: number;
        rate: number;
    }[];
    dinner: {
        id: number;
        image: string;
        name: string;
        description: string;
        cost: number;
        rate: number;
    }[];
    review: {
        review: {
            name: string;
            image: string;
            reviewTxt: string;
            rating: number;
        }[];
    }[]
}[]
}

export interface WishlistState {
    value: number;
    wishlist: WishlistItems[];
}

const initialState: WishlistState = {
    value: 0,
    wishlist: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<WishlistItems>) => {
            state.wishlist.push(action.payload);
            console.log("wishlist",state.wishlist)
        },
        removeToWishlist: (state, action: PayloadAction<number>) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
        },
    },
});


export const { addToWishlist, removeToWishlist, } = cartSlice.actions;
export default cartSlice.reducer;
