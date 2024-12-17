const express = require('express');

const postRouter = express.Router();

const { getPosts } = require('../controllers/postController.js');


postRouter.get('/posts', (req, res) => getPosts(req, res));

postRouter.post('/posts', (req, res) => {
    res.json({ message: "Post ontvangen" });
})


postRouter.delete('/posts/1', (req, res) => {
    res.json({ message: "we verwijderen een post" });
})

module.exports = postRouter;