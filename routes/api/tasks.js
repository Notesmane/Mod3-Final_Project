const express = require('express');
const tasksCtrl = require('../../controllers/api/tasks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const router = express.Router();

// POST 
router.post('/', ensureLoggedIn, tasksCtrl.create);

// GET
router.get('/:page', tasksCtrl.getTask);

// DELETE
router.delete('/:id', tasksCtrl.deleteTask);

// GET
router.get('/task/:id', tasksCtrl.getTaskById);

// Edit
// router.edit('/:id', tasksCtrl.editTask);



module.exports = router;