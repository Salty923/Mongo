var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
     comment:{
         type: String,
         required: true
     }

});

var Comments = mongoose.model('Comment', CommentsSchema);

module.exports = Comments;