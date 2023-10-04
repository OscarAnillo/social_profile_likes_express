import express from 'express';
import { createPost, getAllPosts, likePost } from '../Controllers/Post.js';

const router = express.Router();

router.post("/", createPost);
router.get("/all", getAllPosts);
router.patch("/:id", likePost)

export default router;