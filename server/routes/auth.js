const express = require('express');

const router = express.Router();


const authController = require('../controllers/authController');
const isAuth = require('../middlewares/isAuth')


// Auth Controller
router.get('/users', isAuth, authController.getUsers);
router.post('/users', isAuth, authController.addUser);

router.delete('/users', isAuth, authController.removeUser);

router.post('/login', authController.login);





module.exports = router;