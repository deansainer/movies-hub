const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'determind',
    host: 'localhost',
    port: '5432',
    database: 'movies_hub'
});

module.exports = pool;