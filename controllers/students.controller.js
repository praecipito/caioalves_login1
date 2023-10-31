const studentsService = require("../services/students.service")

exports.register = (req, res, next) => {
  const data = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    category: req.body.role
  }
  studentsService.register(data, (err, results) => {
    if (err) {
      console.log(err)
      return res.status(400).send({
        success: 0,
        data: "Bad request"
      })
    }
    return res.status(200).send({
      success: 1,
      data: results
    })
  })
}
