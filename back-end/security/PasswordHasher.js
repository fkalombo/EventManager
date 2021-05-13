let bcrypt = require('bcryptjs');

 /***
     * Hashes a string passowrd
     */
  async function hashPassword(plainPassword) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(plainPassword, salt);

    return hashPassword;
}

module.exports = {
    hashPassword : hashPassword
}