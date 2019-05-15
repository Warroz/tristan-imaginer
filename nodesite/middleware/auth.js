
const User = require('../database/models/User')

module.exports = (req, res, next) => {

// connecte toi dans la base de donnée

User.findById(req.session.userId, (error, user) =>{
    if (error || ! user) {
        return res.redirect ('/user/Login')
    }

    next ()
})

// Vérifier le user


// Si il est dans la base de donnée


// Sinon tu le rediriges 


}