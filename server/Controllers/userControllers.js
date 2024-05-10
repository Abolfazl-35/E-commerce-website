const userModel = require("../Moduls/userModels");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const { options } = require("../Routs/userRoute");
const crypto = require("crypto");
const { sendVerifacationMail } = require("../utils/sendVerificationMail");
const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

const passwordConfig = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 0, //🟥 dont require special chars
};

const registerUser = async (req, res) => {
  const {
    Lastname,
    Firstname,
    email,
    password,
    DateOfBirth,
    PrivecyPolicyCheck,
    Select,
  } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (user)
      return res.status(400).json("User whit the given email already exist...");
    user = new userModel({
      Firstname,
      email,
      password,
      DateOfBirth,
      PrivecyPolicyCheck,
      Select,
      Lastname,
      emailToken: crypto.randomBytes(64).toString("hex"),
    });

    if (
      !Firstname ||
      !email ||
      !password ||
      !Lastname ||
      !DateOfBirth ||
      !PrivecyPolicyCheck ||
      !Select
    )
      return res.status(400).json("All fields are required...");

    if (!validator.isEmail(email))
      return res.status(400).json("Please Enter a valid Email...");

    if (!validator.isStrongPassword(password))
      return res.status(400).json("Please Enter a Strong password...");

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    // sendVerifacationMail(user);

    const token = createToken(user._id);
    res
      .status(200)
      .json({
        _id: user._id,
        Firstname,
        Lastname,
        Select,
        email,
        token,
        isVerified: user.isVerified,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json("an error aquierd please check your connection");
  }
};
const loginUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });

    if (!user) return res.status(400).json("Invalid email or password");

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword)
      return res.status(400).json("Invalid email or password");

    const token = createToken(user._id);

    res.status(200).json({
      _id: user._id,
      Firstname: user.Firstname,
      email,
      token,
      isVerified: user.isVerified,
    });
  } catch (error) {
    return res.status(500).json("error");
  }
};

const findUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("error");
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("error");
  }
};

const verifyEmail = async (req, res) => {
  console.log(req.body.emailToken);
  try {
    const emailToken = req.body.emailToken;

    if (!emailToken) return res.status(404).json("EmailToken not found...");
    const user = await userModel.findOne({ emailToken });
    if (user) {
      user.emailToken = null;
      user.isVerified = true;

      await user.save();

      const token = createToken(user._id);

      res.status(200).json({
        _id: user._id,
        Firstname: user.Firstname,
        Lastname: user.Lastname,
        email: user.email,
        token,
        Select: user.Select,
        DateOfBirth: user.DateOfBirth,
        isVerified: user?.isVerified,
      });
    } else res.status(404).json("Email verification failed,invalid token");
  } catch (error) {
    res.status(500).json(error.massage);
  }
};

const verification = async (req, res) => {
  console.log(req.body._id)
  const userId = req.body._id;
  try {
    const user = await userModel.findById(userId);
    console.log(user)
    sendVerifacationMail(user);
    return res.status(200).json("email verifacation has been sent");
  } catch (error) {
    res.status(500).json("error check your connection");
  }
};

module.exports = {
  verification,
  registerUser,
  loginUser,
  findUser,
  getUsers,
  verifyEmail,
};
