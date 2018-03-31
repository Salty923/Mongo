var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MeetUpSchema = new Schema({
    //Name of Meetup
    title:{
        type: String,
        required: true
    },
    //Website Link
    link:{
        type: String,
        required: true
    },
    //Comments added by users
    comments:{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }
});

var Meetup = mongoose.model('Meetup', MeetUpSchema);

module.exports = MeetUp;