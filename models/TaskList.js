const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const categorySchema = new Schema(
//     {
//       category: ['Initiaion', 'Planning', 'Execution', 'Closing'],
//     }
// )

const taskListSchema = new Schema(
    {
        title: {type: String, required: true},
        task: [{
            text: {type: String, required: true},
            stage: {type: String, enum:['initiation', 'planning', 'execution', 'closing'], required: true}
        }]
    }
)

module.exports = mongoose.model("TaskList", taskListSchema);