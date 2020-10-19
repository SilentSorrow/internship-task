const asyncHandler = require("express-async-handler");
const { createSession, deleteSession } = require("../session");
const validateEmail = require("../utils/emailValidator");
const generateToken = require("../utils/tokenGenerator");
const sendEmail = require("../utils/emailSender");
const User = require("../models/user");
const Token = require("../models/token");

const getUser = asyncHandler(async (req, res) => {
  const result = await User.findById(req.user.id);

  res
    .status(200)
    .json({
      email: result.email,
      fullName: result.fullName,
      age: result.age,
      verified: result.verified,
    });
});

const logOut = asyncHandler(async (req, res) => {
  const sess = req.headers["app-auth"];
  deleteSession(sess);

  res.status(200).json({});
});

const signUp = asyncHandler(async (req, res) => {
  const bodyUser = req.body;

  if (!validateEmail(bodyUser.email)) {
    return res.status(500).json({});
  }

  const user = new User({
    fullName: bodyUser.fullName,
    email: bodyUser.email,
    age: bodyUser.age,
    password: bodyUser.password,
  });

  await user.save();

  const token = new Token({
    user: user.id,
    hash: generateToken(),
  });

  await token.save();

  sendEmail(user.email, token.hash);
  res.status(201).json({});
});

const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !user.isPasswordValid(password) || !user.verified) {
    return res.status(401).json({});
  }

  const sess = createSession(user.id);
  res.status(200).json({ sess });
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { hash } = req.query;

  const token = await Token.findOne({ hash }).populate("user");

  if (!token) {
    return res.status(404).json({});
  }

  await User.updateOne(({ _id: token.user.id }, { $set: { verified: true } }));

  await token.remove();

  const sess = createSession(token.user.id);
  res.status(200).json({ sess });
});

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
  logOut,
  signUp,
  signIn,
  verifyEmail,
  resendEmail,
};
