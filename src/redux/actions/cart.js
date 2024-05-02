export const removeCartItem = (id) => ({
    type: 'DELETE_CART_ITEM',
    payload: id,
  });

  export const addCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
  });

  export const deleteCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
  });