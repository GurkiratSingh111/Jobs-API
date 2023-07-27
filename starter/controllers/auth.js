const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const bcrypt = require('bcryptjs');


const register = async (req, res) => {
    const { name, email, password } = req.body;
    // if (!name || !email || !password) {
    //     throw new BadRequestError("Please provide name, email and password");
    // } //This can be used but not required because we already have mongoDB validator
    //hash password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
    // const tempUser = { name, email, password: hashedPassword }
    // const user = await User.create({ ...tempUser })
    // res.status(200).json({ "user": user });

    // res.status(StatusCodes.CREATED).json({ user });
    //res.send('register user');

    const user = await User.create({ name, email, password });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
}

const login = async (req, res) => {
    res.send('login user');
}

module.exports = { register, login }

