exports.getUsers = (req, res) => {
    res.send("GET: List of all users");
};

exports.createUser = (req, res) => {
    res.send("POST: Create a new user");
};