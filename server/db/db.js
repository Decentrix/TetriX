const { Client } = require('pg');
const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb';

const db = new Client({ connectionString });

db.connect(() => console.log('Successfully connected to database'));

// Require db as needed in controllers
module.exports = db;
