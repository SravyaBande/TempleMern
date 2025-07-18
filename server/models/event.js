
const mongoose=require('mongoose');

const eventSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    description : String,
    date : {type : Date, required : true},
    time : String,
    location : String,
}, {
    timestamps : true
});

module.exports = mongoose.model('event', eventSchema);


