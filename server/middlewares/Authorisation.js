const jwt = require("jsonwebtoken");

const Authorisation = (req, res, next) => {
  const cookies = req.cookies;
  if (!cookies || !cookies.token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const {token} = cookies;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.clearCookie('token');
    console.error(error);
    return res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = Authorisation;
