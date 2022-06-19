



// GET "/" home.ejs
exports.getHome = (req, res, next) => {

    res.render('home', {
        title: "Home",
        path: "/"
    });
};


// GET "/about" 
exports.getAbout = (req, res, next) => {
  
    res.render('about', {
        title: "About",
        path: "/about"
    });
};