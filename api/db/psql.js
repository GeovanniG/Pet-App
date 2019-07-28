const { Pool, Client } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'api',
  password: process.env.DB_PASS,
  port: 5432
})

const createTables = async () => {
  try {
    const res1 = await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(355),
        last_name VARCHAR(355), 
        email VARCHAR(355) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL CHECK (length(password) > 7),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log(res1);

    const res2 = await pool.query(`
      CREATE TABLE IF NOT EXISTS photos (
        id SERIAL PRIMARY KEY,
        url TEXT NOT NULL UNIQUE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      ); 
    `)
    console.log(res2);

    // likes have info of user and photo
    const res3 = await pool.query(`
      CREATE TABLE IF NOT EXISTS likes (
        id SERIAL PRIMARY KEY,
        photo_id SERIAL REFERENCES photos(id) ON DELETE CASCADE,
        user_id SERIAL REFERENCES  users(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `)
    console.log(res3);
  
  } catch (e) {
    console.log(e);
  }
}
const newUser = async () => {
  try {
    let res = await pool.query(`INSERT INTO users (
      first_name,
      last_name,
      email,
      password
    ) VALUES ($1, $2, $3, $4)`, ['tom', 'lee', 'tom@lee.com', 'password']);
    console.log(res)
  } catch (error) {
    console.log(error);
  }
}

newUser();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}