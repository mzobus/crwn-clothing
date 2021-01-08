export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems
        .find(cartItem => cartItem.id === cartItemToAdd.id);


    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            if (cartItem.id === cartItemToAdd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1};
            }
            return cartItem;
        });
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCard = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems
        .find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => {
        if (cartItem.id === cartItemToRemove.id) {
            return {...cartItem, quantity: cartItem.quantity - 1};
        }
        return cartItem;
    });
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}
