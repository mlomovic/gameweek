const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const User = require("../models/user");





// GET http://localhost:3000/users
exports.getUsers = (req, res, next) => {

    User.findAll()
        .then((users) => {
            res.status(200).send(users);
        })
        .catch((err) => console.log(`Error queriing database - ${err}`));

}



// POST http://localhost:3000/users
exports.addUser = (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    console.log(req.body);
    // Generating hashed password

    User.findOne({ where: { username: req.body.username } })
        .then(user => {
            if (user) {
                res.status(404).send('User already exist.')
            } else {

                User.create({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, salt),
                    role: req.body.role
                })
                    .then(user => {
                        res.status(200).send(user)
                    })
                    .catch((err) => console.log(err));
            }
        })
        .catch((err) => console.log(err));

}


// DELETE http://localhost:3000/users
exports.removeUser = (req, res, next) => {
    _id = req.body.id;
    if (!_id) {
        const err = new Error('Id must be valid.');
        err.statusCode = 404;
        throw err;
    }

    User.destroy({
        where: {
            id: _id
        }
    })
        .then(done => {
            if (done){
            console.log(done)
            res.status(200).json({message: 'User removed'})
            }else{
                res.status(404).json({message: 'There is no user with this ID.'});
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Something is wrong.'});
        })
}


// POST http://localhost:3000/login
exports.login = (req, res, next) => {
    username = req.body.username;
    password = req.body.password;

    User.findOne({ where: { username: req.body.username } })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(password, user.password)) {
                    // console.log(user.dataValues)
                    const token = jwt.sign({
                        userId: user.dataValues.id,
                        email: user.dataValues.email,
                        role: user.dataValues.role
                    }, process.env.SECRET_KEY, {
                        expiresIn: '1h'
                    })

                    res.status(200).json({
                        message: 'Access granted.',
                        token: token,
                        userId: user.dataValues.id
                    });

                } else {

                    res.status(404).send('User name or password not ok.')
                }
            } else {

                res.status(404).send('User name or password not ok.')
            }
        })
        .catch((err) => console.log(err));

}



