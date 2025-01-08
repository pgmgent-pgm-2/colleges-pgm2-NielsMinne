const express = require('express');

const postRouter = express.Router();

const { getPosts, getPost,createPost, deletePost } = require('../controllers/postController.js');


postRouter.get('/posts', (req, res) => getPosts(req, res));
postRouter.get('/posts/:postId', getPost);


postRouter.post('/posts', (req, res) => createPost(req, res));


postRouter.delete('/posts/:id', (req, res) => deletePost(req, res));

module.exports = postRouter;