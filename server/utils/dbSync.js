const sequelize = require('./database');
const User = require('../models/user');

exports.dbSync = () => {
    sequelize
        .sync()
        // .sync({ alter: true })
        // .sync({ force: true })
        .then(result => {
            // console.log(result);
            return User.findByPk(1);
            
        })       
        .then(user => {
            if (!user) {
                User.bulkCreate([
                    { firstname: 'Milos', lastname: 'Lomovic', username: 'lomi', email: 'mlomovic@test.com', password: '$2a$10$oFM5DqF2SBuqQj5UHBT.xOid819JeB49hr0aTQTBkSi7iCI9H3z9y', role: 2 }, //lomi1985
                    { firstname: 'Bojan', lastname: 'Hodzic', username: 'hodza', email: 'bhodzic@test.com', password: '$2a$10$MLt8bLY46oRp9QU3Lgu7Vuyfuw3CIc/eJLghlle9XosjsIsKjCtcS', role: 2 }, //hodza1985
                ])
            }
        })
        .catch(err => {
            console.log(err);
        });

}