const jwt = require("jsonwebtoken");
const SECRET_KEY = require('../config/secret.js'); // Secret Key for JWT
const userModel = require('../models/userModel.js'); // User Model

async function isAdmin(id) {
  const getData = await userModel.findBy('id', id);
  if (getData[0].role != "Admin") {
    return false;
  }
  return true;
}
exports.auth = async function (req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, SECRET_KEY.value, async (err, user) => {

      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      // Check if isAdmin
      const checkIsAdmin = await isAdmin(user.id);
      if (!checkIsAdmin) {
        return res.status(403).json({ message: "Youre not registered as Admin role" });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Token not provided" });
  }
}