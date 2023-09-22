const express = require('express');
const tasksCtrl = require('../../controllers/api/tasks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const router = express.Router();

// POST 
router.post('/', ensureLoggedIn, tasksCtrl.create);

module.exports = router;