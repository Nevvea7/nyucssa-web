function PostsDAO(db) {
	"use strict";


    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof PostsDAO)) {
        console.log('Warning: PostsDAO constructor called without "new" operator');
        return new PostsDAO(db);
    ***REMOVED***

    var posts = db.collection("fakeposts");

    this.getPosts = function(num, callback) {
    	"use strict";

    	posts.find().limit(num).toArray(function(err, items) {
    		"use strict";
    		if (err) return callback(err, null);
    		console.log("Found posts");
    		callback(err, items);
    	***REMOVED***);
    ***REMOVED***

    this.getPostByLink = function(link, callback) {
        "use strict";

        posts.findOne({'link': link***REMOVED***, function(err, post) {
            "use strict";

            if (err) return callback(err, null);

            callback(err, post);
        ***REMOVED***);
    ***REMOVED***
***REMOVED***
module.exports.PostsDAO = PostsDAO;