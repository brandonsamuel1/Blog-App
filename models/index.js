const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  image: {type: String, default: "https://images.unsplash.com/photo-1491492628162-d88fbe1cdd04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d706966de785bae65f472be89816f417&auto=format&fit=crop&w=800&q=60"},
  body: String,
  created: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Blog", blogSchema);

