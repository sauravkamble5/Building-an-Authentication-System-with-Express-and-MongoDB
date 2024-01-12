const JWT = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;



const authenticate = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token missing. Please provide an authorization token.",
      });
    }
    JWT.verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Invalid token. Un-Authorized User",
        });
      } else {
        console.log("User Id: ",decode.id);
        req.body.id = decode.id;
        next();
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      err: err.message,
    });
  }
};
module.exports = {  authenticate };
