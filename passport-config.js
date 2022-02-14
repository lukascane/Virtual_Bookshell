const User = require('./Models/UserSchema');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;

function configureJwtStrategy(passport) {
  passport.use(
    'jwt',
    new JWTStrategy(
      {
        jwtFromRequest: (req) => {
          return req.cookies['jwt'];
        }, // we tell JWTStrategy where to find the token
        secretOrKey: process.env.JWT_SECRET,
      },
      (jwtPayload, done) => {
        return (
          User.findById(jwtPayload.sub)
            // performance improvement, not necessary
            .select('_id firstname lastname username email role')
            .then((user) => {
              return done(null, user);
            })
            .catch((err) => {
              return done('This is the error from configureJwtStrategy', err);
            })
        );
      }
    )
  );
}

module.exports = configureJwtStrategy;
