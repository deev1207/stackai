const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const blogItem = new Schema({
    title: String,
    content: String,
    author: String,
    date: Date,
});


module.exports = mongoose.model("Blog", blogItem);