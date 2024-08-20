
function logger(req, res, next) {
    console.log(`${req.method}`);    //tells about method 
    next(); 
}

module.exports = logger;