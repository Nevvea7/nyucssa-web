"use strict";
var PostsDAO = require('posts').PostsDAO;

function ContentHandler (db) {
	
	var posts = new PostsDAO(db);

	this.displayHomePage = function(req, res, next) {

		posts.getPosts(3, function(err, results) {
			"use strict";
			if (err) return next(err);

			return res.render('pages/index', {
				topposts: results
			***REMOVED***);
		***REMOVED***);
	***REMOVED***


	this.displayPostByLink = function(req, res, next) {

		var link = req.params.link;

		posts.getPostByLink(link, function(err, post) {
			
		***REMOVED***)
	***REMOVED***
***REMOVED***

module.exports = ContentHandler;