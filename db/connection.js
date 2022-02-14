const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Add your MySQL username
    user: 'root',
    // Add your MySQL password
    password: '',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

module.exports = db;
