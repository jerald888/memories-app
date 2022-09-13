import {combineReducers} from "redux" // 12.3

import posts from "./postsReducer.js" // 12.3

import { currentIdReducer } from "./currentIdReducer.js" /* 18.2 */

export default combineReducers({ 
  posts,
  currentId: currentIdReducer /* 18.1.3 */
}) /* 12.3 */