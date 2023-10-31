const db = require("../config/db.config")

exports.register = (data, callback) => {
  db.query(
    `INSERT INTO students (name, username, email, password, isStudent) VALUES (?, ?, ?, ?, ?)`,
    [data.name, data.username, data.email, data.password, data.isStudent],
    (err, results, fields) => {
      if (err) {
        return callback(err)
      }
      return callback(null, "Registration successful")
    }
  )
}
