const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'bootcamp123',
      database: 'employee_info'
    },
    console.log('Connected to the employee_info database.')
  );

module.exports = db;