const express = require('express');

const postRouter = express.Router();

const { getPosts, createPost, deletePost } = require('../controllers/postController.js');


postRouter.get('/posts', (req, res) => getPosts(req, res));

postRouter.post('/posts', (req, res) => createPost(req, res));


postRouter.delete('/posts/:id', (req, res) => deletePost(req, res));

module.exports = postRouter;