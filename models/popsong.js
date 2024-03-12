const mongoose = require("mongoose");
const { Schema } = mongoose;

const ImageSchema = new Schema({
    filename: String,
    url: String,
    publicId: String
});

const PopsongSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    lyrics: {
        type: String,
        required: true
    },
    translate: {
        type: String,
        required: true
    },
    singer: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        require: true,
        default: false
    },
    practice: {
        type: String
    },
    image: ImageSchema
})

module.exports = mongoose.model("Popsong", PopsongSchema);