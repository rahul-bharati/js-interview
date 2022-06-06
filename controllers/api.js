const { validateEmail } = require("../utils/validators");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username) {
      throw new Error("Username is required");
    }
    if (!password) {
      throw new Error("Password is required");
    }
    if (!validateEmail(username)) throw new Error("Invalid Email");
    const token = jwt.sign({ username }, JWT_SECRET);
    res.status(200).send({ username, token });
  } catch (error) {
    console.log("Error Occured: ", error);
    res.status(400).send({ status: "failed", error });
  }
};

module.exports = {
  signup,
};
