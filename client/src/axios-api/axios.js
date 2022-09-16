import axios from "axios" // 10.4

/* const url = "http://localhost:5000/posts" // 10.4 */ /* 24 commented out url to replace it with heroku backend url in the following line */


const url = "https://mood-book-app.herokuapp.com/posts" /* 24 */

// api call to fetch posts from the backend

export const fetchPosts = () => axios.get(url) // 10.4

// api call to set a new post inside the backend

export const createPosts = (newPostData) => {
  return axios.post(url, newPostData)} // 14.1

// api call to send edited post to the backend

export const editPost = (editPostData, currentId) => {
  return axios.patch(`${url}/${currentId}`, editPostData)} /* 18.2 */

export const deletePost = (postId) => {
  return axios.delete(`${url}/${postId}`)
} /* 20 */

export const likePost = (postId) => {
  return axios.patch(`${url}/${postId}/likePost`)
} /* 21 */

// **** the url in inside each function is the endpoint set at the BACKEND

// **** always RETURN the get/patch etc api commands inside the funtion.... else await data response from the server will show undefined inside the front end

// **** https and NOT http in HEROKU URL.... else error