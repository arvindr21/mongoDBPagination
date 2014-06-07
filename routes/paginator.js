module.exports = function(app) {
    var db = require('../config/db')
    api = {};

    api.testData = function(req, res) {
        var page = parseInt(req.query.page),
            size = parseInt(req.query.size),
            skip = page > 0 ? ((page - 1) * size) : 0;


        db.testData.find(null, null, {
            skip: skip,
            limit: size
        }, function(err, data) {
            if (err) {
                res.json(500, err);
            } else {
                res.json({
                    data: data
                });
            }
        });
    };


    app.get('/api/testData', api.testData);
};