import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);
export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector([selectCart], ({cartItems}) => cartItems.reduce((acc, cur) => acc + cur.quantity, 0));

export const selectCartTotal = createSelector([selectCart], ({cartItems}) => cartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0));