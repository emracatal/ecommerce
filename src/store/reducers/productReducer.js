// - product list: {Object Array}
// - total product count: {Number}
// - page count: {Number}
// - active page: {Number}
// - fetch state: {String} “NOT_FETCHED” | “FETCHING” | “FETCHED” | “FAILED” TODO:const tanımlayıp oradan initial tanımla, o objeden setle
import {
  SET_PRODUCTS,
  SET_PRODUCT_COUNT,
  SET_PAGE_COUNT,
  SET_ACTIVE_PAGE,
  SET_FETCH_STATE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SET_TOTALPRODUCTS,
} from "../actions/productActions";

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: [...action.payload],
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case SET_PRODUCTS:
      return {
        ...state,
        productList: [...state.productList, ...action.payload],
      };

    case SET_TOTALPRODUCTS:
      return { ...state, totalProductCount: action.payload };

    case SET_PRODUCT_COUNT:
      return { ...state, totalProductCount: action.payload };
    case SET_PAGE_COUNT:
      return { ...state, pageCount: action.payload };
    case SET_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};

export default productReducer;
