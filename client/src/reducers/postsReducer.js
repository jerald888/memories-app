export default (posts = [], action) => { /* 12.2 */
  switch (action.type) { /* 12.2 */
    case "FETCH_POSTS":
      return action.payload /* 12.2 */

    case "CREATE_POSTS":
      return [...posts, action.payload]

    default: /* 12.2 */
      return posts
  }/* 12.2 */
}/* 12.2 */



/* **** default case..... else wont render in browser */