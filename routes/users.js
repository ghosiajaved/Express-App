var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send("USERS PAGE: GET request"); 
});

module.exports = router;