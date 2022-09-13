import { CREATE_POSTS, EDIT_POST, DELETE_POST, LIKE_POST } from "../constants/actionTypes" /* 22 */

export default (posts = [], action) => { /* 12.2 */
  switch (action.type) { /* 12.2 */
    case "FETCH_POSTS": /* 22 replaced action type string with variables from constants */
      return action.payload /* 12.2 */

    case CREATE_POSTS : /* 22 replaced action type string with variables from constants */
      // console.log({posts})
      return [...posts, action.payload]

    case EDIT_POST: /* 18.2 */ /* 22 replaced action type string with variables from constants */

      return posts.map(post => post._id === action.payload._id ? action.payload : post) /* 18.2 */
      // const filterEditedPost = posts.filter(post => post.id !== action.payload.currentId) /* 18.2 */

      // return [...filterEditedPost, action.payload] /* 18.2 */
    
    case DELETE_POST: /* 20 */ /* 22 replaced action type string with variables from constants */

      return posts.filter(post => post._id !== action.payload) /* 20 */

    case LIKE_POST: /* 21 */ /* 22 replaced action type string with variables from constants */

      return posts.map(post => post._id === action.payload._id ? action.payload: post) /* 21 */

      

    default: /* 12.2 */
      return posts
  }/* 12.2 */
}/* 12.2 */



/* **** default case..... else wont render in browser */