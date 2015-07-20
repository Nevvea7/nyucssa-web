var ContentHandler = require('./content');

module.exports = exports = function(app, db) {
	var contentHandler = new ContentHandler(db);

	app.get('/', contentHandler.displayHomePage);

	app.get('/about', function(req, res) {
		res.render('pages/about');
	***REMOVED***);

	app.get('/post/:link', contentHandler.displayPostByLink);

***REMOVED***