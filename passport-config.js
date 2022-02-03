const User = require("./models/User");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;

function configureJwtStrategy(passport) {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: (req) => {
          return req.cookies["jwt"];
        }, // we tell JWTStrategy where to find the token
        secretOrKey: process.env.JWT_SECRET,
      },
      (jwtPayload, done) => {
        return (
          User.findById(jwtPayload.sub)
            // performance improvement, not necessary
            .select("_id firstname lastname username email")
            .then((user) => {
              return done(null, user);
            })
            .catch((err) => {
              return done(err);
            })
        );
      }
    )
  );
}

module.exports = configureJwtStrategy;
