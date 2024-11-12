import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

// Helper function to get data from localStorage
const getCartData = JSON.parse(localStorage.getItem('cart')) || [] ;
const getTotalAmount = Number(localStorage.getItem('totalAmount')) || 0;
const getTotalDiscount = Number(localStorage.getItem('totalDiscount')) || 0;

const initialState = {
    cart: getCartData,
    totalAmount: getTotalAmount,
    totalDiscount: getTotalDiscount
}

const cartSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        AddCart: (state, action) => {
            const find = state.cart.find((item) => item.id === action.payload.id)
            if (!find) {
                state.cart.push(action.payload)
                state.totalAmount += action.payload.old_price
                state.totalDiscount += (action.payload.old_price - action.payload.new_price)
                localStorage.setItem('cart', JSON.stringify(state.cart));
                localStorage.setItem('totalAmount', state.totalAmount)
                localStorage.setItem('totalDiscount', state.totalDiscount)
                toast.success("This item is add in cart")
            }
        },
        RemoveCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
            state.totalAmount -= action.payload.old_price
            state.totalDiscount -= (action.payload.old_price - action.payload.new_price)
            localStorage.setItem('cart', JSON.stringify(state.cart));
            localStorage.setItem('totalAmount', state.totalAmount)
            localStorage.setItem('totalDiscount', state.totalDiscount)
            toast.success("item removed from cart")
        }
    }
})

export const { AddCart, RemoveCart } = cartSlice.actions
export default cartSlice.reducer

