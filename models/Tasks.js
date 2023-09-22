const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const categorySchema = new Schema(
//     {
//       category: ['Initiaion', 'Planning', 'Execution', 'Closing'],
//     }
// )

const taskSchema = new Schema(
    {
        text: {type: String, required: true},
        stage: {type: String, enum:['initiaion', 'planning', 'execution', 'closing'], required: true}
    }
)

module.exports = mongoose.model("Tasks", taskSchema);