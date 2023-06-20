import {Router} from "express";

const router = new Router;
import PostController from '../controller/post.controller.js'

router.post('/post', PostController.createPost)
router.get('/posts', PostController.getAll)
router.get('/post/:id', PostController.getOne)
router.put('/post/:id', PostController.updatePost)
router.delete('/post/:id',PostController.deletePost)
export default router