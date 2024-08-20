exports.getAboutInfo = (req, res) => {
    res.send("GET: Information about this app");
};

exports.postAboutInfo = (req, res) => {
    res.send("POST: Submit information about this app");
};