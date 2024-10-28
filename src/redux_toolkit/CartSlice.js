import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total_amount: 0,
    total_discount:0
}

const cartSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        AddCart: (state, action) => {
            const find = state.cart.find((item) => item.id === action.payload.id)
            if (!find) {
                state.cart.push(action.payload)
                state.total_amount += action.payload.old_price
                state.total_discount += (action.payload.old_price-action.payload.new_price)
            }
        },
        RemoveCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
            state.total_amount -= action.payload.old_price
            state.total_discount -= (action.payload.old_price-action.payload.new_price)
        }
    }
})

export const { AddCart, RemoveCart} = cartSlice.actions
export default cartSlice.reducer

