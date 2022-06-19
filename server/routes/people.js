const express = require('express');

const router = express.Router();


const peopleController = require('../controllers/peopleController');


// Home Controller
router.get('/list', peopleController.getList);





module.exports = router;