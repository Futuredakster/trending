import {
  CONTENT, // Assuming this will now specifically handle Reddit content
  SET_HACKER_NEWS_CONTENT,
  ContentState,
 // Make sure you have this Post interface defined in contentType.ts
} from '../types/contentType'; // Make sure this path is correct

// Define the shape of your action for better type safety
interface Action {
  type: string;
  payload?: any[]; // The payload should be an array of Post
}

// Initial state for your content
const initialState: ContentState = {
  redditItems: [],
  hackerNewsItems: [],
};

export default function contentReducer(
  state: ContentState = initialState,
  action: Action
) {
  switch (action.type) {
    case CONTENT: // This case will now update redditItems
      return {
        ...state,
        redditItems: action.payload || [], // Set Reddit content
      };
    case SET_HACKER_NEWS_CONTENT: // This case updates hackerNewsItems
      return {
        ...state,
        hackerNewsItems: action.payload || [], // Set Hacker News content
      };
    default:
      return state;
  }
}



/*import { CONTENT } from "../types/contentType";

interface Action {
  type: string;
  payload?: any[];  // adjust if you have a more specific type
}

const initialState: { items: any[] } = { items: [] };

export default function contentReducer(
  state = initialState,
  action: Action
) {
  switch (action.type) {
    case CONTENT:
        console.log("Reducer got payload:", action.payload);
      return {
        ...state,
        items: [...state.items, ...(action.payload || [])],
      };
    default:
      return state;
  }
}
*/