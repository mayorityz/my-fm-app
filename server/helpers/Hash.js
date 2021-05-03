const bcrypt = require("bcryptjs");

class Hash {
  static encrypt_(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  static decrypt_() {}

  static checkPassWord(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

module.exports = Hash;
