const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

//route to view all roles
router.get('/employment_role', (req, res) => {
    const sql = `SELECT * FROM employment_role ORDER BY salary DESC`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows,
      });
    });
  });


//route to add a role
router.post('/role', ({ body }, res) => {

    // Data validation
const errors = inputCheck(body, 'title', 'salary', 'department_id');
if (errors) {
  res.status(400).json({ error: errors });
  return;}

    const sql = `INSERT INTO employment_role (title, salary, department_id) VALUES (?,?,?)`;
    const params = [body.title, body.salary, body.department_id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });



  module.exports = router;