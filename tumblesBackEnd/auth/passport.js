// passport.js is where we set up how passport will serialize and deserialize users.
// Serializing processes a user token into plain text, which is how it can be assigned to our request header. In this case, we're putting our username onto our request header to represent that user's session.
// Deserializing takes a plain text request header, converts it into a JavaScript-readable format, and checks our database to make sure that user actually exists. This accomplishes two things: It lets us process a session token, and it makes sure a hacker isn't throwing together a request header without an actual user account to back it up.
const passport = require("passport");
const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/tumblrdatabase";
const db = pgp(connectionString);

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });
};

passport.deserializeUser((username, done) => {
  db.one("SELECT * FROM users WHERE username = ${username}", {
    username: username
  })
    .then(user => {
      done(null, user.username);
    })
    .catch(err => {
      done(err, null);
    });
});
};
