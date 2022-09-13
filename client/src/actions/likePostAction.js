import * as axios from "../axios-api/axios"
import { LIKE_POST } from "../constants/actionTypes";

export const likePostAction = (postId) => async (dispatch) => {

try{

  const {data} = await axios.likePost(postId);

  // console.log("action", data)
  
  dispatch({
    type: LIKE_POST, /* 22 */
    payload: data
  })
  
} catch(error){
  console.log(error)
}

} /* 21 */