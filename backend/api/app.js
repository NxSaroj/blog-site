/** Importing Packages */
const express = require("express");
const app = express();

/** Importing Schema & Components */
const blogModel = require("../db/models/blogModel");
require("../db/connection/mongo-connect");
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1> Fine & Working </h1>`);
});

app.post("/api/blog/v1/create-blog", (req, res) => {
  const { blogTitle, blogContent, blogAuthor } = req.body;
  if (!blogTitle && !blogAuthor && !blogContent)
    res.status(400).send({ error: `Invalid Arguments recived` });

  blogModel
    .create({
      blogAuthor,
      blogContent,
      blogTitle,
    })
    .then(() => {
      res.status(200).send({ message: true });
    })
    .catch((err) => {
      res.status(500).send({ error: "Internal server Error" });
      return;
    });
});

app.get("/api/blog/v1/get-blog-info/:blogId", async (req, res) => {
  const { blogId } = req.params;
  try {
    const blogInfo = await blogModel.findOne({ blogId });
    if (!blogInfo) {
      res.status(404).send({ error: `Blog not founded` });
      return;
    }
    res.status(200).send({
      blogTitle: blogInfo.blogTitle,
      blogContent: blogInfo.blogContent,
      blogAuthor: blogInfo.blogAuthor,
    });
  } catch (error) {
    res.send(500).send({ error: "Internal server error" });
    return;
  }
});

app.get("/api/blog/v1/get-all-blogs", async (req, res) => {
  console.log(req)
  const fetchedBlogs = await blogModel.find();
  if (!fetchedBlogs || fetchedBlogs.length == 0)
    res.status(404).send({
      message: "No blog found",
    });
  fetchedBlogs.map((blog) => {
    res.send(
      JSON.stringify({
        blogTitle: blog.blogTitle,
        blogContent: blog.blogContent,
        blogAuthor: blog.blogAuthor,
      })
    );
  });
});

app.listen(3200, () => {
  console.log(`Backend: http://localhost:3200`);
});
