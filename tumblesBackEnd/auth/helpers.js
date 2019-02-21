// helpers.js is where we use bcrypt to create and verify users. We also create a piece of middleware here, loginRequired, that makes sure a session token is on our request header. We'll use this in routes that we want a user to be logged in to access.
const pgp = require("pg-promise")({});
const connectionString = "postgres:/localhost/tumblrdatabase"
// Line 3 not sure where it connects me just yet. ITS THE DATABASE NAME
const db = pgp(connectionString)
const bcrypt = require('bcryptjs');
