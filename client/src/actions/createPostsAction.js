import * as axios from "../axios-api/axios.js" // 14.2


export const createPostsAction = (newPost) => async (dispatch) => { /* 14.2 */
  try {
    console.log({newPost})
    const {data} = await axios.createPosts(newPost)  /* 14.2 */
    // console.log(data)
    dispatch({type: "CREATE_POSTS", payload: data}) /* 14.2 */
  } catch (error) {
    console.log(error.message)
  }
} /* 14.2 */

