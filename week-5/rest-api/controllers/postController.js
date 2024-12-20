const path = require("path");
const fsp = require("fs/promises");

const postPath = path.join(__dirname, "..", "data", "posts.json");

async function getDataFromFile() {
  const data = await fsp.readFile(postPath, 'utf8');
  const posts = JSON.parse(data);
  return posts;
}

async function getPosts(req, res) {
  try {
    const posts = await getDataFromFile();
    res.json(posts);
  }
  catch (error) {
    res.status(500).json(error);
  }
}

async function createPost(req, res) {
  try {
    const posts = await getDataFromFile();
    posts.push(req.body);

    await fsp.writeFile(postPath, JSON.stringify(posts, null, 2));

    res.json({ message: "Er is een nieuwe post toegevoegd" });
  }
  catch (error) {
    res.status(500).json(error);
  }
}

async function deletePost(req, res) {
  //1. data ophalen
  //2. filteren op basis van id
  //3. write to file
  //4. response "Het is gelukt"
}

module.exports = {
    getPosts,
  createPost,
  deletePost
};
