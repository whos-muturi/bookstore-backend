const repository = require("../repositories/user.repository");
const bcrypt = require("bcrypt");

async function register(data) {

    const { name, email, password } = data;

    // validation
    if (!name || !email || !password) {
        throw new Error("All fields are required.");
    }

    // email already exists?
    const existingUser = await repository.findByEmail(email);

    if (existingUser) {
        throw new Error("Email already registered.");
    }

    // hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // save
    const user = await repository.create({
        name,
        email,
        passwordHash
    });

    return user;

}

module.exports = {
    register
};