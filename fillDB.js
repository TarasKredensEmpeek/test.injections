const { db } = require('./localDB');

const usersFirstNames = ['Maria', 'Vasyl', 'Petro', 'Valentuna', 'Oksana', 'Maria', 'Ostap'];
const usersLastNames = ['Ivanova', 'Stepanenko', 'Novorukov', 'Lozova', 'Perekotypole', 'J.Korolevych'];
const emailDomains = ['gmail.com', 'i.ua', 'yahoo.com', 'mailinator.com', 'm.ua'];

const getDataIndex = (dataCollections) => Math.max(0, Math.min(Math.round(Math.random() * dataCollections.length - 1), dataCollections.length - 1));

const generateUsers = (numberOfUsers = 1) => {
  for (let i = 0; i <= numberOfUsers; i++) {
    const firstNameIndex = getDataIndex(usersFirstNames);
    const lastNameIndex = getDataIndex(usersLastNames);
    const emailDomainIndex = getDataIndex(emailDomains);

    const firstName = usersFirstNames[firstNameIndex];
    const lastName = usersLastNames[lastNameIndex];
    const email = `${firstName}.${lastName}@${emailDomains[emailDomainIndex]}`.toLowerCase();
    const age = Math.round(Math.random() * 100);

    db.run(`
      insert into users(id, firstName, lastName, age, email)
      values(null, "${firstName}", "${lastName}", ${age}, "${email}")
    `);
  }
}

db.run(`
  CREATE TABLE IF NOT EXISTS users(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    age INTEGER,
    email TEXT
  )
`, () => generateUsers(10));

module.exports = {};
