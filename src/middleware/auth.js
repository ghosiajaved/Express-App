
function auth(req, res, next) {
    if (req.query.admin === 'true') {
        next();          // User is authenticated, proceed
    } else {
        res.status(401).send('Not Unauthorized');
    }
}

module.exports = auth;