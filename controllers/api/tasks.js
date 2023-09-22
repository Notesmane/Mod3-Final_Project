const Task = require('../../models/Tasks');


// create a new user in the db
async function create(req, res) {

    try {
        const task = await Task.create(req.body);

        // create a new token
        res.json(task);

    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

module.exports = {create}