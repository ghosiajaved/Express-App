var express = require('express');
var router = express.Router();

const AboutController = require('../src/controllers/AboutController');
router.get('/', AboutController.getAboutInfo);
router.post('/', AboutController.postAboutInfo);

router.get('/', function(req, res, next) {
    res.send("ABOUT: GET request");
});


module.exports = router;