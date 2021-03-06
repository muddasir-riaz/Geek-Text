const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    usernameAndTitle:{type: String, required: true, unique: true, trim: true, minlength: 3},
    booktitle:{type: String, required: true,trim: true, minlength: 3},
    username:{type: String, required: true, trim: true,},
    rating:{ type: Number, required: true, max: 5, min: 0},
},{
    timestamps: true,
});

const Rating = mongoose.model('rating', ratingSchema);

module.exports = Rating;