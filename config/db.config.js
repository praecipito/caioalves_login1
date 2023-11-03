const mysql = require('mysql')

let con = mysql.createConnection({
  port: 3306,
  host: "pk1l4ihepirw9fob.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "von73rrp4r0jisnd",
  password: "xn4eydk5xokjy0ls",
  database: "uii8ibdvuz432j2r"
})

module.exports = con
