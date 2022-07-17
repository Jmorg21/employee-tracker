const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ihtbcutdst1waf!',
  database: 'employee-db'
});

module.exports = db; 