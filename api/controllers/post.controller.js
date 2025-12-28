import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const createPost = async (req, res) => {
  const body = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: body.userId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to create post" });
  }
};

export const getPosts = async (req, res) => {
  const query = req.query;
  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        bedroom: parseInt(query.bathroom) || undefined,
      },
    });
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    console.log("post", post);
    await prisma.post.delete({
      where: { id },
    });
    res.status(200).json({ message: "post deleted successfuly" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ message: "failed to delete post" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};
