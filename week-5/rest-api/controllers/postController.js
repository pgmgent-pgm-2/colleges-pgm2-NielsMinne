const path = require("path");
const fs = require("fs");

const postPath = path.join(__dirname, "..", "data", "posts.json");

function getPosts(req, res) {
  fs.readFile(postPath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(JSON.parse(data));
  });
}

function addPost(req, res) {
    //Logica om iets te posten -> lezen en schrijven naar posts.json
}

module.exports = {
    getPosts,
    addPost
};
