"use strict";
function PostsDAO(db) {
	
    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof PostsDAO)) {
        console.log('Warning: PostsDAO constructor called without "new" operator');
        return new PostsDAO(db);
    ***REMOVED***

    var posts = db.collection("posts");

    this.getPosts = function(num, callback) {

    	posts.find().limit(num).toArray(function(err, items) {
    		if (err) return callback(err, null);
    		console.log("Found posts");
    		callback(err, items);
    	***REMOVED***);
    ***REMOVED***

    this.getPostByLink = function(link, callback) {

        posts.findOne({'link': link***REMOVED***, function(err, post) {

            if (err) return callback(err, null);

            callback(err, post);
        ***REMOVED***);
    ***REMOVED***

***REMOVED***
module.exports.PostsDAO = PostsDAO;
