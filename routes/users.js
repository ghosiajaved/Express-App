var express = require('express');
var router = express.Router();

const UserController = require('../src/controllers/UserController');
router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);


router.get('/', function(req, res, next) {
    res.send("USERS PAGE: GET request"); 
});

module.exports = router;