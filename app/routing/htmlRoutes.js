var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app) {
    console.log(friends);

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};