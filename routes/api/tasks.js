const express = require('express');
const tasksCtrl = require('../../controllers/api/tasks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const router = express.Router();

// POST 
router.post('/', ensureLoggedIn, tasksCtrl.create);

// GET
router.get('/task/:id', tasksCtrl.getTaskById);

// GET
router.get('/:page', tasksCtrl.getTask);

// DELETE
router.delete('/:id', tasksCtrl.deleteTask);

// PUT
router.put('/:id', tasksCtrl.editTask);



module.exports = router;