const Task = require("../../models/Tasks");

// create a new user in the db
async function create(req, res) {
  try {
    const task = await Task.create(req.body);

    // create a new token
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getTask(req, res) {
  const stage = req.params.page;
  console.log(stage);

  try {
    // this tells mongoose to find the collection that has all the stages in each collection
    const task = await Task.find({stage:stage}).exec()
    console.log(task)
    // create a new token
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteTask(req, res) {
  const {id} = req.params;
  console.log(id)
  try {
    await Task.findByIdAndDelete(id)
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
}

async function getTaskById(req, res) {
  const {id} = req.params;
  console.log('hello')
  console.log(id)
  // try {
  //   const task = Task.findById(id)
  //   // res.json(task)
  //   console.log(task)
  // } catch (error) {
  //   console.log(error)
  // }
}

module.exports = { create, getTask, deleteTask, getTaskById };
