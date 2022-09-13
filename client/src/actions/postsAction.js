import * as axios from "../axios-api/axios.js" // 12.1

import { FETCH_POSTS } from "../constants/actionTypes.js" /* 22 */

export const getPostsAction = () => async(dispatch) /* 12.1 */ => {
  try { /* 12.1 */

    const {data} = await axios.fetchPosts() /* 12.1 */

    dispatch({type: FETCH_POSTS /* 22 */, payload: data })

  } catch(error) { /* 12.1 */
    
    console.log(error.message)
  }
} /* 12.1 */