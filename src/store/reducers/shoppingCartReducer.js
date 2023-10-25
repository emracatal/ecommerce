// - cart: {Object Array} will keep products are being bought
// [
//     {  count: 1, product: { id: “1235”, … }  },
//     {  count: 3, product: { id: “1236”, … }  },
// ]
// - payment {Object} will keep payment information
// - address {Object} will keep address information
import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
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
