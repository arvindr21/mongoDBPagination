module.exports = function(app) {
    var db = require('../config/db'),
        route = {};

    // index.html
    route.index = function(req, res) {
        db.testData.count({}, function(err, data) {
            res.render('index', {
                locals: {
                    totalRecords: data,
                    size : 10
                }
            });
        });
    };

    app.get('/', route.index);
};
