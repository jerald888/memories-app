import axios from "axios" // 10.4

const url = "http://localhost:5000/posts" // 10.4

export const fetchPosts = () => axios.get(url) // 10.4

export const createPosts = (newPostData) => axios.post(url, newPostData) // 14.1