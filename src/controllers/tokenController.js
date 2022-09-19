const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {
    async store(req, res) {
        const { email = '', password = '' } = req.data;

        if(!email || !password) {
            return res.status(401).json({
                errors: ['Invalid Credentials.']
            });
        }

        const user = await User.findOne({ where: { email } })

        if(!user) {
            return res.status(401).json({
                errors: ['User does not exist.']
            });
        }

        if(!(await user.passwordIsValid(password))) {
            return res.status(401).json({
                errors: ['Invalid password.']
            });
        }

        const { id } = user;
        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION,
        });

        return res.json({ token: token });
    }
}