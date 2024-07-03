// todoController.js

// Import todo model
const Blog = require("../models/Blog");

// Controller functions
exports.createBlog = async (req, res) => {
  try {
    const { title, content, author, dueDate } = req.body;

    // Create a new Blog item
    const blog = new Blog({
      title,
      content,
      author,
      dueDate,
    });

    // Save the todo item to the database
    await blog.save();

    res.status(201).send(blog);
  } catch (error) {
    res.status(400).send(err);
  }
};

exports.getBlogs = async (req, res) => {
  try {

    // Fetch all todo items from the database
    const blogs= await Blog.find({})
    res.send(blogs);
  } catch (error) {
    res.status(400).send(error);
  }
};

