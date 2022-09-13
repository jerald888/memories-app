import * as axios from "../axios-api/axios"
import { EDIT_POST } from "../constants/actionTypes";



export const editPostAction = (editPostData, currentId) => async (dispatch) => {
    try {

    const {data} = await axios.editPost(editPostData,currentId); // sending api request to update post and store the responsse data in a variable
 
      dispatch({
        type: EDIT_POST, /* 22 */ 
        payload: data
      })


    } catch (error) {
      console.log(error);
    }
} /* 18.2 */