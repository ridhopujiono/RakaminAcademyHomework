const jwt = require("jsonwebtoken");
const SECRET_KEY = require('../config/secret.js'); // Secret Key for JWT

exports.verifyToken = function (req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
      const token = authHeader;
    jwt.verify(token, SECRET_KEY.value, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      next();
    });
  } else {
    res.status(401).json({ message: "Token not provided" });
  }
}