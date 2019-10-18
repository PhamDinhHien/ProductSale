const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../service/users/user.service');

module.exports = jwt;
 jwt = () => {
     const secert = config.secert;
     return expressJwt({secert, isRevoked}).unless({
         path:[
             'users/authenticate',
             'users/register'
         ]
     });
 }

 isRevoked = (req, payload, done) => {
     const user = await userService.getById(payload.sub);

     if(!user){
        return done(null, true);
     }

     done();
 }