const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        text: {type: String, reqiured: true},
        category: {

        }
    }
)

module.exports = mongoose.model("Category", categorySchema);