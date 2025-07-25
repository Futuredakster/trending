import { SEARCH } from "../types/searchType";

export const searchUpdate = (value) =>({
    type: SEARCH,
    payload: value,
});

