const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asynHandler = require('express-async-handler');
const User = require('../models/userModel');



//Create a new user
//Route POST/api/users
//Access public

const registerUser = asynHandler( async (req, res) => {
    const {name, email, password} = req.body;
    if( !name || !email || !password) {
        res.status(400);
        throw new Error('Please all credentials are required!');
    }

    //if user exists

    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400);
        throw new Error('User already exists!');
    }

    //Hash the password


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //Create a user

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if(user) {
        res.status(201);
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400);
        throw new Error('Invalid credentials!');
    }


    res.json({message: 'Register a user'});
})



// Authenticate a user
//Route POST/api/users/login
//Access public

const loginUser = asynHandler( async (req, res) => {
    res.json({message: 'Login user'});
})




//Get user data
//Route GET/api/users/me
//Access public

const getMe = asynHandler( async (req, res) => {
    res.json({message: 'User data display'});
})


module.exports = {
    registerUser,
    loginUser,
    getMe,
}