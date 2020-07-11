const mongoose = require("mongoose")
const timestamp = require("mongoose-timestamp")
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    author: {
        type: String,
        default: "Admin"
    },
})

CategorySchema.plugin(timestamp)
module.exports = mongoose.model("category", CategorySchema)