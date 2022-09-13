import express from "express"; // 7.1

import { getPosts } from "../controllers/posts-controller.js"; // 8.1

import { createPosts } from "../controllers/posts-controller.js"; // 9.1

import { updatePost } from "../controllers/posts-controller.js"; // 18.2.1

import { deletePost } from "../controllers/posts-controller.js";/* 20 */

import { likePost } from "../controllers/posts-controller.js"; /* 21 */

const router = express.Router() // 7.1

router.get("/", getPosts /* 8.1 */  /* (req, res) => {
    res.send("this is from posts.js and it is working")
} */ /* commented on 8.1 */) // 7.1

router.post("/", createPosts) // 9.1

router.patch("/:id", updatePost) /* 18.2.1 */

router.delete("/:id", deletePost) /* 20 */

router.patch("/:id/likePost", likePost) /* 21 */

export default router 

