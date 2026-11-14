const pool = require("../database/db");

async function findAll() {

    const result = await pool.query(
        "SELECT * FROM users"
    );

    return result.rows;
}

module.exports = {
    findAll
};