var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
    title: String,
    body: String
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comments;