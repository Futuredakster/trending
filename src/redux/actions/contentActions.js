// redux/actions/contentActions.ts (Update or create this file)

import { CONTENT, SET_HACKER_NEWS_CONTENT } from '../types/contentType';

// Action for setting Reddit content
export const setRedditContent = (value) => ({
  type: CONTENT,
  payload:value
});

// Action for setting Hacker News content
export const setHackerNewsContent = (value) => ({
  type: SET_HACKER_NEWS_CONTENT,
  payload:value
});

// If you still have 'contentFetch' for other purposes, keep it here.
// Otherwise, it might be replaced by the more specific actions.
// export const contentFetch = (payload: Post[]) => ({
//   type: CONTENT,
//   payload,
// });