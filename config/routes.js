var ContentHandler = require('content');

module.exports = exports = function(app, db) {
	var contentHandler = new ContentHandler(db);

	app.get('/home', contentHandler.displayHomePage);
	app.get('/', function (req, res){
		res.redirect(302, '/home');
	});

	app.get('/about', function(req, res) {
		res.render('pages/about');
	});

	app.get('/post/:link', contentHandler.displayPostByLink);



	app.use(function (req, res) {
		res.status(404).render('pages/404', {
		url: req.originalUrl,
		error: 'Not found'
    });
  });

}
