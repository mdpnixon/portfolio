const Email = require('../../models/Email');

module.exports = {
    create
}

function create(req, res) {
    Email.create(req.body, function(err, email) {
        res.status(200).json('okay')
    })
}