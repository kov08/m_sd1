import express from "express";
import {getPostsBySearch, getPost, commentPost, getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
import auth from "../middleware/auth.js";


const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/:id', getPost);
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:idTest',auth, updatePost);
router.delete('/:id',auth, deletePost);
router.patch('/:id/likePost',auth, likePost);
router.post('/:id/commentPost',auth, commentPost);

// router.get('/', getPosts);
// router.get('/', getPosts);

export default router;