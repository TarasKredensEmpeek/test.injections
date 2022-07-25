const sqlite = require('sqlite3');

const db = new sqlite.Database('injections.db');

const getUser = (query, cb) => {
  console.log(`SELECT * FROM users ${query}`);
  db.all(`SELECT * FROM users ${query}`, cb);
}

module.exports = { db, getUser };
