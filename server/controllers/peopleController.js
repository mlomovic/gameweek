const People = require('../models/people')


// GET "/list" home.ejs
exports.getList = (req, res, next) => {

    res.render('get-list', {
        title: "List of persons",
        path: "/list",
        data: People.getData()
    });
};