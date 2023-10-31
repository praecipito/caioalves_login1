const studentsController = require('../controllers/students.controller')

const express = require('express')

const router = express.Router()

router.post('/register', studentsController.register)
/**
 * @swagger
 * /students/register:
 *   post:
 *      description: Used to register student
 *      tags:
 *          - students
 *      parameters:
 *          - in: body
 *            name: Student
 *            description: Student data
 *            schema:
 *              type: object
 *              required:
 *                 - name
 *                 - username
 *                 - email
 *                 - password
 *                 - repeatPassword
 *                 - isStudent
 *              properties:
 *                  name:
 *                      type: string
 *                      minLength: 6
 *                      maxLength: 100
 *                      example: John Doe
 *                      description: Student's full name.
 *                  username:
 *                      type: string
 *                      minLength: 6
 *                      maxLength: 30
 *                      example: johndoe
 *                      unique: true
 *                      description: Username to be used in the login.
 *                  email:
 *                      type: string
 *                      maxLength: 100
 *                      example: john@doe.com
 *                      unique: true
 *                      description: Valid email address.
 *                  password:
 *                      type: string
 *                      pattern: "^[a-zA-Z0-9]{3,30}$"
 *                      example: abc123
 *                      description: Alphanumeric password between 3 and 30 characters.
 *                  repeatPassword:
 *                      type: string
 *                      example: abc123
 *                      description: Re-enter the password to confirm. Must match the 'password' field.
 *                  isStudent:
 *                      type: integer
 *                      enum: [0, 1]
 *                      description: Indicates whether the user is a student or not. 0 - Not a student, but a teacher (false). 1 - Student (true).
 *      responses:
 *          '200':
 *              description: Student added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router
