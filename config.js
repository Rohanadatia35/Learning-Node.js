const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});
con.connect((err) => {
  if (err) {
    console.log(err);
  }
});
module.exports = con;
