import * as axios from '../axios-api/axios' /* 20 */

import { DELETE_POST } from '../constants/actionTypes'; /* 22 */


export const deletePostAction = /* 20  */ (postId) => async (dispatch) => {
  // console.log(postId)
  try {

    await axios.deletePost(postId);
  
    dispatch({
      type: DELETE_POST, /* 22 */
      payload: postId
    })
  } catch(error) {
    console.log("catch")
    console.log(error)
  }
} /* 20 */