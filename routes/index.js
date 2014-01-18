
/*
 * GET home page.
 */

var Geofancy = require('geofancy');
var config = require('../config');

var client = new Geofancy.Client({
    client_id: config.client_id,
    client_secret: config.client_secret,
    redirect_uri: config.redirect_uri,
    grant_type: 'code'
});

exports.index = function(req, res){
    if (typeof req.query.code === 'string') {
        client.getToken(req.query.code, function (accessToken) {
            if (accessToken) {
                return res.redirect('/?token=' + accessToken);
            }
            return res.render('index', { error: 'Code already used! Please reauthorize', authorizeUrl: client.authorizeUrl() });
        });
    } else if (typeof req.query.token === 'string') {
        client.getFencelogs(req.query.token, function (fencelogs) {
            if (fencelogs) {
                return res.render('index', { fencelogs: fencelogs });
            }
            return res.render('index', { authorizeUrl: client.authorizeUrl() });
        });
    } else {
        res.render('index', { authorizeUrl: client.authorizeUrl() });
    }
};