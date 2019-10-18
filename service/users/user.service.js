const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../../helpers/connectDB');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

const authenticate = async({username, password}) => {
    const user = await User.findOne({username});
    if(user && bcrypt.compareSync(password, user.hash)){
        const {hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({sub: user.id}, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}
