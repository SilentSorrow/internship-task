const asyncHandler = require('express-async-handler')
const validateEmail = require("../utils/validateEmail");
const generateToken = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");
const User = require("../models/user");
const Token = require("../models/token");

//find user by session
const getUser = asyncHandler(async (req, res) => {
    const result = await User.findById(req.session.userId);

    res.status(200).json(result);
});

//create user and token for email verification
const signUp = asyncHandler(async (req, res) => {
    const bodyUser = req.body;

    if (!validateEmail(bodyUser.email)){
        return res.status(500).json({});
    }

    const user = new User({
        fullName: bodyUser.fullName,
        email: bodyUser.email,
        age: bodyUser.age,
        password: bodyUser.password,
    });

    await user.save()

    const token = new Token({
        user: user.id,
        hash: generateToken(),
    });

    await token.save();

    sendEmail(user.email, token.hash);
    res.status(201).json({});
});

//sign in user with session
const signIn = asyncHandler(async (req, res) => {
    const { email, password} = req.body;

    const user = await User.findOne({ email });
    
    if (!user || !user.isPasswordValid(password) || !user.verified) {
        return res.status(401).json({});
    }

    req.session.userId = user.id;
    res.status(200).json({});
});

//verify email by token 
const verifyEmail = asyncHandler(async (req, res) => {
    const { hash } = req.body;

    const token = await Token.findOne({ hash }).populate("user");

    if (!token) {
        return res.status(404).json({});
    }

    await User.updateOne(({ _id: token.user.id }, { $set: { verified: true }}));

    await token.remove();

    req.session.userId = token.user.id;
    res.status(200).json({});
});

//resend verification
const resendEmail = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const token = await Token.findOne({ user: user.id });

    if (!user || !user.isPasswordValid(password)) {
        return res.status(401).json({});
    }

    if (!token) {
        return res.status(404).json({});
    }

    sendEmail(user.email, token.hash);
    res.status(200).json({});
});

module.exports = {
    getUser,
    signUp,
    signIn,
    verifyEmail,
    resendEmail
}