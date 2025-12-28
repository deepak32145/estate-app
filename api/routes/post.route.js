import express from "express";

import { createPost , getPosts , deletePost , getPost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/" , getPosts);
router.post("/" , createPost);
router.delete("/:id" , deletePost);
router.get("/:id" , getPost );


export default router;