import { SEARCH } from "../types/searchType";

const initialState = {
  searchTerm: ""// Initial state for search term
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {searchTerm: action.payload}; // ✅ Just a string
    default:
      return state;
  }
}
