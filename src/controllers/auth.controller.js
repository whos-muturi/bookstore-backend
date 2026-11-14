const authService = require("../services/auth.service");

async function register(req, res) {

    try {

        const user = await authService.register(req.body);

        return res.status(201).json(user);

    } catch (error) {

        return res.status(400).json({
            message: error.message
        });

    }

}

module.exports = {
    register
};