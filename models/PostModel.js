const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title:  String,
    subtitle: String,
    imageData: Buffer,
    author: String,
    content: String,
    tags: String,
    date: Date
});

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;