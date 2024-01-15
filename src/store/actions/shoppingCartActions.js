export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_PRODUCT_COUNT = "INCREASE_PRODUCT_COUNT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: { product },
});

export const increaseProductCount = (productId) => ({
  type: INCREASE_PRODUCT_COUNT,
  payload: { productId },
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { productId },
});

// export const setCart=(cart)=>{
//     return {
//         type:SET_CART,
//         payload:cart,
//     }
// }

// export const setPayment=(payment)=>{
//     return {
//         type:SET_PAYMENT,
//         payload:payment,
//     }
// }

// export const setAddress=(address)=>{
//     return {
//         type:SET_ADDRESS,
//         payload:address,
//     }
// }
