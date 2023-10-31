const db = require("../config/db.config")

exports.register = (data, callback) => {
  db.query(
    `INSERT INTO students (name, username, email, password, role) VALUES (?, ?, ?, ?, ?)`,
    [data.name, data.username, data.email, data.password, data.role],
    (err, results, fields) => {
      if (err) {
        return callback(err)
      }
      return callback(null, "Registration successful")
    }
  )
}
