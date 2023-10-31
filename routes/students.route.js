const studentsController = require('../controllers/students.controller')

const express = require('express')

const router = express.Router()

router.post('/register', studentsController.register)

module.exports = router
 