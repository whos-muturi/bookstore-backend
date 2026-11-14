const pool = require("../database/db");

async function findByEmail(email) {

    const result = await pool.query(
        `
        SELECT *
        FROM users
        WHERE email = $1
        `,
        [email]
    );

    return result.rows[0];

}
async function create(user) {

    const result = await pool.query(
        `
        INSERT INTO users
        (
            name,
            email,
            password_hash
        )
        VALUES
        (
            $1,
            $2,
            $3
        )
        RETURNING
            id,
            name,
            email,
            created_at
        `,
        [
            user.name,
            user.email,
            user.passwordHash
        ]
    );

    return result.rows[0];

}
module.exports = {
    findByEmail,
    create
};