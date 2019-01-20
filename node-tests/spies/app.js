let db = require('./db.js');
module.exports.handleSignup = (email, password) => {
  // 1 check if email already exists
  // 2 save the user to the db
  // 3 send the welcome email

  db.saveUser({email, password});
  // step 2 above.

};
