// - cart: {Object Array} will keep products are being bought
// [
//     {  count: 1, product: { id: “1235”, … }  },
//     {  count: 3, product: { id: “1236”, … }  },
// ]
// - payment {Object} will keep payment information
// - address {Object} will keep address information

// cart: [
//   {  count: 1, checked: true, product: { id: “1235”, … }  },
//   {  count: 3, checked: true, product: { id: “1236”, … }  },
// ]

import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  ADD_TO_CART,
  UPDATE_PRODUCT_COUNT,
  REMOVE_FROM_CART,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  // payment: {},
  // address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product } = action.payload;
      const existingProduct = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { count: 1, checked: true, product }],
        };
      }

    case UPDATE_PRODUCT_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, count: action.payload.newCount }
            : item
        ),
      };

    case REMOVE_FROM_CART:
      const { productId: removedProductId } = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== removedProductId),
      };

    case SET_CART:
      return { ...state, cart: [...state.cart, ...action.payload] };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
export default shoppingCartReducer;
