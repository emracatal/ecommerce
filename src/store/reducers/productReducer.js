// - product list: {Object Array}
// - total product count: {Number}
// - page count: {Number}
// - active page: {Number}
// - fetch state: {String} “NOT_FETCHED” | “FETCHING” | “FETCHED” | “FAILED” TODO:const tanımlayıp oradan initial tanımla, o objeden setle
import {
  SET_PRODUCT_LIST,
  SET_PRODUCT_COUNT,
  SET_PAGE_COUNT,
  SET_ACTIVE_PAGE,
  SET_FETCH_STATE,
} from "../actions/productActions";

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: "",
};

const poductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
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

export default poductReducer;
