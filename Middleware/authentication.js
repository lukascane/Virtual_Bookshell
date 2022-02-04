const jwt = require("jsonwebtoken");

/**
 * Generates the token
 * @param {*} user document object
 * @returns
 */
exports.generateToken = (user) => {
  const payload = { sub: user._id }; // jsonwebtoken adds "iat" property to payload

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, asyncToken) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(asyncToken);
      }
    );
  });
};
