const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../db/psql');

router.get('/register', async (req, res) => {
  try {
    let response = await db.query(`INSERT INTO users (
      first_name,
      last_name,
      email,
      password
    ) VALUES ($1, $2, $3, $4)`, ['tom', 'lee', 'tom@lee.com', 'password']);
    console.log(response.rows)
  } catch (e) {
    console.log(e);
  }
});

router.get('/login', (req, res) => {
  res.json({ hello: 'world' });
});

module.exports = router;
