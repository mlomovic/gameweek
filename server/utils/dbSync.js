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
                    { firstname: 'Petar', lastname: 'Petrovic', username: 'Pera', email: 'pera@test.com', password: 'mojasifra1', role: 0 },
                    { firstname: 'Marko', lastname: 'Markovic', username: 'Maki', email: 'marko@test.com', password: 'mojasifra2', role: 1 },
                    { firstname: 'Zivorad', lastname: 'Zivkovic', username: 'Zika', email: 'zika@test.com', password: 'mojasifra3', role: 2 },
                    { firstname: 'Petar2', lastname: 'Petrovic2', username: 'Pera2', email: 'pera2@test.com', password: 'mojasifra12', role: 0 },
                    { firstname: 'Marko2', lastname: 'Markovic2', username: 'Maki2', email: 'marko2@test.com', password: 'mojasifra22', role: 1 },
                    { firstname: 'Zivorad2', lastname: 'Zivkovic2', username: 'Zika2', email: 'zika2@test.com', password: 'mojasifra32', role: 2 },
                    { firstname: 'Petar3', lastname: 'Petrovic3', username: 'Pera3', email: 'pera3@test.com', password: 'mojasifra13', role: 0 },
                    { firstname: 'Marko3', lastname: 'Markovic3', username: 'Maki3', email: 'marko3@test.com', password: 'mojasifra23', role: 1 },
                    { firstname: 'Zivorad3', lastname: 'Zivkovic3', username: 'Zika3', email: 'zika3@test.com', password: 'mojasifra33', role: 2 }
                ])
            }
        })
        .catch(err => {
            console.log(err);
        });

}