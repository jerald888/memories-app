import express from "express"; // 7.1

import { getPosts } from "../controllers/posts.js"; // 8.1

import { createPosts } from "../controllers/posts.js"; // 9.1

const router = express.Router() // 7.1

router.get("/", getPosts /* 8.1 */  /* (req, res) => {
    res.send("this is from posts.js and it is working")
} */ /* commented on 8.1 */) // 7.1

router.get("/", createPosts) // 9.1

export default router