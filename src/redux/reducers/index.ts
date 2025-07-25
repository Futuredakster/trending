// src/redux/reducers/index.js
import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import contentReducer from "./contentReducer"; // Assuming you have a contentReducer defined


const rootReducer = combineReducers({
 search: searchReducer,
 content: contentReducer, // Assuming you have a contentReducer defined
});

export default rootReducer;
